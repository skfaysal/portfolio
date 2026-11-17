import { certifications, education, profile, projects, publications, roles, stack } from "./data";

/**
 * A small on-page assistant. It runs entirely in the browser and answers
 * from the portfolio data, so it works on static hosting with no API key.
 * Swap `answer` for a call to an LLM endpoint later if you want free-form chat.
 */

export const suggestions = [
  "what's your stack?",
  "how much experience do you have?",
  "what are you working on now?",
  "tell me about a project",
  "what agentic AI have you built?",
  "are you AWS certified?",
  "how do I contact you?",
];

type Intent = { keys: string[]; reply: () => string };

const list = (xs: string[]) => (xs.length < 2 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`);

const intents: Intent[] = [
  {
    keys: ["stack", "tools", "tech", "framework", "language", "skills", "use"],
    reply: () =>
      stack.map((g) => `${g.group}: ${g.tools.slice(0, 6).map((t) => t.name).join(", ")}`).join("\n") +
      "\nPython is home base; PyTorch for modelling, SageMaker and MLflow for shipping.",
  },
  {
    keys: ["experience", "years", "how long", "senior", "background", "career"],
    reply: () =>
      `${profile.years} years in machine learning since 2019, across ${roles.length} teams:\n` +
      roles.map((r) => `- ${r.title}, ${r.company} (${r.start} – ${r.end})`).join("\n"),
  },
  {
    keys: ["now", "current", "working on", "today", "techjays", "voice"],
    reply: () =>
      `Right now I'm a Senior AI Engineer at Techjays, ${profile.now}. The current one runs first-round candidate screening calls and writes a structured summary for recruiters.`,
  },
  {
    keys: ["project", "built", "portfolio", "work", "retina", "covid", "fifa", "video"],
    reply: () => {
      const p = projects[Math.floor(Math.random() * (projects.length - 1))];
      return `${p.title} (${p.context})${p.metric ? `, ${p.metric}` : ""}.\n${p.points.join(" ")}\nAsk again for another one.`;
    },
  },
  {
    keys: ["aws", "cert", "certified", "certificate", "coursera"],
    reply: () =>
      `Yes, AWS Certified AI Practitioner. Also: ${list(certifications.slice(1).map((c) => c.name))}.`,
  },
  {
    keys: ["llm", "genai", "gen ai", "rag", "agent", "agentic", "langgraph", "langchain", "vector", "fine-tun", "finetun"],
    reply: () =>
      "Agentic AI is my core focus: a multi-agent commercial planner on LangGraph (an orchestrator routing to planning sub-agents), reflection-pattern agents for metadata enrichment, LLM fine-tuning on synthetic data, RAG with vector databases, and real-time voice agents at Techjays.",
  },
  {
    keys: ["mlops", "sagemaker", "mlflow", "deploy", "production", "pipeline"],
    reply: () =>
      "MLOps is a big part of the job: SageMaker Pipelines, MLflow, Airflow, Kubeflow migrations, Docker and GitLab or GitHub CI/CD.",
  },
  {
    keys: ["speech", "asr", "bangla", "bengali", "audio", "wer"],
    reply: () =>
      "At BYSL Global Technologies I built Bangla speech recognition with a Transformer model, reaching 20% word error rate, plus a testing pipeline across diverse audio. Today I work on real-time voice agents.",
  },
  {
    keys: ["paper", "publication", "publish", "research", "journal"],
    reply: () => `Yes: "${publications[0].title}", in the ${publications[0].venue}. It came out of the Covid-19 chest X-ray work.`,
  },
  {
    keys: ["education", "degree", "university", "study", "thesis"],
    reply: () => `${education.degree}, ${education.school} (${education.years}). Thesis: ${education.thesis}.`,
  },
  {
    keys: ["contact", "email", "reach", "hire", "available", "talk", "call", "resume", "cv"],
    reply: () =>
      `Email ${profile.email} is fastest. I'm also on LinkedIn, and the résumé button above downloads a PDF.`,
  },
  {
    keys: ["where", "location", "based", "remote", "timezone"],
    reply: () => `Based in ${profile.location} (${profile.timezone}) and working remotely.`,
  },
  {
    keys: ["hi", "hello", "hey", "salam"],
    reply: () => "Hi! Ask me about my experience, stack, projects or how to get in touch.",
  },
];

export function answer(q: string): string {
  const text = q.toLowerCase();
  let best: Intent | null = null;
  let bestScore = 0;
  for (const intent of intents) {
    const score = intent.keys.reduce((s, k) => s + (new RegExp(`\\b${k}`).test(text) ? k.length : 0), 0);
    if (score > bestScore) {
      best = intent;
      bestScore = score;
    }
  }
  return best
    ? best.reply()
    : "I don't have an answer for that one. I can talk about my experience, stack, projects, certifications or how to reach me.";
}
