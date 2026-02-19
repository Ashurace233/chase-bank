import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-accent overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(213_90%_55%/0.3),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-2xl">
          <p className="text-accent-foreground/80 text-sm font-semibold uppercase tracking-widest mb-4">
            Welcome to Chase
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
            Banking that works
            <br />
            <span className="text-white/80">as hard as you do.</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl mb-8 max-w-lg">
            Open an account online in minutes. Get cashback rewards, no monthly fees, and 24/7 customer support.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-md font-semibold hover:bg-white/90 transition-colors"
            >
              Open an account
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              Explore products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
