import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Image,
  Heart,
  Sparkles,
  Quote,
  Flower,
  Palette,
  Camera,
} from "lucide-react";
import { Button } from "../../../component/button";
import { Card } from "../../../component/card";

const categories = [
  {
    id: "nature",
    name: "Nature",
    description: "Beautiful landscapes, forests, and natural scenery",
    icon: Flower,
    count: "150+ Artworks",
    gradient: "from-emerald-500/20 to-green-600/20",
    color: "text-emerald-600",
  },
  {
    id: "anime",
    name: "Anime",
    description: "Stunning anime characters and manga-style art",
    icon: Sparkles,
    count: "200+ Artworks",
    gradient: "from-purple-500/20 to-pink-600/20",
    color: "text-purple-600",
  },
  {
    id: "spiritual",
    name: "Spiritual",
    description: "Divine art, gods, and spiritual imagery",
    icon: Heart,
    count: "80+ Artworks",
    gradient: "from-orange-500/20 to-yellow-600/20",
    color: "text-orange-600",
  },
  {
    id: "quotes",
    name: "Quotes",
    description: "Inspirational quotes with beautiful typography",
    icon: Quote,
    count: "120+ Artworks",
    gradient: "from-blue-500/20 to-indigo-600/20",
    color: "text-blue-600",
  },
  {
    id: "abstract",
    name: "Abstract",
    description: "Modern abstract art and geometric designs",
    icon: Palette,
    count: "90+ Artworks",
    gradient: "from-rose-500/20 to-red-600/20",
    color: "text-rose-600",
  },
  {
    id: "photography",
    name: "Photography",
    description: "Stunning photography and digital captures",
    icon: Camera,
    count: "110+ Artworks",
    gradient: "from-cyan-500/20 to-teal-600/20",
    color: "text-cyan-600",
  },
];

const Collections = () => {
  const { category } = useParams();
  console.log("category", category);
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-primary/5">
      {/* Aurora Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="aurora-bg"></div>
      </div>
      {/* Header */}
      <header className="relative z-10 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
            >
              <ArrowLeft size={20} />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              {import.meta.env.VITE_APP_NAME || "The Monk Lab"}
            </h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Image size={16} />
            Browse Collections
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
            Art Collections
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections of digital art, each category
            carefully selected for its unique style and beauty.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} to={`/collection/${category.id}`}>
                <Card className="group h-full glass-effect hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden border-border/50">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  <div className="relative p-8">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`w-8 h-8 ${category.color}`} />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">
                        {category.count}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        Explore
                        <div className="w-0 group-hover:w-6 transition-all duration-300 overflow-hidden">
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Card className="glass-effect border-border/50 p-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground mb-8">
              We're constantly adding new collections and artworks. Contact us
              for custom requests or suggestions.
            </p>
            <Button size="lg" className="shimmer-effect">
              Request Custom Collection
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Collections;
