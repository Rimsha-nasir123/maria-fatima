import { Monitor, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="w-12 h-12 border-2 border-primary rounded-lg flex items-center justify-center mb-4">
              <Monitor className="w-6 h-6 text-primary" />
            </div>

            {/* Email */}
            <a
              href="mailto:khanzadi8566@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              khanzadi8566@gmail.com
            </a>

            {/* Copyright */}
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Iqra Irfan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-[var(--cyan-glow)] transition-all duration-300 hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};

export default Footer;
