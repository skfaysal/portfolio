import { profile } from "../data";
import AskMe from "./AskMe";
import TokenName from "./TokenName";
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="grid-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="status">
            <span className="dot pulse" aria-hidden="true" /> currently {profile.now}
          </p>
          <p className="prompt-line">
            <span className="prompt-tag">prompt</span>
            <span>who builds AI that actually ships?</span>
          </p>
          <TokenName name={profile.name} />
          <ul className="titles" aria-label="Titles">
            {profile.titles.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="bio">
            I design and ship <mark>production AI systems</mark>: LLM and GenAI applications, real-time{" "}
            <mark>voice agents</mark>, computer vision for <mark>medical imaging</mark>, and the{" "}
            <mark>MLOps on AWS</mark> that keeps them running. <mark>{profile.years} years</mark> of taking models from
            notebook to production.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#contact">
              <ArrowIcon /> get in touch
            </a>
            <a className="btn btn-outline" href={profile.resume} download>
              <DownloadIcon /> download résumé
            </a>
            <div className="socials">
              <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
        <AskMe />
      </div>
    </section>
  );
}
