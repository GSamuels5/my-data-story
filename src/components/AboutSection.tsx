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
            My journey with Python started over a year ago when I began learning how to work with APIs and collaborated with a team to build a weather application.
             This experience strengthened my communication skills and showed me the value of collaboration when solving technical problems.
            <p className="text-muted-foreground leading-relaxed mb-6 mt-6">
             My interest in data started in high school when I created my first graphs in Excel using my own collected data.
              That early curiosity eventually grew into a passion for data science and understanding how data can reveal trends and support better decision-making.
            </p>
               <p className="text-muted-foreground leading-relaxed">
              In my current learning journey, I've worked on projects that involve generating dummy datasets for businesses to analyze trends and predict outcomes, as well as exploring retail sales data to help project delivery revenue for the upcoming year.
Outside of tech, I enjoy running and meditation—habits that help me stay focused, disciplined, and attentive to detail, qualities that are just as important when working with data.
            </p>
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
                <skill.icon className="w-12 h-12 text-primary" />
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
