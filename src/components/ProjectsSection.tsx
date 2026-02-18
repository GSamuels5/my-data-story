import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import projectMl from "@/assets/project-ml.jpg";
import projectAnalytics from "@/assets/project-analytics.jpg";
import projectNlp from "@/assets/project-nlp.jpg";
import projectCv from "@/assets/project-cv.jpg";

const projects = [
  {
    title: "Neural Network Classifier",
    description: "Deep learning model for image classification achieving 97% accuracy on custom dataset using TensorFlow and Keras.",
    image: projectMl,
    tags: ["Python", "TensorFlow", "Deep Learning"],
    github: "https://github.com",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "Interactive dashboard for monitoring KPIs with live data streaming, built with Python and Plotly Dash.",
    image: projectAnalytics,
    tags: ["Python", "Plotly", "SQL"],
    github: "https://github.com",
  },
  {
    title: "NLP Sentiment Analyzer",
    description: "Sentiment analysis pipeline processing 10K+ reviews/min using transformers and custom fine-tuned BERT models.",
    image: projectNlp,
    tags: ["NLP", "BERT", "PyTorch"],
    github: "https://github.com",
  },
  {
    title: "Computer Vision Detection",
    description: "Real-time object detection system using YOLOv8 for automated quality inspection in manufacturing.",
    image: projectCv,
    tags: ["Computer Vision", "YOLO", "OpenCV"],
    github: "https://github.com",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 gradient-teal rounded-full mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card overflow-hidden group hover:glow-teal transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                >
                  <Github className="w-4 h-4" /> View on GitHub <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
