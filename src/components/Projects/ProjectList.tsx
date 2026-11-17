import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList: React.FC = () => {
  return (
    <div id="projects" className="project-section bg-gray-100 rounded-lg py-4">
      <div className="container mx-auto">
        <div className="text-center mb-2">
          <h1 className="text-2xl font-light mb-0">Projects</h1>
        </div>
        {/* Add justify-center to center items when there's only one column */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto justify-center">
          
          <ProjectItem
            title="HireFinch Voice Screener"
            description="Voice AI agent for initial candidate screening · Techjays"
            listItems={[
              "Voice agent that runs the first-round screening call with candidates",
              "Asks role-specific questions and adapts follow-ups to the candidate's answers",
              "Produces a structured summary of each call for recruiters",
            ]}
          />

          <ProjectItem
            title="IQVIA ML Platform"
            description="MLOps and LLM fine-tuning · Nifty Coders"
            listItems={[
              "Migrated ML algorithms from Kubeflow to SageMaker Pipelines with MLflow",
              "Multi-agent AI pipeline for data augmentation and synthetic data to fine-tune an LLM",
              "GitLab CI/CD pipelines and unit tests for reliable deployments",
            ]}
          />

          <ProjectItem
            title="FIFAe Stream Intelligence"
            description="Video understanding for esports streams · SELISE"
            listItems={[
              "Deep learning models to detect in-game events in FIFAe streams",
              "16:9 to 9:16 reframing with motion tracking for mobile-friendly clips",
              "CLIP/ViT embeddings with clustering to group similar scenes",
            ]}
          />

          <ProjectItem
            title="Diabetic Retinopathy Screening"
            description="Medical imaging · Smart Retina"
            listItems={[
              "92% sensitivity in DR classification from fundus images",
              "Grad-CAM explanations to highlight regions of interest for ophthalmologists",
              "Ensembles for a 3.2% accuracy boost; 98% Left/Right eye classification",
            ]}
          />

          <ProjectItem
            title="Covid-19 & Pneumonia Detection"
            description="ICT Ministry of Bangladesh pilot · Daffodil Software"
            listItems={[
              "96% sensitivity detecting Covid-19 and Pneumonia from chest X-rays and CT scans",
              "Led the pilot project end to end",
            ]}
          />

        </div>
      </div>
    </div>
  );
};

export default ProjectList;
