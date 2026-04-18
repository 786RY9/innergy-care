import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoUrl from "../assets/logo2.jpeg";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Philosophy", path: "/philosophy" },
    { name: "Therapies & Services", path: "/therapies" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-white/20 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.05)]"
            : "bg-transparent py-8"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="text-[24px] font-serif font-bold tracking-[3px] text-navy-900 uppercase flex items-center gap-4">
            <img src={logoUrl} alt="Innergy Care" className="h-14 w-auto rounded-md" />
            Innergy Care
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-[13px] uppercase tracking-[1px] font-medium transition-colors hover:text-sage-500",
                  location.pathname === link.path ? "text-sage-500" : "text-sage-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              className="px-6 py-3 bg-navy-900 text-white text-[12px] font-medium uppercase tracking-[1px] rounded-sm hover:bg-navy-800 transition-all hover:shadow-lg hover:shadow-navy-900/20"
            >
              Book Consultation
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-navy-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg py-4 px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-base font-medium transition-colors",
                  location.pathname === link.path ? "text-sage-600" : "text-navy-800"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              className="mt-2 px-5 py-3 bg-navy-900 text-white text-center text-sm font-medium rounded-sm"
            >
              Book Consultation
            </Link>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-navy-900 text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-[24px] font-serif font-bold tracking-[3px] text-white uppercase mb-6 flex items-center gap-4">
              <img src={logoUrl} alt="Innergy Care" className="h-14 w-auto bg-white rounded-md p-1" />
              Innergy Care
            </Link>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed font-light">
              Advanced care meets how you actually want to feel. Reclaim your strength and optimize your health through a personalized, science-driven approach.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-sage-400 mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-sage-400 mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li>2335 Tamiami Trl N</li>
              <li>Suite 208</li>
              <li>Naples, FL 34103</li>
              <li className="mt-2"><a href="mailto:innergyhealth1@gmail.com" className="hover:text-white transition-colors">innergyhealth1@gmail.com</a></li>
              <li><a href="tel:+17866181808" className="hover:text-white transition-colors">(786) 618-1808</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Innergy Care. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
