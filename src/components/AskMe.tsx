import { useEffect, useRef, useState, type FormEvent } from "react";
import { answer, suggestions } from "../chat";

type Msg = { from: "you" | "faysal" | "system"; text: string };

const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function AskMe() {
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "system", text: "connected. ask me anything about my work." }]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number>();

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs]);
  useEffect(() => () => window.clearInterval(timer.current), []);

  // Play one example exchange so visitors see what the box does.
  const demoed = useRef(false);
  useEffect(() => {
    if (demoed.current || reduceMotion()) return;
    const t = window.setTimeout(() => {
      demoed.current = true;
      ask("what are you working on now?");
    }, 1400);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ask = (q: string) => {
    const question = q.trim();
    if (!question || busy) return;
    const reply = answer(question);
    setInput("");
    setMsgs((m) => [...m, { from: "you", text: question }, { from: "faysal", text: reduceMotion() ? reply : "" }]);
    if (reduceMotion()) return;

    // Stream the reply a few characters at a time, like a model would.
    setBusy(true);
    let i = 0;
    timer.current = window.setInterval(() => {
      i = Math.min(reply.length, i + 3);
      setMsgs((m) => [...m.slice(0, -1), { from: "faysal", text: reply.slice(0, i) }]);
      if (i >= reply.length) {
        window.clearInterval(timer.current);
        setBusy(false);
      }
    }, 16);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    ask(input);
  };

  return (
    <div className="term" aria-label="Ask me chat">
      <div className="term-bar">
        <span className="lights" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="term-title">~/ask-faysai.sh</span>
        <span className="term-status">
          <span className="dot" aria-hidden="true" /> {busy ? "typing" : "ready"}
        </span>
      </div>

      <div className="term-log" ref={logRef} aria-live="polite">
        {msgs.map((m, i) => (
          <div className={`msg msg-${m.from}`} key={i}>
            <span className="who">{m.from === "you" ? "you" : m.from === "system" ? "// system" : "faysal"}</span>
            <p>
              {m.text}
              {busy && i === msgs.length - 1 && <span className="caret" aria-hidden="true" />}
            </p>
          </div>
        ))}
      </div>

      <div className="chips" role="list">
        {suggestions.map((s) => (
          <button key={s} role="listitem" className="chip" onClick={() => ask(s)} disabled={busy}>
            {s}
          </button>
        ))}
      </div>

      <form className="term-input" onSubmit={submit}>
        <span className="prompt" aria-hidden="true">
          ›
        </span>
        <label className="sr-only" htmlFor="ask">
          Ask a question
        </label>
        <input
          id="ask"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ask about my stack, projects, experience…"
          autoComplete="off"
        />
        <button className="send" type="submit" disabled={busy || !input.trim()}>
          send ↵
        </button>
      </form>
      <p className="term-note">Answers come from this site's content, right in your browser.</p>
    </div>
  );
}
