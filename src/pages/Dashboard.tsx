import DashboardLayout from "@/components/DashboardLayout";
import { CreditCard, ArrowUpRight, ArrowDownLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";

const transactions = [
  { id: 1, name: "Direct Deposit - Payroll", date: "Feb 14, 2026", amount: "+$12,450.00", type: "credit" },
  { id: 2, name: "Wire Transfer Received", date: "Feb 12, 2026", amount: "+$45,000.00", type: "credit" },
  { id: 3, name: "Amazon.com", date: "Feb 11, 2026", amount: "-$234.56", type: "debit" },
  { id: 4, name: "Wire Transfer Received", date: "Feb 10, 2026", amount: "+$120,000.00", type: "credit" },
  { id: 5, name: "Chase Credit Card Payment", date: "Feb 08, 2026", amount: "-$3,200.00", type: "debit" },
  { id: 6, name: "Direct Deposit - Payroll", date: "Feb 01, 2026", amount: "+$12,450.00", type: "credit" },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Good afternoon, BADAMYOR</h1>
        <p className="text-muted-foreground text-sm mt-1">Last sign-in: Feb 18, 2026 at 3:42 PM ET</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Balance card */}
          <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
            <div className="bg-primary p-6 text-primary-foreground">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">CHASE TOTAL CHECKING®</p>
                    <p className="text-xs opacity-60">...4262</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm opacity-70 mb-1">Available balance</p>
                <p className="text-4xl md:text-5xl font-bold tracking-tight">$900,000.00</p>
              </div>
            </div>

            {/* Quick actions */}
            <div className="p-4 flex items-center gap-3 border-b border-border">
              <Link to="/dashboard/pay-transfer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                <Send className="w-4 h-4" /> Send money
              </Link>
              <Link to="/dashboard/deposit" className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors">
                <ArrowDownLeft className="w-4 h-4" /> Deposit
              </Link>
              <Link to="/dashboard/transfer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors">
                <ArrowUpRight className="w-4 h-4" /> Transfer
              </Link>
            </div>

            {/* Transactions */}
            <div className="p-6">
              <h3 className="text-sm font-semibold text-foreground mb-4">Recent transactions</h3>
              <div className="space-y-0">
                {transactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${tx.type === "credit" ? "bg-green-100 text-green-700" : "bg-secondary text-muted-foreground"}`}>
                        {tx.type === "credit" ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{tx.name}</p>
                        <p className="text-xs text-muted-foreground">{tx.date}</p>
                      </div>
                    </div>
                    <span className={`text-sm font-semibold ${tx.type === "credit" ? "text-green-700" : "text-foreground"}`}>
                      {tx.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-card rounded-xl shadow-sm border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-foreground">Chase Savings℠</h3>
              <span className="text-xs text-muted-foreground">...8891</span>
            </div>
            <p className="text-2xl font-bold text-foreground">$48,250.00</p>
            <p className="text-xs text-muted-foreground mt-1">4.75% APY</p>
          </div>

          <div className="bg-card rounded-xl shadow-sm border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-foreground">Chase Sapphire Reserve®</h3>
              <span className="text-xs text-muted-foreground">...5521</span>
            </div>
            <p className="text-sm text-muted-foreground mb-1">Current balance</p>
            <p className="text-2xl font-bold text-foreground">$4,312.89</p>
            <div className="mt-3 pt-3 border-t border-border">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Available credit</span>
                <span className="text-foreground font-medium">$45,687.11</span>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span className="text-muted-foreground">Rewards points</span>
                <span className="text-foreground font-medium">124,500 pts</span>
              </div>
            </div>
          </div>

          <Link to="/dashboard/special-offer" className="block bg-primary rounded-xl p-6 text-primary-foreground hover:opacity-95 transition-opacity">
            <h3 className="text-sm font-semibold mb-2">Special Offer</h3>
            <p className="text-xs opacity-80 mb-3">Pre-approved for Chase Sapphire Preferred® with 80,000 bonus points.</p>
            <span className="block w-full text-center bg-primary-foreground text-primary rounded-md py-2 text-sm font-semibold hover:bg-white/90 transition-colors">
              Learn more
            </span>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
