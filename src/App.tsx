import { lazy, Suspense, useEffect } from 'react';
import { useRouter } from './router';
import { updateSeo } from './seo';
import { Layout } from './components/layout';
import { HomePage } from './pages/Home';

// Lazy-loaded secondary pages & demos
const ServicesPage = lazy(() => import('./pages/Services').then(m => ({ default: m.ServicesPage })));
const WorkPage = lazy(() => import('./pages/Work').then(m => ({ default: m.WorkPage })));
const AboutPage = lazy(() => import('./pages/About').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/Contact').then(m => ({ default: m.ContactPage })));
const KenanContactPage = lazy(() => import('./pages/KenanContact').then(m => ({ default: m.KenanContactPage })));
const MamduhContactPage = lazy(() => import('./pages/MamduhContact').then(m => ({ default: m.MamduhContactPage })));
const CafeDemo = lazy(() => import('./pages/demos/CafeDemo').then(m => ({ default: m.CafeDemo })));
const RestaurantDemo = lazy(() => import('./pages/demos/RestaurantDemo').then(m => ({ default: m.RestaurantDemo })));
const BarbershopDemo = lazy(() => import('./pages/demos/BarbershopDemo').then(m => ({ default: m.BarbershopDemo })));

const PageFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#18414b] border-t-transparent opacity-40" />
  </div>
);

function App() {
  const { currentPath, navigate } = useRouter();

  useEffect(() => {
    updateSeo(currentPath);
  }, [currentPath]);

  if (currentPath === '/contact/kenan') {
    return (
      <Suspense fallback={<PageFallback />}>
        <KenanContactPage onNavigate={navigate} />
      </Suspense>
    );
  }

  if (currentPath === '/contact/mamduh') {
    return (
      <Suspense fallback={<PageFallback />}>
        <MamduhContactPage onNavigate={navigate} />
      </Suspense>
    );
  }

  if (currentPath === '/demos/cafe') {
    return (
      <Suspense fallback={<PageFallback />}>
        <CafeDemo onNavigate={navigate} />
      </Suspense>
    );
  }
  
  if (currentPath === '/demos/restaurant') {
    return (
      <Suspense fallback={<PageFallback />}>
        <RestaurantDemo onNavigate={navigate} />
      </Suspense>
    );
  }

  if (currentPath === '/demos/barbershop') {
    return (
      <Suspense fallback={<PageFallback />}>
        <BarbershopDemo onNavigate={navigate} />
      </Suspense>
    );
  }

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={navigate} />;
      case '/services':
        return <ServicesPage onNavigate={navigate} />;
      case '/work':
        return <WorkPage onNavigate={navigate} />;
      case '/about':
        return <AboutPage onNavigate={navigate} />;
      case '/contact':
        return <ContactPage onNavigate={navigate} />;
      default:
        return (
          <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-neutral-900">404</h1>
            <p className="mt-2 text-neutral-500">The requested page was not found.</p>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="mt-6 inline-flex rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              Return Home
            </button>
          </div>
        );
    }
  };

  return (
    <Layout currentPath={currentPath} onNavigate={navigate}>
      <Suspense fallback={<PageFallback />}>
        {renderCurrentPage()}
      </Suspense>
    </Layout>
  );
}

export default App;
