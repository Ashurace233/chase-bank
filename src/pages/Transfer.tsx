import DashboardLayout from "@/components/DashboardLayout";
import { ArrowRightLeft } from "lucide-react";

const Transfer = () => (
  <DashboardLayout>
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-foreground">Transfer Money</h1>
      <p className="text-muted-foreground text-sm mt-1">Move money between your accounts.</p>
    </div>

    <div className="bg-card rounded-xl border border-border p-6 max-w-lg">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground block mb-1">From</label>
          <select className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background text-foreground">
            <option>Chase Total Checking® (...4262) — $900,000.00</option>
            <option>Chase Savings℠ (...8891) — $48,250.00</option>
          </select>
        </div>

        <div className="flex justify-center">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <ArrowRightLeft className="w-5 h-5 text-primary" />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground block mb-1">To</label>
          <select className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background text-foreground">
            <option>Chase Savings℠ (...8891) — $48,250.00</option>
            <option>Chase Total Checking® (...4262) — $900,000.00</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground block mb-1">Amount</label>
          <input type="text" placeholder="$0.00" className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background text-foreground" />
        </div>

        <div>
          <label className="text-sm font-medium text-foreground block mb-1">Date</label>
          <input type="date" className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background text-foreground" />
        </div>

        <div>
          <label className="text-sm font-medium text-foreground block mb-1">Memo (optional)</label>
          <input type="text" placeholder="Add a note" className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background text-foreground" />
        </div>

        <button className="w-full bg-primary text-primary-foreground rounded-md py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors">
          Submit transfer
        </button>
      </div>
    </div>
  </DashboardLayout>
);

export default Transfer;
