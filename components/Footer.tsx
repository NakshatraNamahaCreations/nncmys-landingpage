export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="container-nnc py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-navy font-extrabold text-xl">N</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">
                  Nakshatra Namaha Creations
                </div>
                <div className="text-sky-light text-xs">Your Digital Solutions Partner</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-slate-400">
              Full-stack digital agency. Website development, mobile apps, CRM software, digital
              marketing, 2D animation and corporate video production. 565+ projects since 2015.
            </p>
            <div className="flex flex-col gap-1.5 text-sm">
              <a href="tel:+919900566466" className="text-sky hover:text-sky-light transition-colors">
                +91 99005 66466
              </a>
              <a
                href="mailto:info@nakshatranamahacreations.com"
                className="text-sky hover:text-sky-light transition-colors"
              >
                info@nakshatranamahacreations.com
              </a>
              <a
                href="https://wa.me/919900566466"
                className="text-sky hover:text-sky-light transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-base mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.nakshatranamahacreations.com/website-development-company-in-bangalore"
                  className="hover:text-sky transition-colors"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="https://www.nakshatranamahacreations.com/mobile-app-development-company-in-bangalore"
                  className="hover:text-sky transition-colors"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="https://www.nakshatranamahacreations.com/custom-crm-development"
                  className="hover:text-sky transition-colors"
                >
                  CRM & Custom Software
                </a>
              </li>
              <li>
                <a
                  href="https://www.nakshatranamahacreations.com/digital-marketing-agency-in-bangalore"
                  className="hover:text-sky transition-colors"
                >
                  Digital Marketing & SEO
                </a>
              </li>
              <li>
                <a
                  href="https://www.nakshatranamahacreations.com/corporate-video-production-company-in-bangalore"
                  className="hover:text-sky transition-colors"
                >
                  Corporate Video
                </a>
              </li>
              <li>
                <a
                  href="https://www.nakshatranamahacreations.com/2d-animation-studio-in-bangalore"
                  className="hover:text-sky transition-colors"
                >
                  2D Animation
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white font-bold text-base mb-4">Our Offices</h4>
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-white font-semibold">Bengaluru · Head Office</div>
                <div className="text-slate-400 text-xs">
                  Darshan Plaza, 1st Floor, Channasandra, 560 098
                </div>
              </div>
              <div>
                <div className="text-white font-semibold">Mysuru · Branch Office</div>
                <div className="text-slate-400 text-xs">
                  Suswani Towers, JP Nagar 2nd Stage, 570 008
                </div>
              </div>
              <div>
                <div className="text-white font-semibold">Mumbai · Branch Office</div>
                <div className="text-slate-400 text-xs">
                  Lodha Signet, Kolshet Rd, Thane West, 400 607
                </div>
              </div>
              <div>
                <div className="text-white font-semibold">Hyderabad · Branch Office</div>
                <div className="text-slate-400 text-xs">Prakashnagar, Begumpet, 500 016</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-nnc py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <div>
            © 2026 Nakshatra Namaha Creations Pvt. Ltd. All rights reserved. CIN:
            U74999KA2015PTC082563
          </div>
          <div>Bengaluru · Mumbai · Mysuru · Hyderabad</div>
        </div>
      </div>
    </footer>
  );
}
