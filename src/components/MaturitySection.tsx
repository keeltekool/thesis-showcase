export default function MaturitySection() {
  return (
    <section id="context" className="py-32 bg-surface-container-low">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="headlines-newsreader text-4xl mb-8 text-primary">Evolution of Analytics Maturity</h2>
            <p className="body-inter text-lg text-on-surface-variant leading-relaxed mb-8">
              Davenport &amp; Harris (2007) classify business analytics into four progressively sophisticated levels. In the FP&A context, most organizations remain anchored at descriptive analytics — standard dashboards and backward-looking reports. The journey toward predictive and prescriptive analytics represents not just a technology upgrade, but a fundamental shift in how finance teams create value.
            </p>
            <div className="flex flex-col gap-6">
              <div className="p-6 bg-white border-l-4 border-tertiary-fixed-dim">
                <span className="block text-4xl font-black text-primary mb-2">91%</span>
                <span className="text-on-surface-variant text-sm font-bold uppercase">of Estonian CFOs consider automation and digitization a top priority for finance.</span>
                <span className="text-outline text-xs block mt-1">PwC CFO Survey, 2022</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-48 bg-white p-6 flex flex-col justify-end group hover:bg-primary transition-colors">
              <p className="text-primary group-hover:text-white font-bold mb-2">Descriptive</p>
              <p className="text-outline text-xs group-hover:text-white/70">What happened?</p>
            </div>
            <div className="h-48 bg-surface-container-high p-6 flex flex-col justify-end">
              <p className="text-primary font-bold mb-2">Diagnostic</p>
              <p className="text-outline text-xs">Why did it happen?</p>
            </div>
            <div className="h-48 bg-primary-container p-6 flex flex-col justify-end">
              <p className="text-white font-bold mb-2">Predictive</p>
              <p className="text-white/70 text-xs">What will happen?</p>
            </div>
            <div className="h-48 bg-secondary p-6 flex flex-col justify-end">
              <p className="text-white font-bold mb-2">Prescriptive</p>
              <p className="text-white/70 text-xs">How can we make it happen?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
