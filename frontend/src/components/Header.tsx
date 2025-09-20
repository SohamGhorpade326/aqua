import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Droplet } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  const location = useLocation();

  const navItems = [
    { name: "Water Tanker Marketplace", path: "/marketplace" },
    { name: "Consumption Tracking", path: "/consumption" },
    { name: "Leak Detection", path: "/leak-detection" },
    { name: "Conservation Hub", path: "/conservation" },
    { name: "Society Dashboard", path: "/society" },
  ];

  return (
    <header className="bg-primary text-primary-foreground px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Droplet className="h-6 w-6" />
          </div>
          
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-lg transition-colors relative ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "hover:bg-white/10 text-white/80"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for water tankers by location"
              className="pl-10 w-80 bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="border-white/20 text-black hover:bg-white/10">
              Login
            </Button>
            <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}