"use client";

import { useLang } from "@/context/LangContext";
import type { Lang } from "@/data/portfolio";
import { DATA } from "@/data/portfolio";
import { useEffect, useState } from "react";

export default function Navigation({ onSearch }: { onSearch: () => void }) {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links: [string, string][] = [
    [t.navAbout, "#about"],
    [t.navProjects, "#projects"],
    [t.navSkills, "#skills"],
    [t.navExp, "#experience"],
    [t.navEdu, "#education"],
    [t.navBlog, "#blog"],
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 40px",
        height: "58px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(249,248,246,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: "13px",
          color: "var(--fg)",
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        db<span style={{ color: "var(--accent)" }}>.</span>
      </a>

      <div
        className="nav-links"
        style={{ display: "flex", gap: "24px", alignItems: "center" }}
      >
        {links.map(([label, href]) => (
          <NavLink key={href} href={href}>
            {label}
          </NavLink>
        ))}

        <button
          onClick={onSearch}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            padding: "5px 12px",
            borderRadius: "7px",
            border: "1px solid var(--border2)",
            background: "transparent",
            color: "var(--fg3)",
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "11px",
            transition: "all 0.18s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--bg2)";
            e.currentTarget.style.color = "var(--fg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--fg3)";
          }}
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <circle
              cx="6"
              cy="6"
              r="4.5"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M9.5 9.5L13 13"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <a
          href={`mailto:${DATA.email}`}
          style={{
            padding: "6px 16px",
            borderRadius: "8px",
            fontSize: "13px",
            textDecoration: "none",
            background: "var(--fg)",
            color: "var(--bg)",
            fontWeight: 500,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {t.navContact}
        </a>

        <button
          onClick={() => setLang((lang === "tr" ? "en" : "tr") as Lang)}
          style={{
            padding: "5px 12px",
            borderRadius: "7px",
            border: "1px solid var(--border2)",
            background: "transparent",
            color: "var(--fg2)",
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.06em",
            transition: "all 0.18s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--bg2)";
            e.currentTarget.style.color = "var(--fg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--fg2)";
          }}
        >
          {lang === "tr" ? "EN" : "TR"}
        </button>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: string }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontSize: "13px",
        color: hov ? "var(--fg)" : "var(--fg2)",
        textDecoration: "none",
        transition: "color 0.18s",
      }}
    >
      {children}
    </a>
  );
}
