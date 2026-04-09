export default function MethodologySection() {
  return (
    <section id="methodology" className="py-32 bg-white relative">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 sticky top-32">
            <h3 className="headlines-newsreader text-5xl mb-6 text-primary">The Human Intelligence</h3>
            <p className="body-inter text-on-surface-variant leading-relaxed">
              Behind every data point is a decision-maker. This research chose depth over breadth — 13 semi-structured interviews with the people who actually build, buy, and use analytics in Estonian finance teams. A qualitative approach to bridge the gap between theoretical frameworks and organizational reality.
            </p>
            <p className="body-inter text-on-surface-variant leading-relaxed mt-4 text-sm">
              Interviews conducted February–March 2023. Analyzed using thematic analysis methodology (Braun &amp; Clarke, 2006).
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-10 bg-surface-container-low rounded-xl">
              <span className="material-symbols-outlined text-5xl text-secondary mb-6">groups</span>
              <h4 className="headlines-newsreader text-2xl mb-4 text-primary">13 Expert Interviews</h4>
              <p className="text-on-surface-variant">In-depth qualitative analysis with senior finance and analytics professionals across the Estonian technology sector.</p>
            </div>
            <div className="p-10 bg-primary-container text-white rounded-xl">
              <span className="material-symbols-outlined text-5xl mb-6">account_balance</span>
              <h4 className="headlines-newsreader text-2xl mb-4">7 CFOs</h4>
              <p className="text-white/70">Omniva, Nortal, Veriff, Pipedrive, Salv Technologies, OIXIO Digital, Fibenol — strategic decision-makers leading finance transformation.</p>
            </div>
            <div className="p-10 bg-secondary text-white rounded-xl">
              <span className="material-symbols-outlined text-5xl mb-6">query_stats</span>
              <h4 className="headlines-newsreader text-2xl mb-4">6 BA Consultants</h4>
              <p className="text-white/70">Trinidad Wiseman, Flowit, Intelex Insight, Datafruit, Infovara, Telema — implementation specialists across industries.</p>
            </div>
            <div className="p-10 bg-surface-container-highest rounded-xl flex items-center justify-center">
              <div className="text-center">
                <span className="text-primary text-6xl font-black">200+</span>
                <p className="text-outline text-xs font-bold uppercase mt-2">Minutes of Qualitative Insight</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
