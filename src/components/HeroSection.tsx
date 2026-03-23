import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import Typewriter from "typewriter-effect";
import profileImg from "@/assets/new_profile.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-24 pb-16 overflow-x-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start text-left w-full"
          >
            <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">
              Welcome, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground leading-tight mb-4 min-h-[80px] sm:min-h-[100px]">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Ghamzah ")
                    .typeString('<span class="text-gradient">Samuels</span>')
                    .start();
                }}
                options={{
                  cursor: "|",
                  delay: 80,
                }}
              />
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-100 mb-5 font-display font-light hover:scale-105 transition-transform duration-300">
              Data Scientist / Full Stack Developer
            </h2>

            <p className="text-gray-100 text-base sm:text-lg leading-relaxed max-w-lg mb-8 hover:scale-105 transition-transform duration-300">
              I'm a data storyteller who enjoys turning raw data into insights
              that help businesses make better decisions. With over 6 months of
              hands-on learning and project experience, I focus on data
              analysis, machine learning, and visualization.
            </p>

            {/* Buttons & Social Links */}
            <div className="flex flex-wrap gap-3 items-center">
              <a
                href="#contact"
                className="gradient-teal text-primary-foreground font-semibold px-5 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
              >
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1IpPiQcEaBDxrTWewIdu-IScRrbLbo2EP/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-transparent border-2 border-primary font-semibold px-5 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base">
                  Download my Resume
                </button>
              </a>

              <a
                href="https://github.com/GSamuels5"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/ghamzahsamuels/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center md:justify-end mt-8 md:mt-0"
          >
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow-teal border-2 border-primary/30">
                <img
                  src={profileImg}
                  alt="Ghamzah Samuels"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 gradient-teal rounded-xl flex items-center justify-center animate-float">
                <span className="text-primary-foreground font-display font-bold text-base sm:text-lg">
                  1+
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Arrow */}
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