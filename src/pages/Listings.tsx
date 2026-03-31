import { motion } from "framer-motion";
import { Edit, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { bags } from "@/data/bags";

const Listings = () => (
  <div className="min-h-screen py-12 lg:py-20">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-between mb-10">
          <h1 className="font-serif text-3xl md:text-4xl">My Listings</h1>
          <Link to="/add-listing">
            <Button className="bg-accent text-accent-foreground hover:bg-gold-dark text-xs font-sans uppercase tracking-wide gap-2">
              <Plus className="w-4 h-4" /> Add Listing
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bags.slice(0, 4).map((bag, i) => (
            <motion.div
              key={bag.id}
              className="glass-card rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="aspect-square bg-champagne">
                <img src={bag.image} alt={bag.model} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-1">{bag.brand}</p>
                <h3 className="font-serif text-lg mb-2">{bag.model}</h3>
                <p className="font-sans text-sm mb-4">
                  <span className="gold-text font-semibold">${bag.pricePerDay}</span>
                  <span className="text-muted-foreground"> / day</span>
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-1 text-xs font-sans">
                    <Edit className="w-3.5 h-3.5" /> Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive/10 text-xs">
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default Listings;
