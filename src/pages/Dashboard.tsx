import { motion } from "framer-motion";
import { DollarSign, Package, TrendingUp, Users, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useUserRole } from "@/contexts/UserRoleContext";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { month: "Jan", earnings: 1200 },
  { month: "Feb", earnings: 1800 },
  { month: "Mar", earnings: 2400 },
  { month: "Apr", earnings: 1900 },
  { month: "May", earnings: 3100 },
  { month: "Jun", earnings: 2700 },
];

const Dashboard = () => {
  const { userName } = useUserRole();
  const stats = [
    { label: "Total Earnings", value: "$13,100", icon: DollarSign, change: "+12%" },
    { label: "Active Listings", value: "5", icon: Package, change: "+2" },
    { label: "Total Bookings", value: "28", icon: TrendingUp, change: "+5" },
    { label: "Repeat Clients", value: "8", icon: Users, change: "+3" },
  ];

  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl">Welcome, {userName || "Lender"}</h1>
              <p className="text-muted-foreground font-sans text-sm mt-1">Here's your earnings overview</p>
            </div>
            <Link to="/add-listing">
              <Button className="bg-accent text-accent-foreground hover:bg-gold-dark font-sans uppercase tracking-wide text-xs gap-2">
                <Plus className="w-4 h-4" /> Add Listing
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="glass-card rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <s.icon className="w-5 h-5 text-accent" />
                  <span className="text-xs font-sans text-accent">{s.change}</span>
                </div>
                <p className="font-serif text-2xl mb-1">{s.value}</p>
                <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Chart */}
          <div className="glass-card rounded-xl p-6 lg:p-8 mb-12">
            <h2 className="font-serif text-xl mb-6">Earnings Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(40 15% 90%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fontFamily: "Inter" }} />
                <YAxis tick={{ fontSize: 12, fontFamily: "Inter" }} />
                <Tooltip
                  contentStyle={{ background: "hsl(40 20% 97%)", border: "1px solid hsl(40 15% 90%)", borderRadius: "8px", fontFamily: "Inter" }}
                />
                <Bar dataKey="earnings" fill="hsl(38 60% 55%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Bookings */}
          <div className="glass-card rounded-xl p-6 lg:p-8">
            <h2 className="font-serif text-xl mb-6">Recent Booking Requests</h2>
            <div className="space-y-4">
              {[
                { renter: "Priya S.", bag: "Hermès Birkin 30", dates: "Apr 5 – Apr 10", status: "Pending" },
                { renter: "Aisha M.", bag: "Chanel Classic Flap", dates: "Apr 12 – Apr 15", status: "Confirmed" },
                { renter: "Natasha K.", bag: "Dior Lady Dior", dates: "Apr 20 – Apr 25", status: "Completed" },
              ].map((b) => (
                <div key={b.renter + b.bag} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                  <div>
                    <p className="font-serif text-sm font-medium">{b.bag}</p>
                    <p className="text-xs font-sans text-muted-foreground">{b.renter} · {b.dates}</p>
                  </div>
                  <span className={`text-xs font-sans px-3 py-1 rounded-full ${
                    b.status === "Pending" ? "bg-champagne text-gold-dark" :
                    b.status === "Confirmed" ? "bg-accent/20 text-accent" :
                    "bg-secondary text-muted-foreground"
                  }`}>
                    {b.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
