import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, ArrowRight, ArrowLeft, Check, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

const steps = ["Photos", "Details", "Pricing", "Review"];

const AddListing = () => {
  const [step, setStep] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [form, setForm] = useState({ brand: "", model: "", color: "", value: "", description: "", pricePerDay: "", pricePerWeek: "", pricePerMonth: "" });
  const navigate = useNavigate();

  const update = (key: string, val: string) => setForm({ ...form, [key]: val });

  const handleImageUpload = () => {
    // Simulate upload
    setImages([...images, `/placeholder.svg`]);
  };

  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-serif text-3xl md:text-4xl text-center mb-2">List Your Bag</h1>
          <p className="text-center text-muted-foreground font-sans text-sm mb-10">Share your luxury piece with the Jadori community</p>

          {/* Steps */}
          <div className="flex items-center justify-center gap-4 mb-10">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-sans transition-all ${
                  i <= step ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"
                }`}>
                  {i < step ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span className="text-xs font-sans uppercase tracking-wide hidden sm:block">{s}</span>
                {i < steps.length - 1 && <div className={`w-8 h-px ${i < step ? "bg-accent" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          <div className="glass-card rounded-xl p-8">
            {/* Step 0: Photos */}
            {step === 0 && (
              <div>
                <h2 className="font-serif text-xl mb-2">Upload Photos</h2>
                <p className="text-sm font-sans text-muted-foreground mb-6">Add 3–5 high-quality photos of your bag</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {images.map((img, i) => (
                    <div key={i} className="aspect-square rounded-lg bg-secondary flex items-center justify-center border border-border">
                      <img src={img} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                  ))}
                  {images.length < 5 && (
                    <button
                      onClick={handleImageUpload}
                      className="aspect-square rounded-lg border-2 border-dashed border-border hover:border-accent flex flex-col items-center justify-center gap-2 transition-colors"
                    >
                      <Upload className="w-6 h-6 text-muted-foreground" />
                      <span className="text-xs font-sans text-muted-foreground">Upload</span>
                    </button>
                  )}
                </div>
                <div className="bg-champagne/50 rounded-lg p-4 flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                  <p className="text-xs font-sans text-gold-dark leading-relaxed">
                    By listing your bag, you confirm it is authentic and in the condition described. Jadori reserves the right to verify authenticity.
                  </p>
                </div>
              </div>
            )}

            {/* Step 1: Details */}
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="font-serif text-xl mb-4">Bag Details</h2>
                <Input placeholder="Brand (e.g., Chanel)" value={form.brand} onChange={(e) => update("brand", e.target.value)} className="py-6 bg-secondary/50 font-sans" />
                <Input placeholder="Model (e.g., Classic Flap)" value={form.model} onChange={(e) => update("model", e.target.value)} className="py-6 bg-secondary/50 font-sans" />
                <Input placeholder="Color" value={form.color} onChange={(e) => update("color", e.target.value)} className="py-6 bg-secondary/50 font-sans" />
                <Input placeholder="Retail Value ($)" value={form.value} onChange={(e) => update("value", e.target.value)} className="py-6 bg-secondary/50 font-sans" />
                <Textarea placeholder="Description — tell renters about your bag" value={form.description} onChange={(e) => update("description", e.target.value)} className="bg-secondary/50 font-sans min-h-[120px]" />
              </div>
            )}

            {/* Step 2: Pricing */}
            {step === 2 && (
              <div className="space-y-5">
                <h2 className="font-serif text-xl mb-4">Set Your Pricing</h2>
                <div>
                  <label className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2 block">Price Per Day ($)</label>
                  <Input value={form.pricePerDay} onChange={(e) => update("pricePerDay", e.target.value)} className="py-6 bg-secondary/50 font-sans" />
                </div>
                <div>
                  <label className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2 block">Price Per Week ($)</label>
                  <Input value={form.pricePerWeek} onChange={(e) => update("pricePerWeek", e.target.value)} className="py-6 bg-secondary/50 font-sans" />
                </div>
                <div>
                  <label className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2 block">Price Per Month ($)</label>
                  <Input value={form.pricePerMonth} onChange={(e) => update("pricePerMonth", e.target.value)} className="py-6 bg-secondary/50 font-sans" />
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <div>
                <h2 className="font-serif text-xl mb-4">Review Your Listing</h2>
                <div className="space-y-3 font-sans text-sm">
                  <div className="flex justify-between py-2 border-b border-border/30"><span className="text-muted-foreground">Brand</span><span>{form.brand || "—"}</span></div>
                  <div className="flex justify-between py-2 border-b border-border/30"><span className="text-muted-foreground">Model</span><span>{form.model || "—"}</span></div>
                  <div className="flex justify-between py-2 border-b border-border/30"><span className="text-muted-foreground">Color</span><span>{form.color || "—"}</span></div>
                  <div className="flex justify-between py-2 border-b border-border/30"><span className="text-muted-foreground">Retail Value</span><span>${form.value || "—"}</span></div>
                  <div className="flex justify-between py-2 border-b border-border/30"><span className="text-muted-foreground">Daily Rate</span><span>${form.pricePerDay || "—"}</span></div>
                  <div className="flex justify-between py-2"><span className="text-muted-foreground">Photos</span><span>{images.length} uploaded</span></div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                disabled={step === 0}
                className="gap-2 font-sans"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </Button>
              {step < 3 ? (
                <Button onClick={() => setStep(step + 1)} className="bg-accent text-accent-foreground hover:bg-gold-dark gap-2 font-sans">
                  Next <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button onClick={() => navigate("/dashboard")} className="bg-accent text-accent-foreground hover:bg-gold-dark gap-2 font-sans">
                  Publish Listing <Check className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AddListing;
