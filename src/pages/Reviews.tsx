import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const existingReviews = [
  { name: "Priya S.", rating: 5, text: "Absolutely stunning bag! It was in perfect condition and made my event unforgettable.", date: "Mar 28, 2026" },
  { name: "Aisha M.", rating: 5, text: "Smooth rental experience. The bag was exactly as described. Will definitely rent again!", date: "Mar 22, 2026" },
  { name: "Natasha K.", rating: 4, text: "Beautiful piece. Minor wear on the strap but overall great condition.", date: "Mar 15, 2026" },
];

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-serif text-3xl md:text-4xl mb-10">Reviews & Ratings</h1>

          {/* Write Review */}
          <div className="glass-card rounded-xl p-8 mb-10">
            <h2 className="font-serif text-xl mb-4">Leave a Review</h2>
            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  onMouseEnter={() => setHoverRating(s)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(s)}
                >
                  <Star className={`w-7 h-7 transition-colors ${
                    s <= (hoverRating || rating) ? "fill-accent text-accent" : "text-border"
                  }`} />
                </button>
              ))}
            </div>
            <Textarea placeholder="Share your experience..." className="bg-secondary/50 font-sans min-h-[100px] mb-4" />
            <Button className="bg-accent text-accent-foreground hover:bg-gold-dark font-sans uppercase tracking-wide text-xs">
              Submit Review
            </Button>
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            {existingReviews.map((r, i) => (
              <motion.div
                key={i}
                className="glass-card rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-champagne flex items-center justify-center font-serif gold-text">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="font-serif text-sm font-medium">{r.name}</p>
                      <p className="text-xs font-sans text-muted-foreground">{r.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
