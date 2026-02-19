const PromoBanner = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-primary rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Chase Total Checking®
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-6 max-w-md">
              Enjoy a <span className="font-bold text-primary-foreground">$300 bonus</span> when you open a new account and set up direct deposit within 90 days.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-md font-semibold hover:bg-white/90 transition-colors"
            >
              Open an account
            </a>
          </div>
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 bg-white/10 rounded-2xl flex items-center justify-center">
              <span className="text-6xl md:text-7xl font-extrabold text-primary-foreground">$300</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
