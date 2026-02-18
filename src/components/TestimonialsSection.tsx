import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering, TechCorp",
    text: "Alex's data insights transformed our product strategy. The ML models they built reduced churn by 35% in the first quarter.",
  },
  {
    name: "Michael Rivera",
    role: "CEO, DataFlow Inc.",
    text: "Exceptional analytical skills combined with the ability to communicate complex findings to non-technical stakeholders. A rare talent.",
  },
  {
    name: "Emily Thompson",
    role: "Lead Data Scientist, QuantumAI",
    text: "Working alongside Alex was a game-changer. Their NLP pipeline processed millions of documents and saved us hundreds of hours.",
  },
  {
    name: "David Park",
    role: "CTO, InsightHub",
    text: "Alex brought structure and innovation to our data team. Their dashboard solutions are still the gold standard we use today.",
  },
  {
    name: "Lisa Wang",
    role: "Director of Analytics, CloudScale",
    text: "The predictive models Alex developed helped us forecast demand with 94% accuracy, significantly reducing waste.",
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
              <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
            </motion.div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button onClick={prev} className="p-2 rounded-full border border-border hover:border-primary transition-colors text-muted-foreground hover:text-primary">
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
            <button onClick={next} className="p-2 rounded-full border border-border hover:border-primary transition-colors text-muted-foreground hover:text-primary">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
