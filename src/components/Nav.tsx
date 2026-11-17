import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

const links = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

function useTheme() {
  const [dark, setDark] = useState(() => {
    const t = document.documentElement.dataset.theme;
    return t ? t === "dark" : !window.matchMedia("(prefers-color-scheme: light)").matches;
  });
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  };
  return { dark, toggle };
}

export default function Nav() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav" data-scrolled={scrolled}>
      <div className="container nav-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="dot" aria-hidden="true" />
          <span>
            Fays<span className="brand-ai">AI</span>
          </span>
        </a>
        <nav id="nav-links" className="nav-links" data-open={open} aria-label="Sections">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              <span className="slash" aria-hidden="true">/</span>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="icon-btn menu-toggle"
            aria-expanded={open}
            aria-controls="nav-links"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="burger" data-open={open} aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
