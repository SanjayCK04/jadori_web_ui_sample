import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Shield, MapPin, Calendar, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bags } from "@/data/bags";
import { useState } from "react";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const BagDetail = () => {
  const { id } = useParams();
  const bag = bags.find((b) => b.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({ from: undefined, to: undefined });

  if (!bag) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-3xl mb-4">Bag Not Found</h1>
        <Link to="/browse"><Button>Back to Collection</Button></Link>
      </div>
    </div>
  );

  const days = dateRange.from && dateRange.to
    ? Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24))
    : 0;
  const rentalFee = days * bag.pricePerDay;
  const platformFee = Math.round(rentalFee * 0.12);
  const deposit = Math.round(bag.retailValue * 0.1);

  return (
    <div className="min-h-screen py-8 lg:py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <Link to="/browse" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-sans text-sm mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </Link>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <div>
            <div className="aspect-square rounded-xl overflow-hidden bg-champagne mb-4">
              <img
                src={bag.images[selectedImage]}
                alt={`${bag.brand} ${bag.model}`}
                className="w-full h-full object-cover"
                width={800}
                height={800}
              />
            </div>
            <div className="flex gap-3">
              {bag.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={cn(
                    "w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
                    selectedImage === i ? "border-accent" : "border-border/50 opacity-60 hover:opacity-100"
                  )}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" width={80} height={80} />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-start justify-between mb-2">
              <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground">{bag.brand}</p>
              {bag.verified && (
                <span className="flex items-center gap-1 text-xs font-sans bg-champagne text-gold-dark px-3 py-1 rounded-full">
                  <Shield className="w-3.5 h-3.5" /> Verified Authentic
                </span>
              )}
            </div>
            <h1 className="font-serif text-3xl md:text-4xl mb-4">{bag.model}</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span className="font-sans text-sm font-medium">{bag.rating}</span>
                <span className="text-muted-foreground font-sans text-sm">({bag.reviews} reviews)</span>
              </div>
              <span className="text-muted-foreground font-sans text-sm">Color: {bag.color}</span>
            </div>

            <p className="font-sans text-muted-foreground leading-relaxed mb-8">{bag.description}</p>

            <div className="flex items-baseline gap-4 mb-2">
              <p className="text-muted-foreground font-sans text-xs uppercase tracking-widest">Retail Value</p>
              <p className="font-serif text-lg line-through text-muted-foreground">${bag.retailValue.toLocaleString()}</p>
            </div>

            {/* Pricing */}
            <div className="glass-card rounded-xl p-6 mb-8">
              <h3 className="font-serif text-lg mb-4">Rental Pricing</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { label: "Daily", price: bag.pricePerDay },
                  { label: "Weekly", price: bag.pricePerWeek },
                  { label: "Monthly", price: bag.pricePerMonth },
                ].map((p) => (
                  <div key={p.label} className="p-3 bg-secondary/50 rounded-lg">
                    <p className="text-xs font-sans uppercase tracking-wide text-muted-foreground mb-1">{p.label}</p>
                    <p className="font-serif text-xl gold-text">${p.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar */}
            <div className="glass-card rounded-xl p-6 mb-8">
              <h3 className="font-serif text-lg mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" /> Select Dates
              </h3>
              <CalendarUI
                mode="range"
                selected={dateRange}
                onSelect={(range: any) => setDateRange(range || { from: undefined, to: undefined })}
                disabled={(date) => date < new Date()}
                className={cn("p-3 pointer-events-auto w-full")}
                numberOfMonths={1}
              />
              {days > 0 && days < 2 && (
                <p className="text-xs text-destructive font-sans mt-2">Minimum rental is 2 days</p>
              )}
            </div>

            {/* Price Breakdown */}
            {days >= 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card rounded-xl p-6 mb-8">
                <h3 className="font-serif text-lg mb-4">Price Breakdown</h3>
                <div className="space-y-3 font-sans text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Rental fee ({days} days)</span><span>${rentalFee}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Platform fee</span><span>${platformFee}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Security deposit (refundable)</span><span>${deposit}</span></div>
                  <div className="border-t border-border pt-3 flex justify-between font-medium text-base">
                    <span>Total</span><span className="gold-text font-serif text-xl">${rentalFee + platformFee + deposit}</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* CTA */}
            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1 bg-accent text-accent-foreground hover:bg-gold-dark py-6 uppercase tracking-widest text-sm font-sans"
                disabled={days < 2}
              >
                Instant Book
              </Button>
              <Button size="lg" variant="outline" className="py-6 px-4">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Lender */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-champagne flex items-center justify-center font-serif text-lg gold-text">
                  {bag.lender.name[0]}
                </div>
                <div>
                  <p className="font-serif font-medium">{bag.lender.name}</p>
                  <p className="text-xs font-sans text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Member since {bag.lender.memberSince}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BagDetail;
