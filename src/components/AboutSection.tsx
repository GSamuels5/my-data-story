import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Database, LineChart, Code2 } from "lucide-react";

const skills = [
  { icon: Brain, label: "Machine Learning" },
  { icon: Database, label: "Data Engineering" },
  { icon: LineChart, label: "Data Visualization" },
  { icon: Code2, label: "Python / R" },
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
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Data Scientist with expertise in building end-to-end machine learning 
              pipelines, statistical modeling, and turning raw data into compelling stories. I hold a 
              Master's in Data Science and have worked with Fortune 500 companies to optimize their 
              data strategies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not crunching numbers, you'll find me contributing to open-source projects, 
              writing technical blogs, and mentoring aspiring data scientists. I believe in the power 
              of data to transform industries and improve lives.
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
                className="glass-card p-5 flex flex-col items-center gap-3 text-center hover:glow-teal transition-shadow duration-300"
              >
                <skill.icon className="w-8 h-8 text-primary" />
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
