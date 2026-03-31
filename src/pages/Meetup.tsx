import { motion } from "framer-motion";
import { Camera, CheckCircle, Circle, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const steps = [
  { id: 1, label: "Bag Given", desc: "Lender hands over the bag", icon: Package },
  { id: 2, label: "Bag Received", desc: "Renter confirms receipt", icon: CheckCircle },
  { id: 3, label: "Bag Returned", desc: "Renter returns the bag", icon: Package },
  { id: 4, label: "Bag Confirmed", desc: "Lender confirms return condition", icon: CheckCircle },
];

const Meetup = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-serif text-3xl md:text-4xl mb-2 text-center">Meetup Verification</h1>
          <p className="text-center text-muted-foreground font-sans text-sm mb-10">Track the handover process</p>

          {/* Timeline */}
          <div className="relative mb-10">
            {steps.map((step, i) => (
              <div key={step.id} className="flex gap-4 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    step.id <= currentStep ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"
                  }`}>
                    {step.id < currentStep ? <CheckCircle className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-0.5 h-12 mt-2 ${step.id < currentStep ? "bg-accent" : "bg-border"}`} />
                  )}
                </div>
                <div className="pt-1.5">
                  <h3 className={`font-serif text-lg ${step.id <= currentStep ? "" : "text-muted-foreground"}`}>{step.label}</h3>
                  <p className="text-sm font-sans text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Upload Section */}
          <div className="glass-card rounded-xl p-8 mb-8">
            <h2 className="font-serif text-xl mb-4 flex items-center gap-2">
              <Camera className="w-5 h-5 text-accent" /> Upload Condition Photos
            </h2>
            <p className="text-sm font-sans text-muted-foreground mb-4">
              Take clear photos of the bag's condition before and after the rental period.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((n) => (
                <button key={n} className="aspect-square rounded-lg border-2 border-dashed border-border hover:border-accent flex flex-col items-center justify-center gap-2 transition-colors">
                  <Camera className="w-6 h-6 text-muted-foreground" />
                  <span className="text-xs font-sans text-muted-foreground">Photo {n}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Action Button */}
          {currentStep <= 4 && (
            <Button
              onClick={() => setCurrentStep(Math.min(currentStep + 1, 5))}
              className="w-full bg-accent text-accent-foreground hover:bg-gold-dark py-6 uppercase tracking-widest text-sm font-sans gap-2"
            >
              {steps[currentStep - 1]?.label || "Complete"} <ArrowRight className="w-4 h-4" />
            </Button>
          )}
          {currentStep > 4 && (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
              <h2 className="font-serif text-2xl">Verification Complete</h2>
              <p className="text-sm font-sans text-muted-foreground mt-2">Thank you for completing the process</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Meetup;
