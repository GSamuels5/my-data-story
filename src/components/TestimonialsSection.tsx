import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Razien Mackenzie",
    role: "QA Automation & UAT Specialist ",
    text: "Ghamzah has been an amazing help in my team. He's always finding solutions to even the most challenging problems. He is a very kind person, yet he takes his work extremely seriously. He is definitely my go-to guy in a crunch, so I'm sure he'll make a valuable addition to your team.",
  },
  {
    name: "Joel Mukanya",
    role: "CEO & Founder at JT Devs",
    text: "Ghamzah is a creative, and well-behaved individual who always prioritizes his work. He excels in collaborating with others and has gained proficiency in HTML5, CSS, and Bootstrap. Including Git and GitHub.",
  },
  {
    name: "Rezaar Osman",
    role: "Intermediate Developer @ FutureRent",
    text: "Ghamzah Samuels patience is immeasurable. He has persistent composure in the face of stress. His efficient and has meticulous work ethic as if he was born to be an engineer. Nothing, in my opinion, could prevent him from being modest. I would expect and be proud to see him in high places someday.",
  },
 
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            What People <span className="text-gradient">Say</span>
          </h2>
          <div className="w-16 h-1 gradient-teal rounded-full mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 md:p-10 text-center min-h-[250px] flex flex-col items-center justify-center">
            <Quote className="w-8 h-8 text-primary mb-4" />
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-foreground leading-relaxed mb-6 italic"
            >
              "{testimonials[current].text}"
            </motion.p>
            <motion.div
              key={`name-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <p className="font-display font-semibold text-foreground">{testimonials[current].name}</p>
              <p className="text-sm text-gray-100 hover:scale-105 transition-transform duration-300">{testimonials[current].role}</p>
            </motion.div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button onClick={prev} className="p-2 rounded-full border border-border hover:border-primary transition-colors text-gray-100 hover:text-primary">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-full border border-border hover:border-primary transition-colors text-gray-100 hover:text-primary">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
