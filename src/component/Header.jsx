import { LogIn, Palette, ShoppingCart, Store, User2 } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
import ProfileMenu from "./ProfileMenu";

function Header({ isAuth }) {
  const navigate = useNavigate();
  const itemCount = 10;
  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-white/10 backdrop-blur">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <Palette className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent">
            {import.meta.env.VITE_APP_NAME || "The Monk Lab"}
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            onClick={(e) => navigate("/")}
            className="relative text-foreground hover:text-primary transition-all duration-300 group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            onClick={(e) => {
              navigate("/gallery");
            }}
            className="relative text-foreground hover:text-primary transition-all duration-300 group"
          >
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            className="relative text-foreground hover:text-primary transition-all duration-300 group"
            onClick={(e) => {
              navigate("/collection");
            }}
          >
            collections
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-8">
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
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs min-w-5"
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
              className="relative overflow-hidden border-primary/30 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
              onClick={() => {
                navigate("/signin");
              }}
            >
              <LogIn />
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
