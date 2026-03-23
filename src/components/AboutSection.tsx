import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Database, LineChart, Code2 } from "lucide-react";

const skills = [
  { icon: Brain, label: "Machine Learning" },
  { icon: Database, label: "Data Engineering" },
  { icon: LineChart, label: "Data Visualization" },
  { icon: Code2, label: "Python " },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 gradient-teal rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
       <p className="text-gray-100 leading-relaxed mb-6 hover:scale-105 transition-transform duration-300">
  My data journey started in high school, literally just me, Excel, and data I'd collected myself. That curiosity stuck, and over a year ago I dove into Python, building a weather app with a team and realising how much I enjoy both the technical and collaborative sides of problem-solving.
</p>

<p className="text-gray-100 leading-relaxed hover:scale-105 transition-transform duration-300">
  Since then I've worked on projects ranging from generating business datasets to analysing retail sales trends. Outside of tech, running and meditation keep me sharp, turns out patience and attention to detail matter just as much in data as they do on a long run.
</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, i) => (
              <div
                key={skill.label}
                className="glass-card pt-5 flex flex-col items-center gap-3 text-center hover:glow-teal transition-shadow duration-300"
              >
                <skill.icon className="w-11 h-11 text-primary" />
                <span className="text-sm font-medium text-foreground">{skill.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
