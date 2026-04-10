import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  const mobilePages = [
    {
      slug: 'mobile-app-development-company-in-mysore',
      title: 'Mobile App Development Company in Mysore',
      keyword: 'mobile app development company in mysore',
    },
    {
      slug: 'app-development-company-mysore',
      title: 'App Development Company Mysore',
      keyword: 'app development company mysore',
    },
    {
      slug: 'android-app-development-company-in-mysore',
      title: 'Android App Development Company in Mysore',
      keyword: 'android app development company in mysore',
    },
    {
      slug: 'ios-app-development-company-in-mysore',
      title: 'iOS App Development Company in Mysore',
      keyword: 'ios app development company in mysore',
    },
    {
      slug: 'flutter-app-development-company-in-mysore',
      title: 'Flutter App Development Company in Mysore',
      keyword: 'flutter app development company in mysore',
    },
    {
      slug: 'react-native-app-development-company-in-mysore',
      title: 'React Native App Development Company in Mysore',
      keyword: 'react native app development company in mysore',
    },
  ];

  const crmPages = [
    {
      slug: 'crm-software-development-company-in-mysore',
      title: 'CRM Software Development Company in Mysore',
      keyword: 'crm software development company in mysore',
    },
    {
      slug: 'custom-crm-development-mysore',
      title: 'Custom CRM Development Mysore',
      keyword: 'custom crm development mysore',
    },
    {
      slug: 'crm-development-company-in-mysore',
      title: 'CRM Development Company in Mysore',
      keyword: 'crm development company in mysore',
    },
    {
      slug: 'sales-crm-software-mysore',
      title: 'Sales CRM Software Mysore',
      keyword: 'sales crm software mysore',
    },
  ];

  return (
    <>
      <Header />
      <section className="bg-gradient-to-br from-navy to-slate-900 text-white py-20">
        <div className="container-nnc text-center">
          <h1 className="heading-h1 mb-5">NNC Mysore Landing Pages</h1>
          <p className="text-lg text-white/85 max-w-2xl mx-auto">
            SEO-optimised landing pages for NNC&apos;s Mysore market targeting
            high-intent keywords across mobile app and CRM development.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container-nnc">
          <h2 className="heading-h2 mb-8">Mobile App Development Pages</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {mobilePages.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="block bg-slate-50 p-6 rounded-xl border-l-4 border-sky hover:shadow-card-hover transition-shadow"
              >
                <h3 className="heading-h3 text-lg">{page.title}</h3>
                <p className="text-xs text-sky-med font-semibold">
                  Target: {page.keyword}
                </p>
              </Link>
            ))}
          </div>

          <h2 className="heading-h2 mb-8">CRM Development Pages</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {crmPages.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="block bg-slate-50 p-6 rounded-xl border-l-4 border-sky hover:shadow-card-hover transition-shadow"
              >
                <h3 className="heading-h3 text-lg">{page.title}</h3>
                <p className="text-xs text-sky-med font-semibold">
                  Target: {page.keyword}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
