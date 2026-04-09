export default function Footer() {
  return (
    <footer className="bg-[#2c1150] text-white w-full pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="text-xl font-bold text-secondary">TalTech Digital Archive</div>
          <p className="text-slate-300 text-sm body-inter leading-relaxed max-w-xs">
            This thesis contributes to the School of Business and Governance&apos;s research into digital transformation and business analytics in corporate finance.
          </p>
          <div className="flex gap-4">
            <a href="https://digikogu.taltech.ee/et/item/75f247de-a3ee-43c5-b3bc-7ba3c965854d" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:translate-x-1 transition-transform px-6 py-3 font-bold flex items-center gap-2 rounded-lg">
              <span className="material-symbols-outlined">open_in_new</span>
              Full Thesis — TalTech Library
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-bold uppercase text-xs tracking-widest text-secondary">Quick Links</span>
            <a className="text-slate-300 hover:text-secondary transition-colors text-sm" href="https://digikogu.taltech.ee" target="_blank" rel="noopener noreferrer">TalTech Digital Library</a>
            <a className="text-slate-300 hover:text-secondary transition-colors text-sm" href="https://taltech.ee/en/school-of-business-and-governance" target="_blank" rel="noopener noreferrer">School of Business and Governance</a>
            <a className="text-slate-300 hover:text-secondary transition-colors text-sm" href="#" target="_blank" rel="noopener noreferrer">Author Portfolio</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold uppercase text-xs tracking-widest text-secondary">Research</span>
            <a className="text-slate-300 hover:text-secondary transition-colors text-sm" href="#context">Analytics Framework</a>
            <a className="text-slate-300 hover:text-secondary transition-colors text-sm" href="#findings">Key Findings</a>
            <a className="text-slate-300 hover:text-secondary transition-colors text-sm" href="#comparison">2024 vs 2026</a>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start md:items-end">
          <span className="font-bold uppercase text-xs tracking-widest text-secondary">Citation</span>
          <p className="text-slate-300 text-sm text-left md:text-right body-inter italic">
            Väinaste, E. (2024). Ärianalüütika rakendamine finantsplaneerimise ja –analüüsi tegevustes: väljakutsed ja võimalused. Master&apos;s thesis. Tallinn University of Technology, School of Business and Governance.
          </p>
          <div className="mt-8 flex gap-4">
            <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer">share</span>
            <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer">bookmark</span>
          </div>
        </div>
      </div>
      <div className="mt-16 px-12 max-w-screen-2xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-xs uppercase tracking-widest">© 2024 Egert Väinaste. Master&apos;s thesis, Tallinn University of Technology. All rights reserved.</p>
      </div>
    </footer>
  );
}
