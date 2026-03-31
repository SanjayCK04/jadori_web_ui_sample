import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bags } from "@/data/bags";

const bookings = [
  { bagId: "1", dates: "Apr 5 – Apr 10, 2026", status: "Upcoming", statusType: "upcoming" },
  { bagId: "3", dates: "Mar 15 – Mar 20, 2026", status: "Completed", statusType: "completed" },
  { bagId: "2", dates: "Feb 10 – Feb 14, 2026", status: "Completed", statusType: "completed" },
];

const Bookings = () => (
  <div className="min-h-screen py-12 lg:py-20">
    <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-serif text-3xl md:text-4xl mb-10">My Bookings</h1>

        <div className="space-y-6">
          {bookings.map((booking, i) => {
            const bag = bags.find((b) => b.id === booking.bagId);
            if (!bag) return null;
            return (
              <motion.div
                key={i}
                className="glass-card rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-40 h-40 bg-champagne">
                    <img src={bag.image} alt={bag.model} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground">{bag.brand}</p>
                        <h3 className="font-serif text-lg">{bag.model}</h3>
                      </div>
                      <span className={`text-xs font-sans px-3 py-1 rounded-full ${
                        booking.statusType === "upcoming" ? "bg-champagne text-gold-dark" : "bg-secondary text-muted-foreground"
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                    <p className="text-sm font-sans text-muted-foreground flex items-center gap-1 mt-2">
                      <Calendar className="w-3.5 h-3.5" /> {booking.dates}
                    </p>
                    {booking.statusType === "upcoming" && (
                      <div className="mt-4 flex gap-3">
                        <Button size="sm" className="bg-accent text-accent-foreground hover:bg-gold-dark text-xs font-sans uppercase tracking-wide">
                          View Details
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </div>
);

export default Bookings;
