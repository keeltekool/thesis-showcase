export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="text-lg font-bold text-primary uppercase tracking-widest headlines-newsreader">
          Master&apos;s Thesis — TalTech 2024
        </div>
        <div className="hidden md:flex items-center gap-10 text-lg tracking-tight body-inter">
          <a className="text-secondary font-bold border-b-2 border-secondary pb-1" href="#findings">Research</a>
          <a className="text-slate-600 font-medium hover:text-secondary transition-all duration-300" href="#methodology">Thesis</a>
          <a className="text-slate-600 font-medium hover:text-secondary transition-all duration-300" href="#comparison">2024 vs 2026</a>
        </div>
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-primary cursor-pointer">search</span>
          <span className="material-symbols-outlined text-primary cursor-pointer">language</span>
        </div>
      </div>
    </nav>
  );
}
