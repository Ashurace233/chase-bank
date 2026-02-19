import DashboardLayout from "@/components/DashboardLayout";
import { Target, PiggyBank, TrendingUp, Calendar } from "lucide-react";

const goals = [
  { icon: Target, label: "Emergency Fund", current: 28500, target: 30000, color: "bg-green-500" },
  { icon: PiggyBank, label: "Vacation Fund", current: 4200, target: 8000, color: "bg-primary" },
  { icon: TrendingUp, label: "Home Down Payment", current: 45000, target: 100000, color: "bg-amber-500" },
];

const budgets = [
  { label: "Dining & Restaurants", spent: 420, limit: 600 },
  { label: "Shopping", spent: 890, limit: 1000 },
  { label: "Transportation", spent: 150, limit: 300 },
  { label: "Entertainment", spent: 75, limit: 200 },
];

const PlanTrack = () => (
  <DashboardLayout>
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-foreground">Plan & Track</h1>
      <p className="text-muted-foreground text-sm mt-1">Track your spending and savings goals.</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="font-semibold text-foreground mb-4">Savings Goals</h3>
        <div className="space-y-5">
          {goals.map((g) => {
            const pct = Math.round((g.current / g.target) * 100);
            return (
              <div key={g.label}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <g.icon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">{g.label}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">${g.current.toLocaleString()} / ${g.target.toLocaleString()}</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className={`${g.color} h-2 rounded-full transition-all`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="font-semibold text-foreground mb-4">Monthly Budget — February 2026</h3>
        <div className="space-y-5">
          {budgets.map((b) => {
            const pct = Math.round((b.spent / b.limit) * 100);
            return (
              <div key={b.label}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{b.label}</span>
                  <span className="text-sm text-muted-foreground">${b.spent} / ${b.limit}</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className={`h-2 rounded-full transition-all ${pct > 80 ? "bg-red-500" : "bg-primary"}`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default PlanTrack;
