import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight mb-4">
            Alex <span className="text-gradient">Johnson</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-display font-light">
            Data Scientist & ML Engineer
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-lg mb-8">
            Transforming complex data into actionable insights. Specializing in machine learning, 
            deep learning, and data visualization with 5+ years of experience driving data-driven decisions.
          </p>
          <div className="flex gap-4 items-center">
            <a
              href="#contact"
              className="gradient-teal text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow-teal border-2 border-primary/30">
              <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 gradient-teal rounded-xl flex items-center justify-center animate-float">
              <span className="text-primary-foreground font-display font-bold text-lg">5+</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
