import { motion } from "framer-motion";
import { MapPin, Calendar, ShoppingBag, Package } from "lucide-react";
import { useUserRole } from "@/contexts/UserRoleContext";

const Profile = () => {
  const { userName, userRole, activeMode } = useUserRole();

  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="glass-card rounded-xl p-8 lg:p-12 text-center mb-8">
            <div className="w-24 h-24 mx-auto rounded-full bg-champagne flex items-center justify-center font-serif text-3xl gold-text mb-6">
              {(userName || "U")[0].toUpperCase()}
            </div>
            <h1 className="font-serif text-3xl mb-2">{userName || "User"}</h1>
            <p className="font-sans text-sm text-muted-foreground flex items-center justify-center gap-2 mb-1">
              <MapPin className="w-4 h-4" /> Mumbai, India
            </p>
            <p className="font-sans text-xs text-muted-foreground flex items-center justify-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> Member since 2025
            </p>
            <p className="font-sans text-sm text-muted-foreground mt-4 max-w-sm mx-auto">
              Luxury enthusiast who loves curating timeless pieces for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6 text-center">
              <ShoppingBag className="w-8 h-8 mx-auto mb-3 text-accent" />
              <p className="font-serif text-2xl mb-1">12</p>
              <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground">Bags Rented</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <Package className="w-8 h-8 mx-auto mb-3 text-accent" />
              <p className="font-serif text-2xl mb-1">5</p>
              <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground">Bags Listed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
