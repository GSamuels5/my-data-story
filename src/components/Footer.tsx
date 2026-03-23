import { BarChart3, Github, Linkedin, Mail } from "lucide-react";
import Logo from '@/assets/G_logo_2.png'

const Footer = () => {
  return (
    <footer className="nav-bg border-t border-border/30 py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2 text-foreground font-display font-bold text-lg">
           <img src={Logo} alt="logo" className=" h-9 rounded-full " />
          </a>

          <div className="flex items-center gap-5">
            <a href="https://github.com/GSamuels5" target="_blank" rel="noreferrer" className="text-gray-100 hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ghamzahsamuels/" target="_blank" rel="noreferrer" className="text-gray-100 hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
           
            <a href="mailto:ghamzahsamuels23@gmail.com" className="text-gray-100 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-gray-100 text-sm hover:scale-105 transition-transform duration-300">
            © 2026 Ghamzah Samuels. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
