const comparisons = [
  {
    finding: "Most Estonian companies are stuck at descriptive analytics. Predictive/prescriptive analytics is practically non-existent in FP&A.",
    reality: "Still true. 53% of FP&A teams use no AI in any process. Only 10% use AI for forecasting. Most \"AI adoption\" means ChatGPT for text tasks, not ML models.",
    verdict: "Confirmed",
    source: "FP&A Trends Research Paper 2025",
    topic: "Analytics Maturity",
  },
  {
    finding: "BI platforms like Power BI and Tableau are beginning to add ML/AI features natively. This will accelerate.",
    reality: "Every major vendor shipped AI. Copilot in Power BI and Excel (Agent Mode, Jan 2026). Tableau Agent. SAP Joule (2,400+ skills). Oracle finance agents at no extra cost.",
    verdict: "Confirmed",
    source: "Power BI May 2025; SAP Business AI Q4 2025; Oracle AI Financials",
    topic: "AI in Standard Tools",
  },
  {
    finding: "Natural language interfaces will replace SQL queries in FP&A tools.",
    reality: "Happened faster than predicted. Microsoft Copilot reached 15M paid seats and 33M active users. Average user saves 108 hours per year.",
    verdict: "Confirmed",
    source: "Forrester TEI Study; Microsoft Copilot Statistics 2026",
    topic: "NLP Chatbots",
  },
  {
    finding: "Self-service BI will become the standard. Business users will do their own analytics.",
    reality: "Tools are ready, but adoption remains stubbornly low. Only 25% of employees actively use BI tools — barely changed in seven years.",
    verdict: "Partial",
    source: "BARC BI & Analytics Survey 26",
    topic: "Self-Service Analytics",
  },
  {
    finding: "Too many separate tools. The market will consolidate toward integrated platforms.",
    reality: "Major consolidation driven by PE. OneStream acquired by Hg for $6.4B (2026). Anaplan taken private for >$10B. Every vendor building unified platforms.",
    verdict: "Confirmed",
    source: "OneStream/Hg Press Release, April 2026",
    topic: "Tool Consolidation",
  },
  {
    finding: "Data fragmentation and quality issues are the biggest barrier to analytics adoption.",
    reality: "BARC's 2026 Trend Monitor: \"Data Quality Beats AI Hype\" — data quality management reclaimed #1 position. 64% cite it as their top challenge.",
    verdict: "Confirmed",
    source: "BARC Trend Monitor 2026; Precisely Data Integrity 2026",
    topic: "Data Quality",
  },
  {
    finding: "Lack of analytical skills is a critical barrier. Companies need data literacy at all levels.",
    reality: "Gap has worsened — 87% of CFOs say AI will be critical, yet three-quarters of organizations lack the skills. GenAI is partially bridging the gap.",
    verdict: "Confirmed",
    source: "Deloitte Q4 2025 CFO Signals; PwC AI Jobs Barometer 2025",
    topic: "Skills Gap",
  },
  {
    finding: "ML projects cost at least €50,000 — prohibitive for Estonian-sized companies.",
    reality: "Costs dropped dramatically. No-code ML platforms offer predictive analytics from hundreds/month. GenAI tools do ad-hoc analysis for $20/month.",
    verdict: "Outdated",
    source: "Fortune Business Insights No-Code AI Market 2025",
    topic: "Cost Barrier",
  },
  {
    finding: "CFOs are the critical drivers of analytics projects. They bridge business needs and technology.",
    reality: "Amplified. 87% of CFOs predict AI extremely important for 2026. Dell CFO deployed AI agents for reconciliations — 11,000 headcount reduction.",
    verdict: "Confirmed",
    source: "Deloitte Q4 2025 CFO Signals; Fortune, March 2026",
    topic: "CFO as Champion",
  },
];

function VerdictBadge({ verdict }: { verdict: string }) {
  const styles: Record<string, string> = {
    Confirmed: "bg-primary/10 text-primary",
    Partial: "bg-amber-100 text-amber-800",
    Outdated: "bg-secondary/10 text-secondary",
  };
  return (
    <span className={`px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full ${styles[verdict] || styles.Confirmed}`}>
      {verdict === "Partial" ? "Partially Confirmed" : verdict}
    </span>
  );
}

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-8">
        <h2 className="headlines-newsreader text-4xl mb-4 text-center text-primary">Strategic Evolution: 2024 → 2026</h2>
        <p className="body-inter text-center text-on-surface-variant mb-16 max-w-2xl mx-auto">
          How do the thesis conclusions hold up against two years of explosive AI development? Each finding benchmarked against current industry data.
        </p>
        <div className="space-y-6">
          {comparisons.map((item, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-surface-container-high rounded-2xl overflow-hidden shadow-2xl shadow-primary/5">
              <div className="p-10 border-b md:border-b-0 md:border-r border-surface-container-high">
                <div className="flex justify-between items-start mb-6 gap-4">
                  <span className="text-sm font-bold text-outline uppercase tracking-widest">{item.topic}</span>
                  <VerdictBadge verdict={item.verdict} />
                </div>
                <span className="text-2xl headlines-newsreader italic text-primary block mb-4">2024 Thesis Finding</span>
                <p className="body-inter text-on-surface-variant leading-relaxed">{item.finding}</p>
              </div>
              <div className="p-10 bg-surface-container-low">
                <span className="text-2xl headlines-newsreader italic text-secondary block mb-4">2026 Reality</span>
                <p className="body-inter text-on-surface-variant leading-relaxed mb-4">{item.reality}</p>
                <p className="body-inter text-xs text-outline">Source: {item.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
