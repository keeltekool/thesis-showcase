const recommendations = [
  "Start with data foundations, not tools. Invest in data quality, cleansing, and integration before purchasing analytics software. The accounting system is your primary data source — if it's not solid, nothing built on top will be trustworthy.",
  "Begin with quick wins in descriptive analytics. Automated reporting, self-service dashboards, and a single source of truth deliver the most immediate value. Build organizational confidence before moving to predictive models.",
  "Appoint a finance-side analytics champion. Analytics projects fail when owned entirely by IT. The finance team has the best understanding of which data matters and how it connects to business decisions — they must lead.",
  "Evaluate predictive analytics through specific, high-ROI use cases. Don't build a universal forecasting model. Start with targeted problems: accounts receivable prediction, cash flow forecasting, customer payment probability.",
  "Stay current and experiment. The technology landscape is moving fast — tools that required data scientists two years ago now have natural language interfaces. Companies that adopt early build compounding advantages.",
];

export default function RecommendationsSection() {
  return (
    <section id="recommendations" className="py-32 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full text-secondary fill-current" viewBox="0 0 100 100">
          <path d="M0 100 L100 0 L100 100 Z"></path>
        </svg>
      </div>
      <div className="max-w-screen-xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="headlines-newsreader text-5xl mb-12">Recommendations for <span className="text-secondary italic">Finance Leaders</span></h2>
            <div className="space-y-8">
              {recommendations.map((rec, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 shrink-0 border border-secondary/50 flex items-center justify-center font-black text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-lg body-inter text-white/90">{rec}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square bg-white p-12 rounded-full flex flex-col items-center justify-center text-center max-w-sm mx-auto">
            <span className="text-primary headlines-newsreader text-7xl font-black mb-2">7/10</span>
            <p className="text-primary headlines-newsreader text-2xl font-bold mb-4">Confirmed</p>
            <p className="text-on-surface-variant body-inter text-sm italic">The thesis was remarkably prescient. Two years of explosive AI development validated the core findings.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
