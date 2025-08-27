import React from "react";
import { Card, CardContent } from "../../../component/ui/card";
import { Button } from "../../../component/ui/button";
import { Badge } from "../../../component/ui/badge";
import { Palette, Star } from "lucide-react";

function About() {
  return (
    <section id="gallery" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 glass-effect border-primary/30 text-primary"
          >
            🎨 Featured Collection
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
            Stunning{" "}
            <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Artwork
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our curated collection of digital art perfect for canvas
            printing. Each piece is crafted with artistic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card
              key={item}
              className="group overflow-hidden glass-effect border-border/20 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/30 to-muted/40 relative overflow-hidden">
                {/* Artwork Preview */}
                <div className="absolute inset-4 bg-gradient-to-br from-primary/40 via-accent/50 to-primary/30 rounded-2xl opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-white/10 to-white/5 rounded-xl backdrop-blur-sm border border-white/20"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Content on Hover */}
                <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-bold text-xl mb-2">
                    Abstract Canvas #{item}
                  </h3>
                  <p className="text-sm opacity-90 mb-3">
                    Modern digital art • Ready to print
                  </p>
                  <Button
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
                  >
                    Preview
                  </Button>
                </div>

                {/* Floating Price Badge */}
                <div className="absolute top-4 right-4 glass-effect px-3 py-1 rounded-full border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-semibold text-sm">$29</span>
                </div>
              </div>

              <CardContent className="p-6 bg-gradient-to-b from-card to-card/50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      Digital Art #{item}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      24x36 inches • 300 DPI
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">
                        $29
                      </span>
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Star className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Instant download
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="glass-effect border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground px-12 py-6 text-lg rounded-2xl group"
          >
            <span className="flex items-center gap-2">
              View All Artwork
              <Palette className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default About;
