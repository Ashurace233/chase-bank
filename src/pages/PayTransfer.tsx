import DashboardLayout from "@/components/DashboardLayout";
import { Send, ArrowUpRight, CreditCard, Building2, Users, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const payOptions = [
  { icon: Send, label: "Send money with Zelle®", desc: "Send and receive money with people you know and trust.", href: "#" },
  { icon: CreditCard, label: "Pay bills", desc: "Pay your bills online quickly and securely.", href: "#" },
  { icon: ArrowUpRight, label: "Transfer money", desc: "Move money between your Chase accounts or external accounts.", href: "/dashboard/transfer" },
  { icon: Building2, label: "Wire transfer", desc: "Send a domestic or international wire transfer.", href: "#" },
  { icon: Users, label: "Pay a person", desc: "Send money to friends and family using Chase QuickPay.", href: "#" },
  { icon: Smartphone, label: "Set up autopay", desc: "Schedule automatic recurring payments.", href: "#" },
];

const PayTransfer = () => (
  <DashboardLayout>
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-foreground">Pay & Transfer</h1>
      <p className="text-muted-foreground text-sm mt-1">Send money, pay bills, and transfer funds.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {payOptions.map((opt) => (
        <Link
          key={opt.label}
          to={opt.href}
          className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow group"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <opt.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-1">{opt.label}</h3>
          <p className="text-sm text-muted-foreground">{opt.desc}</p>
        </Link>
      ))}
    </div>
  </DashboardLayout>
);

export default PayTransfer;
