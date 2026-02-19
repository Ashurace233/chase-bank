import DashboardLayout from "@/components/DashboardLayout";
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from "lucide-react";

const holdings = [
  { name: "S&P 500 Index Fund", ticker: "VOO", shares: "125.42", price: "$523.18", change: "+1.24%", value: "$65,617.40", up: true },
  { name: "Total Bond Market", ticker: "BND", shares: "200.00", price: "$72.45", change: "-0.18%", value: "$14,490.00", up: false },
  { name: "Apple Inc.", ticker: "AAPL", shares: "50.00", price: "$242.35", change: "+2.15%", value: "$12,117.50", up: true },
  { name: "Microsoft Corp.", ticker: "MSFT", shares: "30.00", price: "$428.90", change: "+0.87%", value: "$12,867.00", up: true },
];

const Invest = () => (
  <DashboardLayout>
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-foreground">Invest</h1>
      <p className="text-muted-foreground text-sm mt-1">J.P. Morgan Self-Directed Investing</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-card rounded-xl border border-border p-6">
        <p className="text-sm text-muted-foreground mb-1">Total portfolio value</p>
        <p className="text-3xl font-bold text-foreground">$105,091.90</p>
        <div className="flex items-center gap-1 mt-2 text-green-600 text-sm font-medium">
          <TrendingUp className="w-4 h-4" /> +$2,340.50 (+2.28%) today
        </div>
      </div>
      <div className="bg-card rounded-xl border border-border p-6">
        <p className="text-sm text-muted-foreground mb-1">Cash available</p>
        <p className="text-3xl font-bold text-foreground">$8,250.00</p>
        <p className="text-xs text-muted-foreground mt-2">Ready to invest</p>
      </div>
      <div className="bg-card rounded-xl border border-border p-6">
        <p className="text-sm text-muted-foreground mb-1">Total return</p>
        <p className="text-3xl font-bold text-green-600">+$15,091.90</p>
        <p className="text-xs text-muted-foreground mt-2">Since inception</p>
      </div>
    </div>

    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="font-semibold text-foreground">Holdings</h3>
      </div>
      <div className="divide-y divide-border">
        {holdings.map((h) => (
          <div key={h.ticker} className="flex items-center justify-between px-6 py-4">
            <div>
              <p className="font-medium text-foreground">{h.name}</p>
              <p className="text-xs text-muted-foreground">{h.ticker} · {h.shares} shares</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-foreground">{h.value}</p>
              <p className={`text-xs font-medium ${h.up ? "text-green-600" : "text-red-500"}`}>
                {h.price} ({h.change})
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export default Invest;
