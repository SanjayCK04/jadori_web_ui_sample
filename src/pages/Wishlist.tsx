import { motion } from "framer-motion";
import BagCard from "@/components/BagCard";
import { bags } from "@/data/bags";

const Wishlist = () => (
  <div className="min-h-screen py-12 lg:py-20">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-serif text-3xl md:text-4xl mb-10">My Wishlist</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bags.slice(0, 3).map((bag, i) => (
            <BagCard key={bag.id} bag={bag} index={i} />
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default Wishlist;
