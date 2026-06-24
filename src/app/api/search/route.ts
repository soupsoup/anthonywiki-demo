import { NextRequest, NextResponse } from "next/server";
import { getAllArticles } from "@/lib/articles";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q") || "";
  const quick = req.nextUrl.searchParams.get("quick") === "1";
  if (!q.trim()) return NextResponse.json([]);

  const all = await getAllArticles();
  const lower = q.toLowerCase();

  const results = all
    .filter(
      (a) =>
        a.title.toLowerCase().includes(lower) ||
        (!quick && (a.summary.toLowerCase().includes(lower) || a.content.toLowerCase().includes(lower)))
    )
    .slice(0, quick ? 6 : 20)
    .map((a) => ({ slug: a.slug, title: a.title, summary: a.summary }));

  return NextResponse.json(results);
}
