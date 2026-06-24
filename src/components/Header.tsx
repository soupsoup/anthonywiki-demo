"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<{ slug: string; title: string }[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    if (!query.trim()) { setSuggestions([]); return; }
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}&quick=1`);
      if (res.ok) setSuggestions(await res.json());
    }, 200);
  }, [query]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setShowSuggestions(false);
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <header className="wiki-header">
      <div className="wiki-header-inner">
        <Link href="/" className="wiki-wordmark">
          <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24" stroke="#54595d" strokeWidth="1.5" fill="#f8f9fa"/>
            <text x="25" y="32" textAnchor="middle" fontSize="22" fill="#3366cc" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="bold">W</text>
          </svg>
          <span className="wiki-wordmark-text">ReyesWiki</span>
        </Link>

        <div className="wiki-header-search">
          <form className="wiki-search-form" onSubmit={handleSubmit} style={{ position: "relative" }}>
            <input
              className="wiki-search-input"
              type="search"
              placeholder="Search ReyesWiki"
              value={query}
              onChange={e => { setQuery(e.target.value); setShowSuggestions(true); }}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              autoComplete="off"
            />
            <button className="wiki-search-btn" type="submit">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
              Search
            </button>
            {showSuggestions && suggestions.length > 0 && (
              <div style={{
                position: "absolute", top: "100%", left: 0, right: 0,
                background: "white", border: "1px solid #a2a9b1",
                boxShadow: "0 2px 8px rgba(0,0,0,.15)", zIndex: 200,
                fontFamily: "var(--font-family-sans)", fontSize: "0.875rem"
              }}>
                {suggestions.map(s => (
                  <Link
                    key={s.slug}
                    href={`/wiki/${s.slug}`}
                    style={{ display: "block", padding: "0.5rem 0.875rem", borderBottom: "1px solid #eaecf0", color: "#202122" }}
                    onMouseDown={e => e.preventDefault()}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </form>
        </div>

        <nav className="wiki-header-nav">
          <Link href="/">Main page</Link>
          <Link href="/special/all-articles">All articles</Link>
          <Link href="/special/categories">Categories</Link>
          <Link href="/wiki/new">New article</Link>
        </nav>
      </div>
    </header>
  );
}
