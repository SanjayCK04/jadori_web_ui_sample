import { motion } from "framer-motion";
import { DollarSign, ArrowUpRight, ArrowDownLeft, Wallet as WalletIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const transactions = [
  { id: 1, type: "earning", desc: "Hermès Birkin rental – Priya S.", amount: 750, date: "Mar 28" },
  { id: 2, type: "earning", desc: "Chanel Classic Flap – Aisha M.", amount: 360, date: "Mar 22" },
  { id: 3, type: "withdrawal", desc: "Withdrawal to bank", amount: -1000, date: "Mar 15" },
  { id: 4, type: "earning", desc: "Dior Lady Dior – Natasha K.", amount: 450, date: "Mar 10" },
  { id: 5, type: "earning", desc: "Fendi Peekaboo – Elena V.", amount: 240, date: "Mar 5" },
];

const Wallet = () => (
  <div className="min-h-screen py-12 lg:py-20">
    <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-serif text-3xl md:text-4xl mb-10">Earnings & Wallet</h1>

        {/* Balance Card */}
        <div className="gold-gradient rounded-2xl p-8 lg:p-10 text-accent-foreground mb-10">
          <div className="flex items-center justify-between mb-6">
            <WalletIcon className="w-8 h-8 opacity-80" />
            <span className="text-xs uppercase tracking-widest opacity-70 font-sans">Available Balance</span>
          </div>
          <p className="font-serif text-5xl font-bold mb-6">$1,800</p>
          <Button className="bg-accent-foreground/20 hover:bg-accent-foreground/30 text-accent-foreground backdrop-blur font-sans uppercase tracking-widest text-xs px-8 py-5">
            Withdraw Funds
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          <div className="glass-card rounded-xl p-6 text-center">
            <p className="font-serif text-2xl mb-1">$13,100</p>
            <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground">Total Earned</p>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <p className="font-serif text-2xl mb-1">$11,300</p>
            <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground">Total Withdrawn</p>
          </div>
        </div>

        {/* Transactions */}
        <div className="glass-card rounded-xl p-6 lg:p-8">
          <h2 className="font-serif text-xl mb-6">Transaction History</h2>
          <div className="space-y-4">
            {transactions.map((t) => (
              <div key={t.id} className="flex items-center justify-between py-3 border-b border-border/30 last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                    t.type === "earning" ? "bg-accent/10" : "bg-secondary"
                  }`}>
                    {t.type === "earning" ? <ArrowDownLeft className="w-4 h-4 text-accent" /> : <ArrowUpRight className="w-4 h-4 text-muted-foreground" />}
                  </div>
                  <div>
                    <p className="font-sans text-sm">{t.desc}</p>
                    <p className="text-xs font-sans text-muted-foreground">{t.date}</p>
                  </div>
                </div>
                <span className={`font-sans font-medium text-sm ${t.amount > 0 ? "text-accent" : "text-muted-foreground"}`}>
                  {t.amount > 0 ? "+" : ""}${Math.abs(t.amount)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Wallet;
