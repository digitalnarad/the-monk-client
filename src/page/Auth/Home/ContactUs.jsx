import React from "react";
import { Badge } from "../../../component/ui/badge";
import { Button } from "../../../component/ui/button";
import { Shield, Star, Truck } from "lucide-react";

function ContactUs() {
  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-accent/10"></div>
      <div className="absolute inset-0 aurora-bg opacity-30"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-8 px-6 py-2 glass-effect border-primary/30 text-primary"
          >
            🚀 Ready to Transform?
          </Badge>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent">
              Ready to Decorate
            </span>
            <br />
            <span className="text-foreground">Your Space?</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Browse our complete collection and find the perfect digital art that
            speaks to your style and transforms your space into an artistic
            sanctuary.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="text-xl px-16 py-8 rounded-2xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary hover:scale-105 transition-all duration-300 glow-effect group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Shopping
                <div className="w-6 h-6 bg-white/20 rounded-full group-hover:translate-x-2 transition-transform duration-300"></div>
              </span>
              <div className="absolute inset-0 shimmer"></div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-xl px-16 py-8 rounded-2xl glass-effect border-primary/30 hover:border-primary hover:scale-105 transition-all duration-300"
            >
              Explore Gallery
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-primary" />
              <span>Instant Download</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary" />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
