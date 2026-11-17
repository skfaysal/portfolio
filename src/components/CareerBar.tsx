import type { Role } from "../data";

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

/** "Oct 2026" -> months since year 0; "present" -> this month. */
function toMonths(label: string, now: Date) {
  if (/present|now/i.test(label)) return now.getFullYear() * 12 + now.getMonth() + 1;
  const [m, y] = label.trim().split(/\s+/);
  return Number(y) * 12 + MONTHS.indexOf(m.slice(0, 3).toLowerCase());
}

type Props = { roles: Role[]; active: number | null; onPick: (i: number) => void };

/**
 * A proportional bar of the whole career. Each segment is one role, sized by
 * how long it lasted; clicking a segment opens that role's card.
 */
export default function CareerBar({ roles, active, onPick }: Props) {
  const now = new Date();
  const spans = roles.map((r) => ({ start: toMonths(r.start, now), end: toMonths(r.end, now) }));
  const min = Math.min(...spans.map((s) => s.start));
  const max = Math.max(...spans.map((s) => s.end));
  const total = max - min;
  const pct = (m: number) => ((m - min) / total) * 100;

  const firstYear = Math.ceil(min / 12);
  const lastYear = Math.floor(max / 12);
  const years = Array.from({ length: lastYear - firstYear + 1 }, (_, k) => firstYear + k);
  const totalYears = (total / 12).toFixed(1).replace(/\.0$/, "");

  // Oldest role on the left, so the bar reads like a timeline.
  const order = roles.map((_, i) => i).reverse();

  return (
    <div className="career">
      <div className="career-head">
        <span>{Math.floor(min / 12)}</span>
        <span className="career-total">{totalYears} years in AI and ML</span>
        <span className="career-now">
          <span className="dot pulse" aria-hidden="true" /> now
        </span>
      </div>
      <div className="career-track">
        {order.map((i) => {
          const s = spans[i];
          const left = pct(s.start);
          const width = Math.max(pct(s.end) - left, 1.6);
          const r = roles[i];
          return (
            <button
              key={r.company}
              className="career-seg"
              data-active={active === i}
              data-narrow={width < 7}
              data-small={width < 16}
              style={{ left: `${left}%`, width: `${width}%` }}
              onClick={() => onPick(i)}
              title={`${r.title}, ${r.company} (${r.start} – ${r.end})`}
              aria-label={`${r.title} at ${r.company}, ${r.start} to ${r.end}`}
            >
              <span className="seg-label">{r.short}</span>
            </button>
          );
        })}
      </div>
      <div className="career-years" aria-hidden="true">
        {years.map((y) => (
          <span key={y} style={{ left: `${pct(y * 12)}%` }}>
            {y}
          </span>
        ))}
      </div>
    </div>
  );
}
