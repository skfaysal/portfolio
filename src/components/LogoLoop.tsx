import { useState } from "react";
import { companies, type Company } from "../data";

// Size every logo to roughly the same visual area so wide wordmarks
// don't dwarf square marks.
const AREA = 1900;
const MAX_H = 46;
function size(aspect: number, scale = 1) {
  const h = Math.min(MAX_H, Math.sqrt(AREA / aspect)) * scale;
  return { width: Math.round(h * aspect), height: Math.round(h) };
}

function Logo({ c, hidden }: { c: Company; hidden: boolean }) {
  const { width, height } = size(c.aspect, c.scale);
  const mark = (
    <>
      <span className="logo-mark" style={{ width, height, ["--src" as string]: `url("${c.logo}")` }} />
      {c.showName && <span>{c.name}</span>}
    </>
  );
  if (!c.url) {
    return (
      <span className="logo-item" role={hidden ? undefined : "img"} aria-label={hidden ? undefined : c.name}>
        {mark}
      </span>
    );
  }
  return (
    <a
      className="logo-item"
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={hidden ? -1 : undefined}
      aria-label={hidden ? undefined : `${c.name}${c.relation === "client" ? " (client)" : ""}, opens company website`}
    >
      {mark}
    </a>
  );
}

export default function LogoLoop() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="logos" role="group" aria-labelledby="logos-title">
      <div className="logos-head">
        <p id="logos-title">Teams and clients I've built for</p>
        <button className="text-btn" onClick={() => setPaused((p) => !p)} aria-pressed={paused}>
          {paused ? "Play" : "Pause"}
        </button>
      </div>
      <div className="loop" data-paused={paused}>
        <div className="loop-track">
          {[false, true].map((hidden) => (
            <ul className="loop-list" key={String(hidden)} aria-hidden={hidden || undefined}>
              {companies.map((c) => (
                <li key={c.name}>
                  <Logo c={c} hidden={hidden} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
