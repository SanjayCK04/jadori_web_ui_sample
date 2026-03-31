import { Link } from "react-router-dom";
import { Star, Shield } from "lucide-react";
import { motion } from "framer-motion";
import type { Bag } from "@/data/bags";

const BagCard = ({ bag, index = 0 }: { bag: Bag; index?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Link to={`/bag/${bag.id}`} className="group block">
      <div className="glass-card rounded-lg overflow-hidden hover-lift">
        <div className="relative aspect-square overflow-hidden bg-champagne">
          <img
            src={bag.image}
            alt={`${bag.brand} ${bag.model}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            width={400}
            height={400}
          />
          {bag.verified && (
            <div className="absolute top-3 right-3 bg-accent text-accent-foreground rounded-full p-1.5">
              <Shield className="w-3.5 h-3.5" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="p-5">
          <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-1">{bag.brand}</p>
          <h3 className="font-serif text-lg font-medium mb-2">{bag.model}</h3>
          <div className="flex items-center justify-between">
            <p className="font-sans text-sm">
              <span className="gold-text font-semibold text-base">${bag.pricePerDay}</span>
              <span className="text-muted-foreground"> / day</span>
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="w-3.5 h-3.5 fill-accent text-accent" />
              <span className="font-sans">{bag.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default BagCard;
