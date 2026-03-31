import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BagCard from "@/components/BagCard";
import { bags } from "@/data/bags";

const brands = ["All", "Hermès", "Chanel", "Dior", "Valentino", "Bottega Veneta", "Fendi"];
const colors = ["All", "Brown", "Red", "White", "Navy", "Green", "Pink"];
const events = ["All", "Wedding", "Party", "Vacation"];

const Browse = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "All";
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");
  const [color, setColor] = useState("All");
  const [event, setEvent] = useState(initialCat);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = bags.filter((b) => {
    if (search && !`${b.brand} ${b.model}`.toLowerCase().includes(search.toLowerCase())) return false;
    if (brand !== "All" && b.brand !== brand) return false;
    if (color !== "All" && b.color !== color) return false;
    if (event !== "All" && b.category !== event) return false;
    return true;
  });

  const FilterPills = ({ items, value, onChange }: { items: string[]; value: string; onChange: (v: string) => void }) => (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wide transition-all ${
            value === item ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl mb-3">Our Collection</h1>
            <p className="text-muted-foreground font-sans">Discover authenticated luxury handbags</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by brand or model..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 py-6 bg-secondary/50 border-border/50 font-sans text-base rounded-full"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex justify-center mb-8">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2 font-sans text-sm uppercase tracking-wide"
            >
              {showFilters ? <X className="w-4 h-4" /> : <SlidersHorizontal className="w-4 h-4" />}
              Filters
            </Button>
          </div>

          {/* Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="glass-card rounded-xl p-6 mb-10 space-y-6"
            >
              <div>
                <label className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-3 block">Brand</label>
                <FilterPills items={brands} value={brand} onChange={setBrand} />
              </div>
              <div>
                <label className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-3 block">Color</label>
                <FilterPills items={colors} value={color} onChange={setColor} />
              </div>
              <div>
                <label className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-3 block">Event</label>
                <FilterPills items={events} value={event} onChange={setEvent} />
              </div>
            </motion.div>
          )}

          {/* Results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((bag, i) => (
              <BagCard key={bag.id} bag={bag} index={i} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-muted-foreground">No bags match your criteria</p>
              <p className="text-sm font-sans text-muted-foreground mt-2">Try adjusting your filters</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Browse;
