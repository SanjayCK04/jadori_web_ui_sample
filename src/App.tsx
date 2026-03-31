import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { UserRoleProvider } from "@/contexts/UserRoleContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Browse from "./pages/Browse";
import BagDetail from "./pages/BagDetail";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import AddListing from "./pages/AddListing";
import Wallet from "./pages/Wallet";
import Bookings from "./pages/Bookings";
import Wishlist from "./pages/Wishlist";
import Listings from "./pages/Listings";
import Meetup from "./pages/Meetup";
import Reviews from "./pages/Reviews";
import Admin from "./pages/Admin";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserRoleProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/bag/:id" element={<BagDetail />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-listing" element={<AddListing />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/listings" element={<Listings />} />
                <Route path="/meetup" element={<Meetup />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/support" element={<Support />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </UserRoleProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
