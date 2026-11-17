import { useState, type ReactNode } from "react";
import { certifications, education, profile, projects, publications, roles, stack, stats, strengths } from "../data";
import LogoLoop from "./LogoLoop";
import { ArrowIcon, ChevronIcon, CloudIcon, ExternalIcon, EyeIcon, SparkIcon, WaveIcon } from "./Icons";

/** Renders **bold** segments from data strings. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>
      )}
    </>
  );
}

function Head({ path, title, lede }: { path: string; title: string; lede?: string }) {
  return (
    <div className="sec-head">
      <p className="path">~/{path}</p>
      <h2>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </div>
  );
}

const strengthIcons = [SparkIcon, WaveIcon, EyeIcon, CloudIcon];

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-top">
          <div className="about-intro">
            <p className="path">~/about</p>
            <h2 id="about-title">
              {profile.years} years turning <span className="hl">models into products</span>.
            </h2>
            <p className="lede">
              I'm an AI engineer and ML architect based in {profile.location}. I've built medical imaging models
              used in national screening pilots, video understanding for esports streams, LLM fine-tuning pipelines
              for enterprise healthcare data, Bangla speech recognition, multi-agent systems on LangGraph, and today,
              voice agents that hold real conversations.
            </p>
            <p className="lede">
              My edge is the full path: framing the problem, training and evaluating the model, and owning the
              pipelines and infrastructure that put it in front of users.
            </p>
          </div>
          <figure className="portrait-card">
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} width={320} height={320} />
            <figcaption>
              <strong>{profile.name}</strong>
              <span>{profile.titles[0]}, Techjays</span>
            </figcaption>
          </figure>
        </div>

        <ul className="stats">
          {stats.map((s) => (
            <li key={s.label} className="card">
              <b>{s.value}</b>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>

        <h3 className="sub">What I'm strongest at</h3>
        <ul className="strengths">
          {strengths.map((s, i) => {
            const Icon = strengthIcons[i];
            return (
              <li key={s.title} className="card card-hover">
                <span className="strength-icon">
                  <Icon />
                </span>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </li>
            );
          })}
        </ul>

        <h3 className="sub">Stack I work with</h3>
        <div className="stack">
          {stack.map((g) => (
            <div key={g.group} className="stack-group">
              <p className="stack-label">{g.group}</p>
              <ul className="tools">
                {g.tools.map((t) => (
                  <li key={t.name} className="tool">
                    {t.icon ? (
                      <img src={t.icon} alt="" width={20} height={20} loading="lazy" />
                    ) : (
                      <span className="tool-dot" aria-hidden="true" />
                    )}
                    {t.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <LogoLoop />
      </div>
    </section>
  );
}

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container narrow">
        <Head path="experience" title="Where I've worked" lede="Most recent first. Open a role to see what I shipped." />
        <ol className="xp-list">
          {roles.map((r, i) => {
            const isOpen = open === i;
            const panelId = `xp-${i}`;
            return (
              <li key={r.company} className="xp card" data-open={isOpen}>
                <button
                  className="xp-head"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="xp-meta">
                    <b>
                      {r.start} – {r.end}
                    </b>
                    <span className="xp-loc">{r.location}</span>
                    {i === 0 && <span className="now-pill">now</span>}
                  </span>
                  <span className="xp-title">
                    {r.title} <span className="dash">—</span> <span className="xp-co">{r.company}</span>
                  </span>
                  <span className="chev" aria-hidden="true">
                    <ChevronIcon />
                  </span>
                </button>
                <div className="xp-panel" id={panelId} hidden={!isOpen}>
                  <p className="xp-summary">{r.summary}</p>
                  <ul className="sq-list">
                    {r.highlights.map((h) => (
                      <li key={h}>
                        <Rich text={h} />
                      </li>
                    ))}
                  </ul>
                  <div className="xp-foot">
                    {r.stack && (
                      <ul className="pills" aria-label="Tools and topics">
                        {r.stack.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    )}
                    {r.url && (
                      <a className="text-link" href={r.url} target="_blank" rel="noopener noreferrer">
                        {r.company} website <ExternalIcon />
                      </a>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <Head path="projects" title="Selected work" lede="Problems I've owned end to end, with results where they were measured." />
        <ul className="projects">
          {projects.map((p) => (
            <li key={p.title} className="project card card-hover">
              <div className="project-top">
                <span className="project-ctx">{p.context}</span>
                {p.metric && <span className="metric">{p.metric}</span>}
              </div>
              <h3>{p.title}</h3>
              <ul className="sq-list small">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <ul className="pills">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {p.links && (
                <div className="project-links">
                  {p.links.map((l) => (
                    <a key={l.url} className="text-link" href={l.url} target="_blank" rel="noopener noreferrer">
                      {l.label} <ExternalIcon />
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Credentials() {
  return (
    <section className="section" id="credentials" aria-labelledby="credentials-title">
      <div className="container">
        <Head path="credentials" title="Certificates, education and research" />
        <div className="creds">
          <ul className="cert-list">
            {certifications.map((c, i) => (
              <li key={c.name} className={`cert card${i === 0 ? " cert-feature" : ""}`}>
                <img src={c.icon} alt="" width={36} height={36} />
                <div>
                  <p className="cert-name">
                    {c.url ? (
                      <a href={c.url} target="_blank" rel="noopener noreferrer" className="stretch">
                        {c.name}
                      </a>
                    ) : (
                      c.name
                    )}
                  </p>
                  <p className="cert-issuer">
                    {c.issuer}
                    {c.url && " · verify"}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="side-stack">
            <div className="card edu-card">
              <p className="path">education</p>
              <h3>{education.degree}</h3>
              <p>{education.school}</p>
              <p className="muted">{education.years}</p>
              <p className="muted thesis">Thesis: {education.thesis}</p>
            </div>
            {publications.map((pub) => (
              <div className="card edu-card pub-card" key={pub.url}>
                <p className="path">publication</p>
                <h3 className="pub-title">
                  <a href={pub.url} target="_blank" rel="noopener noreferrer" className="stretch">
                    {pub.title}
                  </a>
                </h3>
                <p className="muted">
                  {pub.venue} <ExternalIcon />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ k, children }: { k: string; children: ReactNode }) {
  return (
    <div className="kv">
      <dt>{k}</dt>
      <dd>{children}</dd>
    </div>
  );
}

export function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-grid">
          <div>
            <p className="path">~/contact</p>
            <h2 id="contact-title">
              Let's build something <span className="hl">intelligent</span>.
            </h2>
            <p className="lede">
              Hiring for an AI or ML role, or need help taking a model to production? Email is the fastest way to
              reach me.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                <ArrowIcon /> {profile.email}
              </a>
            </div>
          </div>
          <dl className="card kv-card">
            <Row k="location">
              {profile.location} · {profile.timezone}
            </Row>
            <Row k="role">{profile.titles.slice(0, 2).join(" / ")}</Row>
            <Row k="focus">LLMs, voice AI, computer vision, MLOps</Row>
            <Row k="email">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </Row>
            <Row k="github">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                {profile.githubHandle}
              </a>
            </Row>
            <Row k="linkedin">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                in/md-faysal
              </a>
            </Row>
          </dl>
        </div>
        <footer className="footer">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#top">back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
