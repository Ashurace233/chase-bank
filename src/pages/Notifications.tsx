import DashboardLayout from "@/components/DashboardLayout";
import { Bell, ShieldCheck, CreditCard, ArrowDownLeft, AlertTriangle } from "lucide-react";

const notifications = [
  { icon: ArrowDownLeft, label: "Direct Deposit Received", desc: "Your payroll deposit of $12,450.00 has been credited to your checking account.", time: "Today, 9:15 AM", read: false },
  { icon: ShieldCheck, label: "Security Alert", desc: "A new device was used to sign in to your account. If this wasn't you, contact us immediately.", time: "Yesterday, 3:42 PM", read: false },
  { icon: CreditCard, label: "Payment Due Reminder", desc: "Your Chase Sapphire Reserve® payment of $4,312.89 is due on March 1, 2026.", time: "Feb 17, 2026", read: true },
  { icon: Bell, label: "Account Statement Ready", desc: "Your January 2026 checking account statement is now available.", time: "Feb 15, 2026", read: true },
  { icon: AlertTriangle, label: "Low Balance Alert", desc: "Your savings account balance fell below your $5,000 threshold. Current balance: $4,820.00.", time: "Feb 12, 2026", read: true },
  { icon: ArrowDownLeft, label: "Wire Transfer Received", desc: "A wire transfer of $45,000.00 has been deposited to your checking account.", time: "Feb 12, 2026", read: true },
];

const Notifications = () => (
  <DashboardLayout>
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
      <p className="text-muted-foreground text-sm mt-1">Stay updated on your account activity.</p>
    </div>

    <div className="bg-card rounded-xl border border-border overflow-hidden max-w-2xl">
      <div className="divide-y divide-border">
        {notifications.map((n, i) => (
          <div key={i} className={`flex gap-4 p-4 ${!n.read ? "bg-primary/5" : ""}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${!n.read ? "bg-primary/10" : "bg-secondary"}`}>
              <n.icon className={`w-5 h-5 ${!n.read ? "text-primary" : "text-muted-foreground"}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className={`text-sm font-medium text-foreground ${!n.read ? "font-semibold" : ""}`}>{n.label}</p>
                {!n.read && <span className="w-2 h-2 rounded-full bg-primary shrink-0" />}
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">{n.desc}</p>
              <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export default Notifications;
