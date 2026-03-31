import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserRole } from "@/contexts/UserRoleContext";
import { Heart, ShoppingBag, User, Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { isAuthenticated, activeMode, userRole, setActiveMode, logout } = useUserRole();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const renterNav = [
    { label: "Home", path: "/" },
    { label: "Browse Bags", path: "/browse" },
    { label: "My Bookings", path: "/bookings" },
    { label: "Wishlist", path: "/wishlist" },
  ];

  const lenderNav = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "My Listings", path: "/listings" },
    { label: "Add Listing", path: "/add-listing" },
    { label: "Booking Requests", path: "/bookings" },
    { label: "Earnings", path: "/wallet" },
  ];

  const navItems = activeMode === "lender" ? lenderNav : renterNav;

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl lg:text-3xl font-bold tracking-wider gold-text">JADORI</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-sans font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Role Toggle */}
            {isAuthenticated && userRole === "both" && (
              <div className="hidden md:flex items-center bg-secondary rounded-full p-1 text-xs font-sans">
                <button
                  onClick={() => setActiveMode("renter")}
                  className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
                    activeMode === "renter" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  Renter
                </button>
                <button
                  onClick={() => setActiveMode("lender")}
                  className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
                    activeMode === "lender" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  Lender
                </button>
              </div>
            )}

            {isAuthenticated ? (
              <>
                <Link to="/wishlist" className="hidden md:flex p-2 hover:text-accent transition-colors">
                  <Heart className="w-5 h-5" />
                </Link>
                <Link to="/profile" className="hidden md:flex p-2 hover:text-accent transition-colors">
                  <User className="w-5 h-5" />
                </Link>
                <button onClick={() => { logout(); navigate("/"); }} className="hidden md:flex p-2 hover:text-accent transition-colors">
                  <LogOut className="w-5 h-5" />
                </button>
              </>
            ) : (
              <div className="hidden md:flex items-center gap-3">
                <Link to="/auth">
                  <Button variant="ghost" className="text-sm font-sans uppercase tracking-wide">Sign In</Button>
                </Link>
                <Link to="/auth?mode=signup">
                  <Button className="bg-accent text-accent-foreground hover:bg-gold-dark text-sm font-sans uppercase tracking-wide px-6">
                    Join Now
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {isAuthenticated && userRole === "both" && (
                <div className="flex items-center bg-secondary rounded-full p-1 text-xs font-sans w-fit">
                  <button
                    onClick={() => setActiveMode("renter")}
                    className={`px-4 py-1.5 rounded-full transition-all ${
                      activeMode === "renter" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                    }`}
                  >
                    Renter
                  </button>
                  <button
                    onClick={() => setActiveMode("lender")}
                    className={`px-4 py-1.5 rounded-full transition-all ${
                      activeMode === "lender" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                    }`}
                  >
                    Lender
                  </button>
                </div>
              )}
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-serif py-2 border-b border-border/30"
                >
                  {item.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <>
                  <Link to="/profile" onClick={() => setMobileOpen(false)} className="text-lg font-serif py-2">Profile</Link>
                  <button onClick={() => { logout(); navigate("/"); setMobileOpen(false); }} className="text-lg font-serif py-2 text-left text-destructive">Sign Out</button>
                </>
              ) : (
                <Link to="/auth" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-accent text-accent-foreground mt-2">Sign In / Join</Button>
                </Link>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
