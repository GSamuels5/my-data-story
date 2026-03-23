import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import PowerBi from "@/assets/powerbi.png";
import PortfolioProj from "@/assets/portfoliotech.png";
import WeatherApp from "@/assets/weatherapp.png";

const projects = [

  {
    title: "Data-Driven Pricing Strategy (SQL & Power BI)",
    description: "A SQL and Power BI project analysing price elasticity and its impact on demand, revenue, and profitability to support strategic pricing decisions.",
    image: PowerBi,
    tags: ["Python", "Power BI", "SQL"],
    github: "https://github.com/GSamuels5/Toman_bike_Project.git",
  },
  {
    title: "React Portfolio Website",
    description: "A responsive portfolio website built with React and Tailwind CSS, showcasing my projects and skills.",
    image: PortfolioProj,
    tags: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/GSamuels5/Ghamzah_Samuels_portfolio.git",
  },
  {
    title: "Weather website ",
    description: "This team project was created using Python and the Flask framework.",
    image: WeatherApp,
    tags: ["Python", "Flask", "HTML/CSS"],
    github: "https://github.com/GSamuels5/Weather_report.git",
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
                  className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-gray-100 text-sm mb-4 leading-relaxed hover:scale-105 transition-transform duration-300">{project.description}</p>
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
