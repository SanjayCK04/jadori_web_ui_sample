import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground mt-auto">
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-serif text-2xl gold-text mb-4">JADORI</h3>
          <p className="text-sm opacity-70 leading-relaxed font-sans">
            Rent luxury handbags from the world's most prestigious brands. Own the moment.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-sm uppercase tracking-widest mb-4 opacity-80">Explore</h4>
          <div className="flex flex-col gap-2 text-sm font-sans opacity-60">
            <Link to="/browse" className="hover:opacity-100 transition-opacity">Browse Bags</Link>
            <Link to="/auth" className="hover:opacity-100 transition-opacity">List Your Bag</Link>
            <Link to="/" className="hover:opacity-100 transition-opacity">How It Works</Link>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-sm uppercase tracking-widest mb-4 opacity-80">Company</h4>
          <div className="flex flex-col gap-2 text-sm font-sans opacity-60">
            <Link to="/support" className="hover:opacity-100 transition-opacity">Support</Link>
            <span className="cursor-default">Privacy Policy</span>
            <span className="cursor-default">Terms of Service</span>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-sm uppercase tracking-widest mb-4 opacity-80">Connect</h4>
          <div className="flex flex-col gap-2 text-sm font-sans opacity-60">
            <span>hello@jadori.com</span>
            <span>Instagram</span>
            <span>Pinterest</span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs font-sans opacity-40">
        © 2026 Jadori. All rights reserved. Luxury redefined.
      </div>
    </div>
  </footer>
);

export default Footer;
