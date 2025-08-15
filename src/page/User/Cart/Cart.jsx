import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  Palette,
} from "lucide-react";
import { ModeToggle } from "../../Auth/Home/ModeToggle";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../component/card";
import { Button } from "../../../component/button";
import { Badge } from "../../../component/badge";
import { Separator } from "../../../component/Separator";

const Cart = () => {
  const { state } = {};
  const navigate = useNavigate();

  const handleCheckout = () => {
    // TODO: Implement actual checkout logic
  };

  const handleClearCart = () => {
    // clearCart
  };

  const item = [
    {
      id: 1,
      name: "Art Piece 1",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: "Art Piece 2",
      price: 200,
      quantity: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <Palette className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent"
            >
              ArtCanvas
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="relative text-foreground hover:text-primary transition-all duration-300 group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/collections"
              className="relative text-foreground hover:text-primary transition-all duration-300 group"
            >
              Collections
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a
              href="/#gallery"
              className="relative text-foreground hover:text-primary transition-all duration-300 group"
            >
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Badge
              variant="secondary"
              className="glass-effect border-primary/30 text-primary"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {item.length} items
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 hover:bg-primary/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Continue Shopping
        </Button>

        <div className="w-full">
          {/* Cart Items */}
          <div className="w-full">
            <Card className="glass-effect border-primary/20 w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                  Shopping Cart
                  <Badge variant="secondary" className="ml-auto">
                    {item.length} items
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {item.length === 0 ? (
                  <div className="text-center py-16">
                    <ShoppingCart className="h-24 w-24 text-muted-foreground mx-auto mb-6 opacity-50" />
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      Your cart is empty
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      Discover amazing digital artwork to transform your space
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-primary to-primary/80"
                      >
                        <Link to="/collections">Browse Collections</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/#gallery">View Gallery</Link>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {item.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-4 rounded-xl glass-effect border border-border/20 hover:border-primary/30 transition-all duration-300"
                      >
                        {/* Item Image */}
                        <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary/40 to-accent/50 rounded-md"></div>
                        </div>

                        {/* Item Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg text-foreground mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {item.category} • Digital Download
                          </p>
                          <p className="text-sm text-muted-foreground">
                            24x36 inches • 300 DPI • Instant Download
                          </p>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary mb-2">
                            ${item.price}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            per download
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2 glass-effect border border-border/20 rounded-lg p-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => {}}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-semibold w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => {}}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 text-destructive hover:text-destructive hover:bg-destructive/10"
                            onClick={() => {}}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}

                    {/* Clear Cart Button */}
                    {(state?.items || []).length > 0 && (
                      <div className="pt-4 border-t border-border/20">
                        <Button
                          variant="outline"
                          onClick={handleClearCart}
                          className="text-destructive border-destructive/30 hover:bg-destructive/10"
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Clear All Items
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          {(state?.items || []).length > 0 && (
            <div className="lg:col-span-1">
              <Card className="glass-effect border-primary/20 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items Breakdown */}
                  <div className="space-y-3">
                    {state.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-muted-foreground truncate mr-2">
                          {item.title} x{item.quantity}
                        </span>
                        <span className="font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Separator className="bg-border/20" />

                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${state.total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Processing Fee
                      </span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Discount (Digital)</span>
                      <span>-$0.00</span>
                    </div>
                  </div>

                  <Separator className="bg-border/20" />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">
                      ${state.total.toFixed(2)}
                    </span>
                  </div>

                  {/* Checkout Button */}
                  <Button
                    onClick={handleCheckout}
                    className="w-full mt-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary text-lg py-6"
                  >
                    Proceed to Checkout
                  </Button>

                  {/* Security Badge */}
                  <div className="text-center mt-4">
                    <Badge
                      variant="outline"
                      className="text-xs border-green-500/30 text-green-600"
                    >
                      🔒 Secure Checkout
                    </Badge>
                  </div>

                  {/* Features */}
                  <div className="text-center mt-6 space-y-2 text-sm text-muted-foreground">
                    <p>✓ Instant Download</p>
                    <p>✓ High Quality 300 DPI</p>
                    <p>✓ Commercial License Included</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
