import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xlgpyova', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        form.reset();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Email send failed:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 gradient-teal rounded-full mb-10" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card p-8 space-y-5"
        >
          <div className="relative">
            <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-100" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-background/50 border border-border rounded-lg py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-100" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-background/50 border border-border rounded-lg py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-gray-100" />
            <textarea
              rows={5}
              name="message"
              placeholder="Your Message"
              required
              className="w-full bg-background/50 border border-border rounded-lg py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full gradient-teal text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            {loading ? "Sending..." : submitted ? "Message Sent! ✓" : (<>Send Message <Send className="w-4 h-4" /></>)}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
