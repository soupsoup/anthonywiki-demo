import Link from "next/link";

export default function Sidebar() {
  return (
    <div>
      <div className="wiki-sidebar-section">
        <p className="wiki-sidebar-section-title">Navigation</p>
        <ul className="wiki-sidebar-nav">
          <li><Link href="/">Main page</Link></li>
          <li><Link href="/special/all-articles">All articles</Link></li>
          <li><Link href="/special/categories">Categories</Link></li>
          <li><Link href="/special/random">Random article</Link></li>
        </ul>
      </div>
      <div className="wiki-sidebar-section">
        <p className="wiki-sidebar-section-title">Contribute</p>
        <ul className="wiki-sidebar-nav">
          <li><Link href="/wiki/new">New article</Link></li>
          <li><Link href="/wiki/help">Help</Link></li>
        </ul>
      </div>
      <div className="wiki-sidebar-section">
        <p className="wiki-sidebar-section-title">Tools</p>
        <ul className="wiki-sidebar-nav">
          <li><Link href="/search">Search</Link></li>
          <li><Link href="/special/backlinks">Backlinks</Link></li>
        </ul>
      </div>
      <div className="wiki-sidebar-section" style={{ marginTop: "2rem" }}>
        <div style={{
          fontFamily: "var(--font-family-sans)",
          fontSize: "0.6875rem",
          color: "var(--color-disabled)",
          lineHeight: 1.5
        }}>
          <p style={{ margin: "0 0 0.25rem" }}>Content is available under</p>
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" style={{ color: "var(--color-disabled)" }}>CC BY-SA 4.0</a>
        </div>
      </div>
    </div>
  );
}
