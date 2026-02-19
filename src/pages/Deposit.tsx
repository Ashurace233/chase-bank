import DashboardLayout from "@/components/DashboardLayout";
import { Camera, Building2, Banknote } from "lucide-react";

const depositMethods = [
  { icon: Camera, label: "Mobile check deposit", desc: "Take a photo of your check to deposit it instantly. Funds available within 1 business day." },
  { icon: Building2, label: "Direct deposit", desc: "Set up recurring deposits from your employer or other income sources." },
  { icon: Banknote, label: "Deposit at ATM", desc: "Find a Chase ATM near you to deposit cash or checks." },
];

const Deposit = () => (
  <DashboardLayout>
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-foreground">Deposit</h1>
      <p className="text-muted-foreground text-sm mt-1">Add funds to your Chase Total Checking® (...4262)</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {depositMethods.map((m) => (
        <div key={m.label} className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <m.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-1">{m.label}</h3>
          <p className="text-sm text-muted-foreground">{m.desc}</p>
        </div>
      ))}
    </div>

    <div className="bg-card rounded-xl border border-border p-6 max-w-lg">
      <h3 className="font-semibold text-foreground mb-4">Quick Deposit</h3>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground block mb-1">Deposit to</label>
          <select className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background text-foreground">
            <option>Chase Total Checking® (...4262) — $900,000.00</option>
            <option>Chase Savings℠ (...8891) — $48,250.00</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-foreground block mb-1">Amount</label>
          <input type="text" placeholder="$0.00" className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background text-foreground" />
        </div>
        <button className="w-full bg-primary text-primary-foreground rounded-md py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors">
          Continue
        </button>
      </div>
    </div>
  </DashboardLayout>
);

export default Deposit;
