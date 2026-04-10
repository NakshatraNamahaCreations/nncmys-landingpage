export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy shadow-md">
      <div className="container-nnc">
        <div className="flex items-center justify-between py-4">
          <a href="https://www.nakshatranamahacreations.com" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-navy font-extrabold text-lg">N</span>
            </div>
            <div>
              <div className="text-white font-bold text-base leading-tight">
                Nakshatra Namaha <span className="text-sky">Creations</span>
              </div>
              <div className="text-sky-light text-[11px] leading-tight">
                Your Digital Solutions Partner
              </div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919900566466"
              className="text-white text-sm font-medium hover:text-sky transition-colors"
            >
              📞 +91 99005 66466
            </a>
            <a
              href="#enquiry"
              className="bg-sky hover:bg-sky-med text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-colors"
            >
              Get Free Quote
            </a>
          </div>
          <a
            href="#enquiry"
            className="md:hidden bg-sky text-white px-4 py-2 rounded-md text-sm font-semibold"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
}
