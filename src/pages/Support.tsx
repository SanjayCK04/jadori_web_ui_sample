import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Support = () => (
  <div className="min-h-screen py-12 lg:py-20">
    <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl mb-3">How Can We Help?</h1>
          <p className="text-muted-foreground font-sans">Our luxury concierge team is here to assist you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Mail, label: "Email Support", value: "support@jadori.com" },
            { icon: MessageCircle, label: "Live Chat", value: "Available 9am – 9pm" },
            { icon: Phone, label: "Phone", value: "+91 800-JADORI" },
          ].map((c) => (
            <div key={c.label} className="glass-card rounded-xl p-6 text-center">
              <c.icon className="w-6 h-6 mx-auto mb-3 text-accent" />
              <p className="font-serif text-sm mb-1">{c.label}</p>
              <p className="text-xs font-sans text-muted-foreground">{c.value}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-xl p-8 lg:p-10">
          <h2 className="font-serif text-xl mb-6">Send Us a Message</h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input placeholder="Your Name" className="py-6 bg-secondary/50 font-sans" />
              <Input type="email" placeholder="Email Address" className="py-6 bg-secondary/50 font-sans" />
            </div>
            <Input placeholder="Subject" className="py-6 bg-secondary/50 font-sans" />
            <Textarea placeholder="How can we help you?" className="bg-secondary/50 font-sans min-h-[150px]" />
            <Button className="bg-accent text-accent-foreground hover:bg-gold-dark px-10 py-6 uppercase tracking-widest text-sm font-sans">
              Send Message
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Support;
