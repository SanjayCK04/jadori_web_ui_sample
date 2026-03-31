import { motion } from "framer-motion";
import { Users, Package, DollarSign, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 12000 }, { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 24000 }, { month: "Apr", revenue: 19000 },
  { month: "May", revenue: 31000 }, { month: "Jun", revenue: 27000 },
];

const usersData = [
  { month: "Jan", users: 120 }, { month: "Feb", users: 180 },
  { month: "Mar", users: 310 }, { month: "Apr", users: 420 },
  { month: "May", users: 580 }, { month: "Jun", users: 720 },
];

const recentUsers = [
  { name: "Priya Sharma", email: "priya@email.com", role: "Both", joined: "Mar 28" },
  { name: "Aisha Mohammed", email: "aisha@email.com", role: "Renter", joined: "Mar 26" },
  { name: "Natasha Kumar", email: "natasha@email.com", role: "Lender", joined: "Mar 24" },
  { name: "Sophia Chen", email: "sophia@email.com", role: "Renter", joined: "Mar 22" },
];

const Admin = () => (
  <div className="min-h-screen py-12 lg:py-20">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-serif text-3xl md:text-4xl mb-10">Admin Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Active Users", value: "720", icon: Users, change: "+24%" },
            { label: "Total Listings", value: "156", icon: Package, change: "+12%" },
            { label: "Revenue (MTD)", value: "$27,000", icon: DollarSign, change: "+8%" },
            { label: "Growth Rate", value: "18%", icon: TrendingUp, change: "+3%" },
          ].map((s, i) => (
            <motion.div key={s.label} className="glass-card rounded-xl p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <div className="flex items-center justify-between mb-3">
                <s.icon className="w-5 h-5 text-accent" />
                <span className="text-xs font-sans text-accent">{s.change}</span>
              </div>
              <p className="font-serif text-2xl mb-1">{s.value}</p>
              <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="glass-card rounded-xl p-6">
            <h2 className="font-serif text-xl mb-6">Revenue</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(40 15% 90%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fontFamily: "Inter" }} />
                <YAxis tick={{ fontSize: 12, fontFamily: "Inter" }} />
                <Tooltip contentStyle={{ background: "hsl(40 20% 97%)", border: "1px solid hsl(40 15% 90%)", borderRadius: "8px" }} />
                <Bar dataKey="revenue" fill="hsl(38 60% 55%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="glass-card rounded-xl p-6">
            <h2 className="font-serif text-xl mb-6">User Growth</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={usersData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(40 15% 90%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fontFamily: "Inter" }} />
                <YAxis tick={{ fontSize: 12, fontFamily: "Inter" }} />
                <Tooltip contentStyle={{ background: "hsl(40 20% 97%)", border: "1px solid hsl(40 15% 90%)", borderRadius: "8px" }} />
                <Line type="monotone" dataKey="users" stroke="hsl(38 60% 55%)" strokeWidth={2} dot={{ fill: "hsl(38 60% 55%)" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Users Table */}
        <div className="glass-card rounded-xl p-6 lg:p-8">
          <h2 className="font-serif text-xl mb-6">Recent Users</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-sans uppercase tracking-widest text-muted-foreground py-3">Name</th>
                  <th className="text-left text-xs font-sans uppercase tracking-widest text-muted-foreground py-3">Email</th>
                  <th className="text-left text-xs font-sans uppercase tracking-widest text-muted-foreground py-3">Role</th>
                  <th className="text-left text-xs font-sans uppercase tracking-widest text-muted-foreground py-3">Joined</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((u) => (
                  <tr key={u.email} className="border-b border-border/30">
                    <td className="py-4 font-sans text-sm">{u.name}</td>
                    <td className="py-4 font-sans text-sm text-muted-foreground">{u.email}</td>
                    <td className="py-4"><span className="text-xs font-sans px-3 py-1 rounded-full bg-champagne text-gold-dark">{u.role}</span></td>
                    <td className="py-4 font-sans text-sm text-muted-foreground">{u.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Admin;
