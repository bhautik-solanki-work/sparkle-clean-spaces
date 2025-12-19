import { Droplets } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-card py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Droplets className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl">CleanPro</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href="#services"
              className="text-sm text-card/70 hover:text-card transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm text-card/70 hover:text-card transition-colors"
            >
              About
            </a>
            <a
              href="#results"
              className="text-sm text-card/70 hover:text-card transition-colors"
            >
              Results
            </a>
            <a
              href="#contact"
              className="text-sm text-card/70 hover:text-card transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-card/50">
            © {currentYear} CleanPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
