import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserRole, type UserRole } from "@/contexts/UserRoleContext";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const [isSignup, setIsSignup] = useState(searchParams.get("mode") === "signup");
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<"auth" | "role">("auth");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { setIsAuthenticated, setUserRole, setActiveMode, setUserName } = useUserRole();
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Both login and signup go to role selection
    setStep("role");
  };

  const handleRoleSelect = (role: UserRole) => {
    setUserRole(role);
    setActiveMode(role === "lender" ? "lender" : "renter");
    setIsAuthenticated(true);
    setUserName(name || email.split("@")[0]);
    navigate(role === "lender" ? "/dashboard" : "/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {step === "auth" ? (
          <div className="glass-card rounded-xl p-8 lg:p-10">
            <div className="text-center mb-8">
              <h1 className="font-serif text-3xl mb-2">{isSignup ? "Join Jadori" : "Welcome Back"}</h1>
              <p className="text-muted-foreground font-sans text-sm">
                {isSignup ? "Create your luxury account" : "Sign in to your account"}
              </p>
            </div>

            <form onSubmit={handleAuth} className="space-y-5">
              {isSignup && (
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 py-6 bg-secondary/50 border-border/50 font-sans"
                    required
                  />
                </div>
              )}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 py-6 bg-secondary/50 border-border/50 font-sans"
                  required
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 py-6 bg-secondary/50 border-border/50 font-sans"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <Button type="submit" className="w-full py-6 bg-accent text-accent-foreground hover:bg-gold-dark uppercase tracking-widest text-sm font-sans">
                {isSignup ? "Continue" : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsSignup(!isSignup)}
                className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
              </button>
            </div>
          </div>
        ) : (
          <div className="glass-card rounded-xl p-8 lg:p-10">
            <div className="text-center mb-8">
              <h1 className="font-serif text-3xl mb-2">How will you use Jadori?</h1>
              <p className="text-muted-foreground font-sans text-sm">You can always change this later</p>
            </div>
            <div className="space-y-4">
              {([
                { role: "renter" as UserRole, title: "Renter", desc: "Browse and rent luxury bags for special occasions" },
                { role: "lender" as UserRole, title: "Lender", desc: "List your designer bags and earn while they sit" },
                { role: "both" as UserRole, title: "Both", desc: "Rent bags and list your own collection" },
              ]).map((option) => (
                <button
                  key={option.role}
                  onClick={() => handleRoleSelect(option.role)}
                  className="w-full p-5 text-left glass-card rounded-lg hover-lift border border-border/50 hover:border-accent/50 transition-all"
                >
                  <h3 className="font-serif text-lg mb-1">{option.title}</h3>
                  <p className="text-sm font-sans text-muted-foreground">{option.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Auth;
