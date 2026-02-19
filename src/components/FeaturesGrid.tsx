import { Lock, Zap, Globe, Headphones } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Security first",
    description: "Your money is protected with industry-leading fraud detection and zero liability protection.",
  },
  {
    icon: Zap,
    title: "Instant transfers",
    description: "Send money to friends and family in seconds with Zelle® built right into our app.",
  },
  {
    icon: Globe,
    title: "Bank anywhere",
    description: "Access your accounts from any device, anywhere in the world, 24/7.",
  },
  {
    icon: Headphones,
    title: "24/7 support",
    description: "Get help whenever you need it from our award-winning customer support team.",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Why millions choose Chase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
