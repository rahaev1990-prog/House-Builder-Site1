import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Почему мы", href: "#why-us" },
  { name: "Этапы", href: "#stages" },
  { name: "Проекты", href: "#projects" },
  { name: "Услуги", href: "#services" },
  { name: "Комплектации", href: "#configurations" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-border/50 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                <Home className="w-6 h-6" />
              </div>
              <span className={cn(
                "text-2xl font-display font-bold tracking-tight transition-colors",
                isScrolled ? "text-foreground" : "text-foreground lg:text-white"
              )}>
                Каркас<span className="text-primary">Про</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium hover:text-primary transition-colors",
                    isScrolled ? "text-foreground/80" : "text-foreground/80 lg:text-white/90 lg:hover:text-white"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <a 
                href="tel:+78005553535" 
                className={cn(
                  "flex items-center gap-2 font-semibold hover:text-primary transition-colors",
                  isScrolled ? "text-foreground" : "text-foreground lg:text-white"
                )}
              >
                <Phone className="w-4 h-4" />
                +7 (800) 555-35-35
              </a>
              <Button onClick={scrollToContact} className={cn(
                !isScrolled && "lg:bg-white lg:text-primary lg:hover:bg-white/90"
              )}>
                Получить расчёт
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={cn(
                "lg:hidden p-2 rounded-lg",
                isScrolled ? "text-foreground" : "text-foreground"
              )}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 p-6 flex flex-col shadow-2xl lg:hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-2xl font-display font-bold text-foreground">
                  Каркас<span className="text-primary">Про</span>
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 mb-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary py-2 border-b border-border/50"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4">
                <a 
                  href="tel:+78005553535" 
                  className="flex items-center justify-center gap-2 font-semibold text-lg py-3 bg-muted/30 rounded-xl"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  +7 (800) 555-35-35
                </a>
                <Button size="lg" className="w-full" onClick={scrollToContact}>
                  Получить расчёт
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
