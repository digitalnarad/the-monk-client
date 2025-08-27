import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Heart, Download, Filter, Grid, List } from "lucide-react";
import { useState } from "react";
import { Badge } from "../../../component/ui/badge";
import { Button } from "../../../component/ui/button";
import { Card } from "../../../component/ui/card";

// Sample artwork data for each category
const categoryData = {
  nature: {
    name: "Nature Collection",
    description:
      "Breathtaking landscapes, serene forests, and stunning natural beauty",
    gradient: "from-emerald-500/20 to-green-600/20",
    artworks: [
      {
        id: 1,
        title: "Misty Forest",
        price: "$15",
        image: "/placeholder.svg",
        tags: ["Forest", "Mist"],
      },
      {
        id: 2,
        title: "Mountain Sunrise",
        price: "$18",
        image: "/placeholder.svg",
        tags: ["Mountain", "Sunrise"],
      },
      {
        id: 3,
        title: "Ocean Waves",
        price: "$12",
        image: "/placeholder.svg",
        tags: ["Ocean", "Waves"],
      },
      {
        id: 4,
        title: "Desert Dunes",
        price: "$16",
        image: "/placeholder.svg",
        tags: ["Desert", "Sand"],
      },
      {
        id: 5,
        title: "Cherry Blossoms",
        price: "$14",
        image: "/placeholder.svg",
        tags: ["Flowers", "Spring"],
      },
      {
        id: 6,
        title: "Northern Lights",
        price: "$20",
        image: "/placeholder.svg",
        tags: ["Aurora", "Night"],
      },
    ],
  },
  anime: {
    name: "Anime Collection",
    description: "Stunning anime characters and manga-style digital art",
    gradient: "from-purple-500/20 to-pink-600/20",
    artworks: [
      {
        id: 1,
        title: "Warrior Princess",
        price: "$22",
        image: "/placeholder.svg",
        tags: ["Character", "Fantasy"],
      },
      {
        id: 2,
        title: "Cyber City",
        price: "$25",
        image: "/placeholder.svg",
        tags: ["Cyberpunk", "City"],
      },
      {
        id: 3,
        title: "Magic Academy",
        price: "$20",
        image: "/placeholder.svg",
        tags: ["Magic", "School"],
      },
      {
        id: 4,
        title: "Dragon Guardian",
        price: "$28",
        image: "/placeholder.svg",
        tags: ["Dragon", "Fantasy"],
      },
      {
        id: 5,
        title: "Sakura Samurai",
        price: "$24",
        image: "/placeholder.svg",
        tags: ["Samurai", "Sakura"],
      },
      {
        id: 6,
        title: "Space Explorer",
        price: "$26",
        image: "/placeholder.svg",
        tags: ["Space", "Sci-fi"],
      },
    ],
  },
  spiritual: {
    name: "Spiritual Collection",
    description:
      "Divine artwork, gods, and spiritual imagery for meditation and inspiration",
    gradient: "from-orange-500/20 to-yellow-600/20",
    artworks: [
      {
        id: 1,
        title: "Buddha Meditation",
        price: "$18",
        image: "/placeholder.svg",
        tags: ["Buddha", "Peace"],
      },
      {
        id: 2,
        title: "Ganesha Blessing",
        price: "$20",
        image: "/placeholder.svg",
        tags: ["Ganesha", "Hindu"],
      },
      {
        id: 3,
        title: "Angel Wings",
        price: "$16",
        image: "/placeholder.svg",
        tags: ["Angel", "Wings"],
      },
      {
        id: 4,
        title: "Mandala Sacred",
        price: "$15",
        image: "/placeholder.svg",
        tags: ["Mandala", "Sacred"],
      },
      {
        id: 5,
        title: "Lotus Enlightenment",
        price: "$17",
        image: "/placeholder.svg",
        tags: ["Lotus", "Spiritual"],
      },
      {
        id: 6,
        title: "Divine Light",
        price: "$19",
        image: "/placeholder.svg",
        tags: ["Light", "Divine"],
      },
    ],
  },
  quotes: {
    name: "Inspirational Quotes",
    description:
      "Beautiful typography with motivational and inspirational quotes",
    gradient: "from-blue-500/20 to-indigo-600/20",
    artworks: [
      {
        id: 1,
        title: "Dream Big",
        price: "$12",
        image: "/placeholder.svg",
        tags: ["Motivation", "Dreams"],
      },
      {
        id: 2,
        title: "Be Yourself",
        price: "$10",
        image: "/placeholder.svg",
        tags: ["Self-love", "Positive"],
      },
      {
        id: 3,
        title: "Never Give Up",
        price: "$14",
        image: "/placeholder.svg",
        tags: ["Persistence", "Success"],
      },
      {
        id: 4,
        title: "Create Magic",
        price: "$13",
        image: "/placeholder.svg",
        tags: ["Creativity", "Magic"],
      },
      {
        id: 5,
        title: "Choose Joy",
        price: "$11",
        image: "/placeholder.svg",
        tags: ["Happiness", "Joy"],
      },
      {
        id: 6,
        title: "Stay Strong",
        price: "$15",
        image: "/placeholder.svg",
        tags: ["Strength", "Courage"],
      },
    ],
  },
  abstract: {
    name: "Abstract Art",
    description: "Modern abstract designs and geometric patterns",
    gradient: "from-rose-500/20 to-red-600/20",
    artworks: [
      {
        id: 1,
        title: "Fluid Dynamics",
        price: "$16",
        image: "/placeholder.svg",
        tags: ["Fluid", "Modern"],
      },
      {
        id: 2,
        title: "Geometric Harmony",
        price: "$18",
        image: "/placeholder.svg",
        tags: ["Geometry", "Pattern"],
      },
      {
        id: 3,
        title: "Color Explosion",
        price: "$20",
        image: "/placeholder.svg",
        tags: ["Colorful", "Energy"],
      },
      {
        id: 4,
        title: "Minimal Forms",
        price: "$14",
        image: "/placeholder.svg",
        tags: ["Minimal", "Clean"],
      },
      {
        id: 5,
        title: "Digital Waves",
        price: "$17",
        image: "/placeholder.svg",
        tags: ["Digital", "Waves"],
      },
      {
        id: 6,
        title: "Fractal Dreams",
        price: "$19",
        image: "/placeholder.svg",
        tags: ["Fractal", "Dreams"],
      },
    ],
  },
  photography: {
    name: "Photography Collection",
    description: "Stunning digital photography and artistic captures",
    gradient: "from-cyan-500/20 to-teal-600/20",
    artworks: [
      {
        id: 1,
        title: "Urban Night",
        price: "$22",
        image: "/placeholder.svg",
        tags: ["Urban", "Night"],
      },
      {
        id: 2,
        title: "Portrait Study",
        price: "$25",
        image: "/placeholder.svg",
        tags: ["Portrait", "People"],
      },
      {
        id: 3,
        title: "Street Life",
        price: "$20",
        image: "/placeholder.svg",
        tags: ["Street", "Life"],
      },
      {
        id: 4,
        title: "Macro Details",
        price: "$18",
        image: "/placeholder.svg",
        tags: ["Macro", "Details"],
      },
      {
        id: 5,
        title: "Architecture",
        price: "$24",
        image: "/placeholder.svg",
        tags: ["Building", "Design"],
      },
      {
        id: 6,
        title: "Wildlife",
        price: "$26",
        image: "/placeholder.svg",
        tags: ["Animals", "Wildlife"],
      },
    ],
  },
};

const Category = () => {
  const { categoryId } = useParams();
  const [viewMode, setViewMode] = useState("grid");
  const [favorites, setFavorites] = useState([]);

  const category = categoryData[categoryId];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <Link to="/collections">
            <Button>Back to Collections</Button>
          </Link>
        </div>
      </div>
    );
  }

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-primary/5">
      <div className="fixed inset-0 opacity-20">
        <div className="aurora-bg"></div>
      </div>

      {/* Category Header */}
      <section className="relative z-10 py-16">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
            {category.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {category.description}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {category.artworks.length} Artworks
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2">
              High Quality
            </Badge>
          </div>
        </div>
      </section>

      {/* Filters and View Controls */}
      <section className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter size={16} className="mr-2" />
              Filter
            </Button>
            <select className="px-3 py-2 rounded-md border border-border bg-background text-sm">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid size={16} />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List size={16} />
            </Button>
          </div>
        </div>

        {/* Artworks Grid */}
        <div
          className={`grid gap-8 ${
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          }`}
        >
          {category.artworks.map((artwork) => (
            <Card
              key={artwork.id}
              className="group glass-effect hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden border-border/50"
            >
              <div className="relative">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-4 right-4 glass-effect ${
                    favorites.includes(artwork.id)
                      ? "text-red-500"
                      : "text-white"
                  }`}
                  onClick={() => toggleFavorite(artwork.id)}
                >
                  <Heart
                    size={20}
                    fill={
                      favorites.includes(artwork.id) ? "currentColor" : "none"
                    }
                  />
                </Button>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {artwork.title}
                  </h3>
                  <span className="text-2xl font-bold text-primary">
                    {artwork.price}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {artwork.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 shimmer-effect">
                    <Download size={16} className="mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Preview
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="shimmer-effect">
            Load More Artworks
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Category;
