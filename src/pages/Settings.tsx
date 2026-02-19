import DashboardLayout from "@/components/DashboardLayout";
import { User, Lock, Bell, Smartphone, Shield, CreditCard } from "lucide-react";

const settingSections = [
  { icon: User, label: "Personal Information", desc: "Update your name, email, phone number, and mailing address.", items: [
    { label: "Full name", value: "BADAMYOR" },
    { label: "Email", value: "badamyor@email.com" },
    { label: "Phone", value: "(***) ***-4262" },
    { label: "Address", value: "*** **** Street, New York, NY" },
  ]},
  { icon: Lock, label: "Security", desc: "Manage your password, security questions, and two-factor authentication.", items: [
    { label: "Password", value: "Last changed 30 days ago" },
    { label: "Two-factor auth", value: "Enabled (SMS)" },
    { label: "Security questions", value: "3 questions set" },
  ]},
  { icon: Bell, label: "Alert Preferences", desc: "Choose how and when you receive notifications.", items: [
    { label: "Email alerts", value: "Enabled" },
    { label: "Push notifications", value: "Enabled" },
    { label: "SMS alerts", value: "Enabled" },
  ]},
];

const Settings = () => (
  <DashboardLayout>
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-foreground">Settings</h1>
      <p className="text-muted-foreground text-sm mt-1">Manage your account preferences and security.</p>
    </div>

    <div className="space-y-6 max-w-2xl">
      {settingSections.map((section) => (
        <div key={section.label} className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <section.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{section.label}</h3>
                <p className="text-xs text-muted-foreground">{section.desc}</p>
              </div>
            </div>
          </div>
          <div className="divide-y divide-border">
            {section.items.map((item) => (
              <div key={item.label} className="flex items-center justify-between px-6 py-3">
                <span className="text-sm text-muted-foreground">{item.label}</span>
                <span className="text-sm font-medium text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </DashboardLayout>
);

export default Settings;
