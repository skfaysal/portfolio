import { useEffect, useState } from "react";

/**
 * The hero name, rendered like an LLM completion: it streams in token by
 * token, each token tinted like a tokenizer view, then settles into plain
 * type. Hovering (or focusing) the name brings the token view back.
 */
const TOKENS = ["She", "ikh", " Md", ".", " Fay", "sal"];
const STEP_MS = 140;

export default function TokenName({ name }: { name: string }) {
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [shown, setShown] = useState(reduce ? TOKENS.length : 0);
  const [settled, setSettled] = useState(reduce);

  useEffect(() => {
    if (reduce) return;
    let id = 0;
    let settle = 0;
    const start = window.setTimeout(() => {
      let i = 0;
      id = window.setInterval(() => {
        i += 1;
        setShown(i);
        if (i >= TOKENS.length) {
          window.clearInterval(id);
          settle = window.setTimeout(() => setSettled(true), 900);
        }
      }, STEP_MS);
    }, 650);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(id);
      window.clearTimeout(settle);
    };
  }, [reduce]);

  return (
    <>
    <h1 id="hero-title" className="token-name" data-settled={settled} tabIndex={0} aria-label={name}>
      <span aria-hidden="true">
        {TOKENS.map((t, i) => (
          <span key={i} className={`tok tok-${i % 5}`} data-on={i < shown}>
            {t}
          </span>
        ))}
        {!settled && <span className="stream-caret" />}
      </span>
    </h1>
    <p className="token-meta" data-show={settled}>
      <span aria-hidden="true">↳</span> {TOKENS.length} tokens, streamed. hover the name to inspect them.
    </p>
    </>
  );
}
