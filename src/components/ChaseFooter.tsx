const footerLinks = [
  {
    title: "Products",
    links: ["Credit Cards", "Checking", "Savings", "CDs", "Mortgage", "Auto Loans"],
  },
  {
    title: "Resources",
    links: ["Financial Education", "Privacy & Security", "Accessibility", "Site Map"],
  },
  {
    title: "About Chase",
    links: ["About Us", "Careers", "Newsroom", "Investor Relations"],
  },
  {
    title: "Contact",
    links: ["Customer Service", "Find a Branch", "Find an ATM", "Schedule a Meeting"],
  },
];

const ChaseFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-primary-foreground/60">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-extrabold text-xl">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <path d="M8 8h7v7H8V8zm9 0h7v7h-7V8zm-9 9h7v7H8v-7zm9 0h7v7h-7v-7z" fill="currentColor" />
            </svg>
            CHASE
          </div>
          <p className="text-xs text-primary-foreground/50 text-center md:text-right max-w-md">
            JPMorgan Chase Bank, N.A. Member FDIC. Equal Housing Lender. © 2026 JPMorgan Chase & Co.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ChaseFooter;
