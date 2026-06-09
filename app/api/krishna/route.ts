import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WEBHOOK_URL =
  process.env.N8N_WEBHOOK_URL ||
  "https://n8n.tilottamwagh.com/webhook/krishna";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const upstream = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
      // n8n LLM workflows can take a while
      signal: AbortSignal.timeout(120_000),
    });

    const text = await upstream.text();
    let data: unknown;
    try {
      data = JSON.parse(text);
    } catch {
      data = { output: text };
    }

    return NextResponse.json(data, { status: upstream.ok ? 200 : upstream.status });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { error: "Upstream webhook failed", detail: message },
      { status: 502 }
    );
  }
}
