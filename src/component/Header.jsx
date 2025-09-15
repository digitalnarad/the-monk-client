import {
  LogIn,
  Palette,
  ShoppingCart,
  Store,
  User2,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
import ProfileMenu from "./ProfileMenu";
import { useState, useEffect } from "react";

function Header({ isAuth }) {
  const navigate = useNavigate();
  const location = useLocation();
  const itemCount = 10;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if a menu item is active
  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMobileMenu = () => {
    console.log("Toggle menu clicked, current state:", isMobileMenuOpen);
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    // Disable body scroll when menu is open
    if (newState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
    document.body.style.overflow = "unset"; // Restore scroll
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);
  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-white/10 backdrop-blur">
      <div className="container mx-auto px-2 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <Palette className="h-6 w-6 md:h-7 md:w-7 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent">
            {import.meta.env.VITE_APP_NAME || "The Monk Lab"}
          </span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            onClick={(e) => handleNavigation("/")}
            className={`relative transition-all duration-300 group cursor-pointer px-2 py-1 ${
              isActive("/home")
                ? "text-primary font-bold"
                : "text-foreground hover:text-primary"
            }`}
          >
            <span className="relative z-10 font-medium">Home</span>
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActive("/home")
                  ? "w-full opacity-100"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>
          <a
            onClick={(e) => handleNavigation("/gallery")}
            className={`relative transition-all duration-300 group cursor-pointer px-2 py-1 ${
              isActive("/gallery")
                ? "text-primary font-bold"
                : "text-foreground hover:text-primary"
            }`}
          >
            <span className="relative z-10 font-medium">Gallery</span>
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActive("/gallery")
                  ? "w-full opacity-100"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>
          <a
            className={`relative transition-all duration-300 group cursor-pointer px-2 py-1 ${
              isActive("/collection")
                ? "text-primary font-bold"
                : "text-foreground hover:text-primary"
            }`}
            onClick={(e) => handleNavigation("/collection")}
          >
            <span className="relative z-10 font-medium">Collections</span>
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActive("/collection")
                  ? "w-full opacity-100"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:text-primary transition-colors duration-300 z-[70] relative"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
        <div className="flex items-center space-x-4 md:space-x-4 lg:space-x-6">
          <ModeToggle />
          {isAuth && (
            <Button
              variant="outline"
              size="icon"
              className="relative glass-effect border-primary/30 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 mr-5"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
              {itemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-4 w-4 md:h-5 md:w-5 flex items-center justify-center p-0 text-xs min-w-4 md:min-w-5"
                >
                  {itemCount}
                </Badge>
              )}
            </Button>
          )}

          {isAuth && <ProfileMenu />}

          {!isAuth && (
            <Button
              variant="outline"
              size="sm"
              className="relative overflow-hidden border-primary/30 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group text-xs md:text-sm px-2 md:px-4"
              onClick={() => {
                navigate("/signin");
              }}
            >
              <LogIn className="h-3 w-3 md:h-4 md:w-4 md:mr-2" />
              <span className="relative z-10 hidden md:inline">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-[60] transition-all duration-700 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Enhanced Glassy Background with Multiple Layers */}
        <div className="relative h-screen overflow-hidden">
          {/* Primary Glass Layer */}
          <div className="absolute inset-0 bg-background/90 backdrop-blur-2xl"></div>

          {/* Secondary Glass Layer with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 backdrop-blur-xl border-0"></div>

          {/* Crazy Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating Circles */}
            <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-[spin_20s_linear_infinite,bounce_3s_ease-in-out_infinite]"></div>
            <div className="absolute top-3/4 right-1/4 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-[spin_15s_linear_infinite_reverse,bounce_4s_ease-in-out_infinite_0.5s]"></div>
            <div className="absolute top-1/2 left-1/6 w-12 h-12 bg-secondary/20 rounded-full blur-md animate-[spin_25s_linear_infinite,bounce_2.5s_ease-in-out_infinite_1s]"></div>

            {/* Rotating Squares */}
            <div className="absolute top-1/6 right-1/3 w-8 h-8 bg-primary/15 rotate-45 animate-[spin_12s_linear_infinite,ping_4s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-accent/15 rotate-12 animate-[spin_18s_linear_infinite_reverse,pulse_3s_ease-in-out_infinite]"></div>

            {/* Floating Lines */}
            <div className="absolute top-1/3 right-1/6 w-1 h-20 bg-gradient-to-b from-primary/30 to-transparent animate-[spin_30s_linear_infinite,bounce_5s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-1/3 left-1/2 w-1 h-16 bg-gradient-to-t from-accent/30 to-transparent animate-[spin_22s_linear_infinite_reverse,bounce_4.5s_ease-in-out_infinite_0.8s]"></div>
          </div>

          {/* Animated Gradient Orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-2xl animate-[pulse_6s_ease-in-out_infinite,bounce_8s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-radial from-accent/20 to-transparent rounded-full blur-2xl animate-[pulse_7s_ease-in-out_infinite_1s,bounce_9s_ease-in-out_infinite_0.5s]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-radial from-secondary/15 to-transparent rounded-full blur-xl animate-[pulse_5s_ease-in-out_infinite_0.5s,spin_40s_linear_infinite]"></div>
          </div>

          {/* Menu Content */}
          <div
            className="relative z-10 flex flex-col items-center justify-start pt-24 space-y-10 h-full"
            style={{ marginTop: "80px" }}
          >
            <a
              onClick={() => handleNavigation("/")}
              className={`text-3xl font-bold transition-all duration-500 cursor-pointer relative group transform hover:scale-110 hover:rotate-1 ${
                isMobileMenuOpen
                  ? "animate-[slideInLeft_0.6s_ease-out_0.1s_both]"
                  : ""
              } ${
                isActive("/home")
                  ? "text-primary scale-105"
                  : "text-foreground hover:text-primary"
              }`}
            >
              <span className="relative z-10 px-6 py-3 drop-shadow-lg">
                Home
              </span>
              <span
                className={`absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl transition-all duration-400 ease-out blur-sm ${
                  isActive("/home")
                    ? "scale-100 opacity-100 animate-pulse"
                    : "scale-0 group-hover:scale-100"
                }`}
              ></span>
              <span
                className={`absolute inset-0 bg-primary/5 rounded-2xl transition-transform duration-300 ${
                  isActive("/home")
                    ? "scale-105"
                    : "scale-95 group-hover:scale-105"
                }`}
              ></span>
              {isActive("/home") && (
                <span className="absolute -inset-2 border-2 border-primary/30 rounded-2xl animate-pulse"></span>
              )}
            </a>

            <a
              onClick={() => handleNavigation("/gallery")}
              className={`text-3xl font-bold transition-all duration-500 cursor-pointer relative group transform hover:scale-110 hover:-rotate-1 ${
                isMobileMenuOpen
                  ? "animate-[slideInRight_0.6s_ease-out_0.2s_both]"
                  : ""
              } ${
                isActive("/gallery")
                  ? "text-primary scale-105"
                  : "text-foreground hover:text-primary"
              }`}
            >
              <span className="relative z-10 px-6 py-3 drop-shadow-lg">
                Gallery
              </span>
              <span
                className={`absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-2xl transition-all duration-400 ease-out blur-sm ${
                  isActive("/gallery")
                    ? "scale-100 opacity-100 animate-pulse"
                    : "scale-0 group-hover:scale-100"
                }`}
              ></span>
              <span
                className={`absolute inset-0 bg-accent/5 rounded-2xl transition-transform duration-300 ${
                  isActive("/gallery")
                    ? "scale-105"
                    : "scale-95 group-hover:scale-105"
                }`}
              ></span>
              {isActive("/gallery") && (
                <span className="absolute -inset-2 border-2 border-accent/30 rounded-2xl animate-pulse"></span>
              )}
            </a>

            <a
              onClick={() => handleNavigation("/collection")}
              className={`text-3xl font-bold transition-all duration-500 cursor-pointer relative group transform hover:scale-110 hover:rotate-1 ${
                isMobileMenuOpen
                  ? "animate-[slideInLeft_0.6s_ease-out_0.3s_both]"
                  : ""
              } ${
                isActive("/collection")
                  ? "text-primary scale-105"
                  : "text-foreground hover:text-primary"
              }`}
            >
              <span className="relative z-10 px-6 py-3 drop-shadow-lg">
                Collections
              </span>
              <span
                className={`absolute inset-0 bg-gradient-to-r from-secondary/20 via-secondary/10 to-secondary/20 rounded-2xl transition-all duration-400 ease-out blur-sm ${
                  isActive("/collection")
                    ? "scale-100 opacity-100 animate-pulse"
                    : "scale-0 group-hover:scale-100"
                }`}
              ></span>
              <span
                className={`absolute inset-0 bg-secondary/5 rounded-2xl transition-transform duration-300 ${
                  isActive("/collection")
                    ? "scale-105"
                    : "scale-95 group-hover:scale-105"
                }`}
              ></span>
              {isActive("/collection") && (
                <span className="absolute -inset-2 border-2 border-secondary/30 rounded-2xl animate-pulse"></span>
              )}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
