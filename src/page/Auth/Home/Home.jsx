import { Shield, Star, Truck } from "lucide-react";
import { Button } from "../../../component/ui/button";
import { Badge } from "../../../component/ui/badge";
import { Card, CardContent } from "../../../component/ui/card";

function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 aurora-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/50 to-accent/10"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating"
          style={{ animationDelay: "-3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl floating"
          style={{ animationDelay: "-1.5s" }}
        ></div>

        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-8 px-6 py-2 text-sm font-medium glass-effect border-primary/30 text-primary hover:scale-105 transition-transform duration-300"
            >
              ✨ Premium Digital Art Collection
            </Badge>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent">
                Add a splash of color!
              </span>
              <br />
              <span className="relative inline-block">
                <span className="text-foreground">With Digital Art</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl -z-10 scale-110"></div>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed ">
              Discover stunning digital artwork ready to print on canvas.
              High-quality designs that bring life to any room with artistic
              elegance.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-12 py-6 rounded-2xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary hover:scale-105 transition-all duration-300 glow-effect group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Browse Collection
                  <div className="w-5 h-5 bg-white/20 rounded-full group-hover:translate-x-1 transition-transform duration-300"></div>
                </span>
                <div className="absolute inset-0 shimmer"></div>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-lg px-12 py-6 rounded-2xl glass-effect border-primary/30 hover:border-primary hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center gap-2">
                  View Gallery
                  <Star className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Artworks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">300</div>
                <div className="text-sm text-muted-foreground">DPI Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Choose The Monk Lab?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of quality, convenience, and
              creativity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="glass-effect border-border/20 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-500">
                    <Truck className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  Instant Download
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get your digital art instantly after purchase. No waiting,
                  start printing immediately and transform your space today.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/20 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-500">
                    <Star className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  Premium Quality
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  300 DPI resolution artwork perfect for large canvas prints up
                  to 24x36 inches with crystal-clear details.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/20 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-500">
                    <Shield className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  Commercial License
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Use our artwork for personal and commercial projects with
                  comprehensive licensing included.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
