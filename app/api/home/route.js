import { NextResponse } from "next/server";

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  return NextResponse.json({ id });
}
