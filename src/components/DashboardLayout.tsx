import { Bell, Settings, LogOut, CreditCard } from "lucide-react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Accounts", href: "/dashboard" },
  { label: "Pay & Transfer", href: "/dashboard/pay-transfer" },
  { label: "Invest", href: "/dashboard/invest" },
  { label: "Plan & Track", href: "/dashboard/plan-track" },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-secondary">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">
          <div className="flex items-center gap-6">
            <Link to="/dashboard" className="flex items-center gap-2">
              <img src="/chase-logo.png" alt="Chase" className="h-8" />
            </Link>
            <nav className="hidden md:flex items-center gap-1 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    location.pathname === link.href
                      ? "bg-white/10 font-medium"
                      : "hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/dashboard/notifications" className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Bell className="w-5 h-5" />
            </Link>
            <Link to="/dashboard/settings" className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Settings className="w-5 h-5" />
            </Link>
            <button
              onClick={() => navigate("/sign-in")}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              title="Sign out"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;
