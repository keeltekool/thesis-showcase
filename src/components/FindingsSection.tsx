export default function FindingsSection() {
  return (
    <section id="findings" className="py-32 bg-primary">
      <div className="max-w-screen-2xl mx-auto px-8">
        <h2 className="headlines-newsreader text-4xl text-white mb-20 text-center italic">Critical Thesis Findings</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Prerequisites — 8 columns */}
          <div className="md:col-span-8 bg-surface-container-lowest p-12 relative overflow-hidden">
            <span className="text-secondary font-black text-8xl absolute -right-4 -bottom-4 opacity-10">01</span>
            <h4 className="headlines-newsreader text-3xl text-primary mb-12">Prerequisites for Effective Analytics</h4>
            <blockquote className="headlines-newsreader text-4xl text-secondary leading-tight italic mb-8 border-l-8 border-secondary/20 pl-8">
              &ldquo;First you need digitally structured data, then you need data quality, then you need data analysis, then you need to automate.&rdquo;
            </blockquote>
            <p className="body-inter text-sm text-on-surface-variant mb-8">— BA Consultant</p>
            <ul className="body-inter space-y-4 text-on-surface-variant">
              <li className="flex items-start gap-3"><span className="w-2 h-2 bg-secondary mt-2 shrink-0"></span><span><strong>Single source of truth</strong> — Analytics data must flow into one unified warehouse. Multiple &ldquo;truths&rdquo; across departments kills trust in the numbers.</span></li>
              <li className="flex items-start gap-3"><span className="w-2 h-2 bg-secondary mt-2 shrink-0"></span><span><strong>Data quality before everything</strong> — Every interviewee stressed this. If the accounting foundation isn&apos;t solid, no BI tool will save you.</span></li>
              <li className="flex items-start gap-3"><span className="w-2 h-2 bg-secondary mt-2 shrink-0"></span><span><strong>Integration across sources</strong> — FP&A value multiplies when financial data is combined with sales, CRM, warehouse, and external data.</span></li>
              <li className="flex items-start gap-3"><span className="w-2 h-2 bg-secondary mt-2 shrink-0"></span><span><strong>Excel isn&apos;t dead</strong> — It lost its role in data collection and reporting, but remains irreplaceable for fast ad-hoc financial analysis.</span></li>
              <li className="flex items-start gap-3"><span className="w-2 h-2 bg-secondary mt-2 shrink-0"></span><span><strong>Leadership must champion data culture</strong> — Technology alone achieves nothing. Data-driven decision-making requires visible executive commitment.</span></li>
            </ul>
            <blockquote className="headlines-newsreader text-xl text-primary leading-snug italic mt-8 border-l-4 border-primary/20 pl-6">
              &ldquo;The solution itself gives you nothing except the opportunity to build a culture around it. I&apos;ve seen companies where the solution exists, but no culture forms around it.&rdquo;
              <span className="body-inter text-sm text-on-surface-variant block mt-2 not-italic">— BA Consultant</span>
            </blockquote>
          </div>

          {/* Activities — 4 columns */}
          <div className="md:col-span-4 bg-primary-container p-12 text-white">
            <h4 className="headlines-newsreader text-3xl mb-8">FP&A Activities</h4>
            <div className="space-y-6">
              <div className="pb-6 border-b border-white/10">
                <p className="font-bold text-secondary mb-2">Budgeting — Transformed</p>
                <p className="text-sm text-white/70 mb-3">BI enabled the shift from fixed annual budgets to rolling forecasts. Centralized data warehouses eliminated spreadsheet chaos.</p>
                <blockquote className="text-sm text-white/90 italic border-l-2 border-secondary/40 pl-3">
                  &ldquo;Many of our clients use rolling budgets, checking each month how the budget aligns with reality and making decisions based on that.&rdquo;
                  <span className="text-white/50 block mt-1 not-italic text-xs">— BA Consultant</span>
                </blockquote>
              </div>
              <div className="pb-6 border-b border-white/10">
                <p className="font-bold text-secondary mb-2">Forecasting — Still Human-Driven</p>
                <p className="text-sm text-white/70 mb-3">Predictive ML models remain rare in FP&A. Finance leaders doubt algorithms can capture full business complexity.</p>
                <blockquote className="text-sm text-white/90 italic border-l-2 border-secondary/40 pl-3">
                  &ldquo;Forecasts can&apos;t give you certainty about the future based on the past. A human always has more information.&rdquo;
                  <span className="text-white/50 block mt-1 not-italic text-xs">— CFO</span>
                </blockquote>
              </div>
              <div>
                <p className="font-bold text-secondary mb-2">Reporting — Biggest Wins</p>
                <p className="text-sm text-white/70 mb-3">Self-service BI automated routine reporting and ended the eternal debate of &ldquo;whose numbers are right.&rdquo;</p>
                <blockquote className="text-sm text-white/90 italic border-l-2 border-secondary/40 pl-3">
                  &ldquo;The days when five people had five different numbers for the same thing — that&apos;s gone.&rdquo;
                  <span className="text-white/50 block mt-1 not-italic text-xs">— CFO</span>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Challenges — 5 columns */}
          <div className="md:col-span-5 bg-secondary p-12 text-white">
            <h4 className="headlines-newsreader text-3xl mb-12">Challenges</h4>
            <blockquote className="headlines-newsreader text-3xl leading-snug italic opacity-90 mb-8">
              &ldquo;Everyone wants to put all the world&apos;s data in there, but it&apos;s never that simple. The important thing is to define what you actually need.&rdquo;
            </blockquote>
            <p className="body-inter text-sm text-white/60 mb-8">— CFO</p>
            <ul className="body-inter space-y-3 text-white/80 text-sm">
              <li className="flex items-start gap-2"><span className="text-white/40">—</span> Data fragmentation across systems</li>
              <li className="flex items-start gap-2"><span className="text-white/40">—</span> ROI justification for advanced analytics</li>
              <li className="flex items-start gap-2"><span className="text-white/40">—</span> Skills gap and limited knowledge of possibilities</li>
              <li className="flex items-start gap-2"><span className="text-white/40">—</span> Report overload creating noise instead of clarity</li>
              <li className="flex items-start gap-2"><span className="text-white/40">—</span> Culture over technology — tools gather dust without leadership</li>
            </ul>
            <blockquote className="text-sm text-white/90 italic mt-8 border-l-2 border-white/30 pl-4">
              &ldquo;There&apos;s no real out-of-box solution you can deploy for free. ML projects typically start at €50,000 minimum. You have to be ready to write off that entire amount if the project fails.&rdquo;
              <span className="text-white/50 block mt-1 not-italic text-xs">— BA Consultant</span>
            </blockquote>
          </div>

          {/* Opportunities — 7 columns */}
          <div className="md:col-span-7 bg-surface-container-lowest p-12 relative">
            <h4 className="headlines-newsreader text-3xl text-primary mb-12">Opportunities &amp; Future Technologies</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-secondary font-black text-xl mb-3">AI/ML Democratization</p>
                <p className="body-inter text-sm text-on-surface-variant leading-relaxed mb-3">Analytical tools are rapidly adding ML capabilities previously accessible only to data scientists.</p>
                <blockquote className="text-sm text-primary italic border-l-2 border-secondary/30 pl-3 headlines-newsreader">
                  &ldquo;Within this decade, machines won&apos;t replace people — but people who use technology will replace those who don&apos;t.&rdquo;
                  <span className="body-inter text-xs text-on-surface-variant block mt-1 not-italic">— CFO</span>
                </blockquote>
              </div>
              <div>
                <p className="text-secondary font-black text-xl mb-3">NLP &amp; Conversational Analytics</p>
                <p className="body-inter text-sm text-on-surface-variant leading-relaxed mb-3">Natural language interfaces entering every FP&A tool — querying data in plain language instead of SQL.</p>
                <blockquote className="text-sm text-primary italic border-l-2 border-secondary/30 pl-3 headlines-newsreader">
                  &ldquo;Imagine a ChatGPT-like assistant inside your FP&A tool that helps build reports, gives recommendations — that could be an enormous help.&rdquo;
                  <span className="body-inter text-xs text-on-surface-variant block mt-1 not-italic">— CFO</span>
                </blockquote>
              </div>
              <div>
                <p className="text-secondary font-black text-xl mb-3">Step-by-Step Adoption</p>
                <p className="body-inter text-sm text-on-surface-variant leading-relaxed mb-3">Start with quick wins, prove value, then expand. Avoid ambitious projects that try to do everything at once.</p>
                <blockquote className="text-sm text-primary italic border-l-2 border-secondary/30 pl-3 headlines-newsreader">
                  &ldquo;It&apos;s better to take small steps. Even adopting a new tool is actually a small step.&rdquo;
                  <span className="body-inter text-xs text-on-surface-variant block mt-1 not-italic">— BA Consultant</span>
                </blockquote>
              </div>
              <div>
                <p className="text-secondary font-black text-xl mb-3">Business-Side Ownership</p>
                <p className="body-inter text-sm text-on-surface-variant leading-relaxed mb-3">Analytics projects fail when owned by IT alone. Finance must lead — they understand the data&apos;s business context best.</p>
                <blockquote className="text-sm text-primary italic border-l-2 border-secondary/30 pl-3 headlines-newsreader">
                  &ldquo;Looking at our projects, well over half are led by the CFO. They have a good overview of all processes — sales, production — at least from a financial perspective.&rdquo;
                  <span className="body-inter text-xs text-on-surface-variant block mt-1 not-italic">— BA Consultant</span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
