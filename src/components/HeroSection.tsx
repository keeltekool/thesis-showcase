export default function HeroSection() {
  return (
    <section className="relative min-h-[921px] flex items-center px-8 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-screen-2xl mx-auto w-full items-center">
        <div className="lg:col-span-7 z-10">
          <div className="inline-block px-4 py-1 mb-8 border-l-4 border-secondary bg-surface-container-low">
            <span className="text-primary font-bold tracking-widest text-sm uppercase">Tallinn University of Technology</span>
          </div>
          <h1 className="headlines-newsreader text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-primary mb-8 font-extrabold tracking-tight">
            Business Analytics <br /> in FP&A: <br />
            <span className="text-secondary italic">Challenges &amp; Opportunities</span>
          </h1>
          <p className="body-inter text-on-surface-variant text-lg max-w-xl mb-8">
            A qualitative study of 13 Estonian finance leaders — and how the predictions held up two years later.
          </p>
          <div className="flex items-center gap-6 mt-12">
            <div className="h-16 w-16 bg-primary-container rounded-full flex items-center justify-center text-white font-headline text-2xl">EV</div>
            <div>
              <p className="text-sm text-outline font-bold uppercase tracking-widest">Author</p>
              <p className="text-2xl text-primary headlines-newsreader italic">Egert Väinaste</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 mt-8 body-inter text-sm text-on-surface-variant">
            <span>Master&apos;s Thesis, 2024</span>
            <span>12,323 words</span>
            <span>Supervisor: Mari Avarmaa, PhD</span>
          </div>
          <a
            href="https://digikogu.taltech.ee/et/item/75f247de-a3ee-43c5-b3bc-7ba3c965854d"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-secondary text-white px-6 py-3 font-bold hover:translate-x-1 transition-transform rounded-lg body-inter text-sm"
          >
            <span className="material-symbols-outlined text-lg">open_in_new</span>
            Read the Full Thesis — TalTech Digital Library
          </a>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-surface-container-high relative overflow-hidden group">
            <img
              alt="Financial Data Analytics"
              className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgjMSjOO1S5CuFVol7Sn3vBXRHGIDojqBl1rGmjWY0Pf84VLbUa4gcFLHNhcaGsdZ53Uye5OmxPe2OAwFVhICbooy8lpw_Y0FeRBipsNZemzp7kGdN-6CpFW-Mw32PGhwuWfrt9EYg8sayc9iHJKg9BZ6lrOgyZjWPxDGV8-xwFhrC_ONyW2s4z1SXqchJQVd35dOjsgccZCexc-ymx_54R5EHdv2YwD-6c6Me_0q8x_L5DoILrit4NGBFayLS0FqV7MHr4Cerrk9h"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md">
              <p className="headlines-newsreader text-xl font-bold text-primary">
                &ldquo;It is critically important to be open to new challenges and opportunities, even if it means stepping out of your comfort zone.&rdquo;
              </p>
              <p className="body-inter text-sm text-on-surface-variant mt-2">— CFO, thesis interview</p>
            </div>
          </div>
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
