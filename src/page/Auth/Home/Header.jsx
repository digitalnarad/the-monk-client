import { Palette } from "lucide-react";
import { Button } from "../../../component/button";

function Header() {
  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-white/10 backdrop-blur">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <Palette className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent">
            ArtCanvas
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#gallery"
            className="relative text-foreground hover:text-primary transition-all duration-300 group"
          >
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="relative text-foreground hover:text-primary transition-all duration-300 group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="relative text-foreground hover:text-primary transition-all duration-300 group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        <Button
          variant="outline"
          className="relative overflow-hidden border-primary/30 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
        >
          <span className="relative z-10">Shop Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </Button>
      </div>
    </header>
  );
}

export default Header;
