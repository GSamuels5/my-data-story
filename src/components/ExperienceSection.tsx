import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "redAcademy",
    role: "Data Science Sprinter",
    period: "July 2025 - currently enrolled",
    description:
      "I analyze and visualize datasets using Python, pandas, and Power BI to extract meaningful insights and support learning projects.",
  },
  {
    company: "CCI Global",
    role: "Customer Service Agent",
    period: "November 2024 - December 2024",
    description:
      "Provide exceptional customer service and effectively manage email correspondence to address customer inquiries and resolve issues promptly.",
  },
  {
    company: "LC Studio",
    role: "Technical Intern",
    period: "April 2024 - November 2024",
    description:
      "Learning programming languages like python and doing courses on software engineering to upskill myself. Working in teams using the scrum methodology to complete asoftware project.",
  },
   {
    company: "City of Cape Town",
    role: "Electrical Apprentice",
    period: "October 2019 - May 2023",
    description:
      "Doing maintenance on sub-stations and electrical components. Liaised with customers to provide updates and clarify the scope of work being carried out.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            My <span className="text-gradient ">Experience</span>
          </h2>
          <div className="w-16 h-1 gradient-teal rounded-full mb-8" />
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3 ">
          {experiences.map((experience, i) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="glass-card p-5 border border-border/30 transition-all duration-300 hover:-translate-y-2 hover:scale-120 hover:border-primary hover:shadow-[0_20px_50px_-20px_rgba(14,165,233,0.45)]"
            >
              <div className="flex items-center gap-2 text-primary mb-3">
                <Briefcase className="w-4 h-4" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">{experience.role}</span>
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-1">{experience.company}</h3>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                <Calendar className="w-3.5 h-3.5" />
                <span>{experience.period}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
