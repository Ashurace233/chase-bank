import DashboardLayout from "@/components/DashboardLayout";
import { Star, Check, CreditCard } from "lucide-react";

const benefits = [
  "Earn 80,000 bonus points after spending $4,000 in the first 3 months",
  "5X points on travel purchased through Chase Travel℠",
  "3X points on dining at restaurants & eligible delivery services",
  "2X points on all other travel purchases",
  "$50 annual Ultimate Rewards Hotel Credit",
  "No foreign transaction fees",
  "Trip cancellation & interruption insurance",
  "Primary auto rental collision damage waiver",
];

const SpecialOffer = () => (
  <DashboardLayout>
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-foreground">Special Offer</h1>
      <p className="text-muted-foreground text-sm mt-1">You're pre-approved! Limited time offer.</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="bg-primary p-8 text-primary-foreground">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                <CreditCard className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Chase Sapphire Preferred®</h2>
                <p className="text-sm opacity-80">Pre-approved for BADAMYOR</p>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold">80,000</span>
              <span className="text-lg opacity-80">bonus points</span>
            </div>
            <p className="text-sm opacity-70 mt-2">Worth $1,000 toward travel when redeemed through Chase Travel℠</p>
          </div>

          <div className="p-6">
            <h3 className="font-semibold text-foreground mb-4">Card Benefits</h3>
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-3">Card Details</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Annual fee</span>
              <span className="font-medium text-foreground">$95</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">APR</span>
              <span className="font-medium text-foreground">21.49%–28.49%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Credit limit</span>
              <span className="font-medium text-foreground">Up to $50,000</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-primary text-primary-foreground rounded-xl py-3 text-sm font-semibold hover:bg-primary/90 transition-colors">
          Apply now
        </button>
        <p className="text-xs text-muted-foreground text-center">
          This offer expires March 31, 2026. Terms and conditions apply.
        </p>
      </div>
    </div>
  </DashboardLayout>
);

export default SpecialOffer;
