import { CreditCard, PiggyBank, Landmark, TrendingUp, ShieldCheck, Smartphone } from "lucide-react";

const products = [
  {
    icon: CreditCard,
    title: "Credit Cards",
    description: "Earn unlimited cashback on every purchase with no annual fee.",
    cta: "Compare cards",
    highlight: "1.5% cashback",
  },
  {
    icon: Landmark,
    title: "Checking",
    description: "No monthly service fee checking with access to 15,000+ ATMs.",
    cta: "Open checking",
    highlight: "$0 monthly fee",
  },
  {
    icon: PiggyBank,
    title: "Savings",
    description: "Grow your money with a competitive APY and no minimums.",
    cta: "Start saving",
    highlight: "4.75% APY",
  },
  {
    icon: TrendingUp,
    title: "Investing",
    description: "Build wealth with self-directed investing or expert guidance.",
    cta: "Start investing",
    highlight: "$0 trades",
  },
  {
    icon: ShieldCheck,
    title: "Home Loans",
    description: "Competitive rates and a simple online application process.",
    cta: "Get started",
    highlight: "Low rates",
  },
  {
    icon: Smartphone,
    title: "Mobile Banking",
    description: "Bank from anywhere with our top-rated mobile app.",
    cta: "Learn more",
    highlight: "#1 rated app",
  },
];

const ProductCards = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Products & Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need to manage, grow, and protect your money.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <product.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                  {product.highlight}
                </span>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                {product.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {product.description}
              </p>
              <a
                href="#"
                className="text-accent font-semibold text-sm group-hover:underline"
              >
                {product.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
