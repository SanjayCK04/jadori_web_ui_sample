import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Truck, RefreshCw, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BagCard from "@/components/BagCard";
import { bags, categories } from "@/data/bags";
import heroImg from "@/assets/bag-hero.jpg";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } }),
};

const Index = () => {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const visibleBags = bags.slice(carouselIdx, carouselIdx + 3);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury handbag" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeUp} custom={0} className="text-accent font-sans text-sm uppercase tracking-[0.3em] mb-4">
              Luxury Handbag Rental
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6 text-primary-foreground">
              Rent Luxury.<br />
              <span className="gold-text">Own the Moment.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-primary-foreground/70 font-sans text-lg md:text-xl mb-10 max-w-md leading-relaxed">
              Access the world's most coveted designer bags without the commitment. Wear, return, repeat.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Link to="/browse">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark px-8 py-6 text-sm uppercase tracking-widest font-sans">
                  Browse Bags <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/auth?mode=signup">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-sm uppercase tracking-widest font-sans">
                  List Your Bag
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Bags Carousel */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-accent font-sans text-xs uppercase tracking-[0.3em] mb-2">Curated Selection</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">Featured Bags</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCarouselIdx(Math.max(0, carouselIdx - 1))}
                disabled={carouselIdx === 0}
                className="p-2 border border-border rounded-full disabled:opacity-30 hover:bg-secondary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCarouselIdx(Math.min(bags.length - 3, carouselIdx + 1))}
                disabled={carouselIdx >= bags.length - 3}
                className="p-2 border border-border rounded-full disabled:opacity-30 hover:bg-secondary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleBags.map((bag, i) => (
              <BagCard key={bag.id} bag={bag} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-accent font-sans text-xs uppercase tracking-[0.3em] mb-2">Shop by Occasion</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">Find Your Perfect Match</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Link
                  to={`/browse?category=${cat.name}`}
                  className="group block glass-card rounded-lg p-10 text-center hover-lift"
                >
                  <span className="text-5xl mb-4 block">{cat.icon}</span>
                  <h3 className="font-serif text-2xl mb-2">{cat.name}</h3>
                  <p className="text-muted-foreground font-sans text-sm">{cat.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-accent font-sans text-xs uppercase tracking-[0.3em] mb-2">Simple & Elegant</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: "Choose Your Bag", desc: "Browse our curated collection of authenticated luxury handbags." },
              { icon: Truck, title: "Book & Receive", desc: "Select your dates, complete checkout, and arrange pickup." },
              { icon: RefreshCw, title: "Wear & Return", desc: "Enjoy your bag and return it when your rental period ends." },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-champagne flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="font-serif text-sm gold-text mb-2">0{i + 1}</div>
                <h3 className="font-serif text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-accent font-sans text-xs uppercase tracking-[0.3em] mb-2">Trusted by Many</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">What Our Members Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya S.", text: "Jadori made my wedding week unforgettable. I carried a Chanel Classic Flap that I'd only dreamed of owning.", rating: 5 },
              { name: "Aisha M.", text: "As a lender, I've earned back the cost of my bags while they sit in my closet. Brilliant concept!", rating: 5 },
              { name: "Natasha K.", text: "The verification process gives me complete peace of mind. Every bag is guaranteed authentic.", rating: 5 },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                className="glass-card rounded-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground mb-6 italic">"{t.text}"</p>
                <p className="font-serif text-sm font-medium">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-primary rounded-2xl p-12 lg:p-20 text-center text-primary-foreground">
            <h2 className="font-serif text-3xl md:text-5xl mb-4">Ready to Experience Luxury?</h2>
            <p className="font-sans text-primary-foreground/60 text-lg mb-10 max-w-lg mx-auto">
              Join thousands of fashion lovers who rent and lend luxury handbags.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/browse">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark px-10 py-6 uppercase tracking-widest text-sm font-sans">
                  Browse Bags
                </Button>
              </Link>
              <Link to="/auth?mode=signup">
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-10 py-6 uppercase tracking-widest text-sm font-sans">
                  List Your Bag
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
