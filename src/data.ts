const base = import.meta.env.BASE_URL;
export const asset = (path: string) => `${base}${path}`;
const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-${variant}.svg`;

export const profile = {
  name: "Sheikh Md. Faysal",
  brand: "FaysAI",
  titles: ["Senior AI Engineer", "ML Architect", "GenAI", "AWS Certified AI Practitioner"],
  years: "7+",
  location: "Dhaka, Bangladesh",
  timezone: "GMT+6",
  email: "skmdfaysal@gmail.com",
  github: "https://github.com/skfaysal",
  githubHandle: "@skfaysal",
  linkedin: "https://www.linkedin.com/in/md-faysal-030800147/",
  photo: asset("my_profile.png"),
  resume: asset("Resume-Sheikh-Md-Faysal.pdf"),
  now: "building real-time voice AI agents",
};

export type Company = {
  name: string;
  url?: string;
  logo: string;
  /** width / height of the logo artwork, used to size it optically */
  aspect: number;
  /** show the company name beside marks that don't include it */
  showName?: boolean;
  /** optical correction for light or heavy artwork */
  scale?: number;
  relation: "employer" | "client";
};

export const companies: Company[] = [
  { name: "Techjays", url: "https://www.techjays.com", logo: asset("logos/techjays.svg"), aspect: 409 / 74, relation: "employer" },
  { name: "Nifty Coders", url: "https://www.niftycoders.com", logo: asset("logos/nifty-coders.png"), aspect: 160 / 148, scale: 0.7, showName: true, relation: "employer" },
  { name: "IQVIA", url: "https://www.iqvia.com", logo: asset("logos/iqvia.png"), aspect: 540 / 94, relation: "client" },
  { name: "SELISE Digital Platforms", url: "https://selisegroup.com", logo: asset("logos/selise.svg"), aspect: 113 / 48, scale: 1.25, relation: "employer" },
  { name: "BYSL Global Technology Group", url: "https://byslglobal.com", logo: asset("logos/bysl.png"), aspect: 360 / 126, scale: 1.05, relation: "employer" },
  { name: "Smart Retina", logo: asset("logos/smart-retina.png"), aspect: 170 / 156, scale: 1.15, relation: "employer" },
  { name: "Daffodil Software", url: "https://daffodil.group", logo: asset("logos/daffodil-software.svg"), aspect: 104 / 53, relation: "employer" },
];

/** Text wrapped in **double asterisks** renders bold. */
export type Role = {
  title: string;
  company: string;
  /** short label for the career timeline bar */
  short: string;
  url?: string;
  location: string;
  start: string;
  end: string;
  client?: string;
  summary: string;
  highlights: string[];
  stack?: string[];
};

export const roles: Role[] = [
  {
    title: "Senior AI Engineer",
    company: "Techjays",
    short: "Techjays",
    url: "https://www.techjays.com",
    location: "Remote",
    start: "Oct 2026",
    end: "present",
    summary: "Building production AI products for clients, from LLM features to real-time voice agents.",
    highlights: [
      "Shipping a **real-time voice AI agent** that runs first-round candidate screening interviews, so recruiters spend their time on qualified people.",
      "The agent asks **role-specific questions**, adapts follow-ups to each answer, and hands recruiters a **structured summary** of every call.",
    ],
    stack: ["LLMs", "Voice AI", "Python"],
  },
  {
    title: "Senior Machine Learning Engineer",
    company: "Nifty Coders",
    short: "Nifty Coders",
    url: "https://www.niftycoders.com",
    location: "Dhaka",
    start: "Mar 2024",
    end: "Sep 2026",
    client: "IQVIA",
    summary: "Agentic AI and MLOps for the pharma and healthcare data industry, including IQVIA.",
    highlights: [
      "Built a **multi-agent commercial planner for the pharma industry** on LangGraph: an orchestrator agent routes each planning request to specialist sub-agents.",
      "Built **self-reviewing agents** (reflection pattern) that enrich product metadata automatically.",
      "Generated **synthetic training data with a multi-agent pipeline** to **fine-tune an LLM**, improving accuracy and robustness.",
      "Moved production ML from Kubeflow to **AWS SageMaker Pipelines** with **MLflow**, making models easier to track, version and ship.",
      "Set up **GitLab CI/CD** and unit tests so releases are safer and faster.",
    ],
    stack: ["LangGraph", "Multi-agent", "LLM fine-tuning", "SageMaker", "MLflow", "Kubeflow", "GitLab CI"],
  },
  {
    title: "Lead Data Scientist",
    company: "SELISE Digital Platforms",
    short: "SELISE",
    url: "https://selisegroup.com",
    location: "Dhaka",
    start: "Apr 2022",
    end: "Mar 2024",
    summary: "Led video analytics for esports broadcasting, turning FIFAe live streams into searchable, mobile-ready content.",
    highlights: [
      "**Video analytics** that automatically detect in-game events in FIFAe streams.",
      "Led **automatic 16:9 to 9:16 reframing** with motion tracking, turning broadcast footage into mobile-ready clips.",
      "**Scene search and grouping** with CLIP and ViT embeddings across hours of stream footage.",
      "Brought **MLflow and Airflow** into training and production for a reliable ML lifecycle.",
    ],
    stack: ["PyTorch", "CLIP", "ViT", "Video", "MLflow", "Airflow"],
  },
  {
    title: "Executive Machine Learning Engineer",
    company: "BYSL Global Technologies",
    short: "BYSL",
    url: "https://byslglobal.com",
    location: "Dhaka",
    start: "Aug 2021",
    end: "Mar 2022",
    summary: "Speech and vision AI products, including Bangla speech recognition.",
    highlights: [
      "**Bangla speech recognition** with a Transformer model, reaching **20% WER**, plus a testing pipeline across diverse audio.",
      "Built a **virtual trial room** with computer vision and deep learning.",
    ],
    stack: ["ASR", "Transformers", "Computer vision"],
  },
  {
    title: "Machine Learning Engineer",
    company: "Smart Retina",
    short: "Smart Retina",
    location: "Dhaka",
    start: "Nov 2020",
    end: "Aug 2021",
    summary: "AI-assisted diabetic retinopathy screening from retinal images, built to support ophthalmologists.",
    highlights: [
      "**92% sensitivity** in diabetic retinopathy classification.",
      "**Explainable predictions** with Grad-CAM, showing ophthalmologists which regions of the eye drove each result.",
      "Ensembles added **3.2% accuracy**; left/right eye classification reached **98%**.",
      "Clustered images using learned model features.",
    ],
    stack: ["Computer vision", "Grad-CAM", "Ensembles", "Clustering"],
  },
  {
    title: "Machine Learning Engineer",
    company: "Daffodil Software",
    short: "Daffodil",
    url: "https://daffodil.group",
    location: "Dhaka",
    start: "Oct 2019",
    end: "Oct 2020",
    summary: "Healthcare and education AI for government and university partners.",
    highlights: [
      "Led an **ICT Ministry pilot** detecting Covid-19 and pneumonia from chest X-rays and CT scans at **96% sensitivity**.",
      "Predicted student dropouts at **98% accuracy**, cutting dropout by 2% over two semesters.",
      "Sentiment model (**90% accuracy**) for mentor feedback to students.",
    ],
    stack: ["Medical imaging", "NLP", "Classification"],
  },
];

/** Client-facing highlights shown under About. */
export const highlights = [
  {
    industry: "Pharma",
    headline: "Built a multi-agent commercial planner for the pharma industry",
    detail: "LangGraph orchestrator routing planning requests to specialist agents.",
  },
  {
    industry: "Sports and media",
    headline: "Delivered video analytics for FIFAe esports streams",
    detail: "Event detection, scene search and automatic mobile-ready reframing.",
  },
  {
    industry: "Recruiting",
    headline: "Shipping a voice AI agent that screens candidates",
    detail: "Real-time interviews with a recruiter-ready summary of every call.",
  },
  {
    industry: "Healthcare",
    headline: "Built medical imaging AI used in screening programs",
    detail: "Diabetic retinopathy and Covid-19 detection, including a national ICT Ministry pilot.",
  },
];

export const strengths = [
  {
    title: "Agentic AI and LLMs",
    body: "Multi-agent systems on LangGraph, RAG with vector databases, and LLM fine-tuning on synthetic data.",
  },
  {
    title: "Voice and speech AI",
    body: "Real-time voice agents that run structured interviews, and Bangla speech recognition with Transformers.",
  },
  {
    title: "Computer vision",
    body: "Medical imaging and video understanding, with explainability like Grad-CAM built in.",
  },
  {
    title: "MLOps on AWS",
    body: "SageMaker Pipelines, MLflow, Airflow and CI/CD so models ship and stay reproducible.",
  },
];

export type Tool = { name: string; icon?: string };
export const stack: { group: string; tools: Tool[] }[] = [
  {
    group: "Agentic AI and LLMs",
    tools: [
      { name: "LangGraph" },
      { name: "LangChain" },
      { name: "RAG" },
      { name: "Vector databases" },
      { name: "LLM fine-tuning" },
      { name: "Multi-agent systems" },
      { name: "Voice agents" },
      { name: "Embeddings" },
    ],
  },
  {
    group: "ML and computer vision",
    tools: [
      { name: "PyTorch", icon: devicon("pytorch") },
      { name: "TensorFlow", icon: devicon("tensorflow") },
      { name: "Lightning", icon: asset("lightning.png") },
      { name: "scikit-learn", icon: devicon("scikitlearn") },
      { name: "OpenCV", icon: devicon("opencv") },
      { name: "ViT / CLIP" },
      { name: "Pandas", icon: devicon("pandas") },
      { name: "NumPy", icon: devicon("numpy") },
      { name: "Polars", icon: asset("polars.png") },
      { name: "Matplotlib", icon: devicon("matplotlib") },
      { name: "Plotly", icon: devicon("plotly") },
      { name: "NLTK" },
    ],
  },
  {
    group: "MLOps and cloud",
    tools: [
      { name: "AWS", icon: devicon("amazonwebservices", "original-wordmark") },
      { name: "SageMaker" },
      { name: "MLflow" },
      { name: "Airflow", icon: devicon("apacheairflow") },
      { name: "Kubeflow" },
      { name: "DVC" },
      { name: "Docker", icon: devicon("docker") },
      { name: "GitHub Actions", icon: devicon("githubactions") },
      { name: "Linux", icon: devicon("linux") },
    ],
  },
  {
    group: "Backend, data and languages",
    tools: [
      { name: "Python", icon: devicon("python") },
      { name: "FastAPI", icon: devicon("fastapi") },
      { name: "Flask", icon: devicon("flask") },
      { name: "Redis", icon: devicon("redis") },
      { name: "Postgres", icon: devicon("postgresql") },
      { name: "MongoDB", icon: devicon("mongodb") },
      { name: "Go", icon: devicon("go", "original-wordmark") },
      { name: "Rust", icon: devicon("rust") },
      { name: "TypeScript", icon: devicon("typescript") },
      { name: "React", icon: devicon("react") },
      { name: "Next.js", icon: devicon("nextjs") },
    ],
  },
];

export type Project = {
  title: string;
  context: string;
  metric?: string;
  points: string[];
  tags: string[];
  links?: { label: string; url: string }[];
};

const gh = (repo: string) => `https://github.com/skfaysal/${repo}`;

export const projects: Project[] = [
  {
    title: "Voice screening agent",
    context: "Techjays",
    points: ["Runs the first-round screening call and adapts follow-ups to each answer.", "Hands recruiters a structured summary of every call."],
    tags: ["Voice AI", "LLMs"],
  },
  {
    title: "Multi-agent commercial planner",
    context: "Nifty Coders, pharma industry",
    points: ["Orchestrator agent on LangGraph routes requests to specialized planning sub-agents.", "Reflection-pattern agents enrich metadata."],
    tags: ["LangGraph", "Agentic AI"],
  },
  {
    title: "IQVIA ML platform",
    context: "Nifty Coders",
    points: ["Kubeflow to SageMaker Pipelines migration with MLflow.", "Multi-agent synthetic data generation for LLM fine-tuning."],
    tags: ["MLOps", "LLMs"],
  },
  {
    title: "Diabetic retinopathy screening",
    context: "Smart Retina",
    metric: "92% sensitivity",
    points: ["Fundus image classifier with Grad-CAM explanations for ophthalmologists.", "Ensembles for a 3.2% accuracy lift; 98% left/right eye classification."],
    tags: ["Computer vision", "Healthcare"],
    links: [
      { label: "Classifier", url: gh("Diabetic-Retinopathy-Classification") },
      { label: "Grad-CAM", url: gh("Visualize-inner-conv-layer-GradCAM") },
      { label: "Ensemble notebook", url: "https://colab.research.google.com/drive/1zQvLkBqQ9xsXbkbSRqXESCYziXGo3vKX" },
      { label: "Left/right eye", url: gh("Left-Right-fundus-classification-from-retinal-image") },
      { label: "Clustering", url: gh("Data-clustering-and-labelling-from-learned-features") },
    ],
  },
  {
    title: "Covid-19 and pneumonia detection",
    context: "Daffodil Software, ICT Ministry pilot",
    metric: "96% sensitivity",
    points: ["Chest X-ray and CT scan models, led end to end.", "Published in the International Journal of Biomedicine."],
    tags: ["Medical imaging", "Research"],
    links: [
      { label: "Demo", url: "https://drive.google.com/file/d/1j0bjHaicidzI5IYvoG49CXMS1PwaJXli/view" },
      { label: "Paper", url: "http://www.ijbm.org/v12i3_25.htm" },
    ],
  },
  {
    title: "Bangla speech recognition",
    context: "BYSL Global Technologies",
    metric: "20% WER",
    points: ["Transformer-based ASR for Bangla.", "Testing pipeline and performance metrics across diverse audio."],
    tags: ["Speech", "Transformers"],
    links: [{ label: "Testing pipeline", url: gh("ASR-Testing-Pipeline-and-performence-matrix") }],
  },
  {
    title: "Esports video analytics",
    context: "SELISE, FIFAe streams",
    points: ["In-game event detection across live esports streams.", "Automatic 9:16 reframing and CLIP-based scene clustering."],
    tags: ["Video", "CLIP"],
  },
  {
    title: "Student dropout prediction",
    context: "Daffodil Software",
    metric: "98% accuracy",
    points: ["Flagged at-risk students early, cutting dropout by 2% over two semesters.", "Companion sentiment model (90%) for mentor feedback."],
    tags: ["Education", "NLP"],
    links: [
      { label: "Dropout model", url: gh("Student-Dropout-Prediction") },
      { label: "Sentiment model", url: gh("Sentiment-analysis-from-teachers-comment") },
    ],
  },
  {
    title: "Serving ML models with Django",
    context: "Article on LinkedIn",
    points: ["Train a model, wrap it in a Django REST API, then Dockerize and deploy it."],
    tags: ["Writing", "Deployment"],
    links: [{ label: "Read the article", url: "https://www.linkedin.com/pulse/serve-machine-learning-models-using-django-rest-api-part-md-faysal/" }],
  },
];

export const education = {
  degree: "BSc in Computer Science and Engineering",
  school: "National University of Bangladesh",
  years: "2016 – 2019",
  thesis: "An intelligent surveillance system for crime detection",
};

export const certifications: { name: string; issuer: string; url?: string; icon: string }[] = [
  { name: "AWS Certified AI Practitioner", issuer: "AWS", url: "https://www.credly.com/badges/b0923177-7e0d-4d14-be6c-513831224178/linked_in?t=so52rt", icon: asset("aws-icon.png") },
  { name: "Opensource LLMOps Solutions", issuer: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/933QEYIHR1YJ", icon: asset("coursera-icon.png") },
  { name: "Introduction to Machine Learning in Production", issuer: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/XLAYXDPDN9TQ", icon: asset("coursera-icon.png") },
  { name: "Mathematics for Machine Learning: Linear Algebra", issuer: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/ZTR6LQSXLWTR", icon: asset("coursera-icon.png") },
  { name: "NLP with Classification and Vector Spaces", issuer: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/E6CHPMWUUJDB", icon: asset("coursera-icon.png") },
  { name: "Introduction to Data Science with Python", issuer: "BUET", icon: asset("buet-icon.png") },
];

export const writing = [
  {
    title: "Serve machine learning models using Django REST API, part 1",
    url: "https://www.linkedin.com/pulse/serve-machine-learning-models-using-django-rest-api-part-md-faysal/",
  },
];

export const publications = [
  {
    title:
      "Helping Healthcare Providers to Differentiate COVID-19 Pneumonia by Analyzing Digital Chest X-Rays: Role of Artificial Intelligence in Healthcare Practice",
    venue: "International Journal of Biomedicine",
    url: "http://www.ijbm.org/v12i3_25.htm",
  },
];
