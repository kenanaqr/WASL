import { useRouter } from './router';
import { Layout } from './components/layout';
import {
  HomePage,
  ServicesPage,
  WorkPage,
  AboutPage,
  ContactPage,
  KenanContactPage,
  MamduhContactPage,
  CafeDemo,
  RestaurantDemo,
  BarbershopDemo,
} from './pages';
import { ThreeBrothersDemo } from './pages/demos/ThreeBrothersDemo';
import KenanContactPage from './pages/KenanContact';

function App() {
  const { currentPath, navigate } = useRouter();
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  if (pathname === '/contact/kenan' || pathname === '/contact/kenan/') {
    return <KenanContactPage />;
  }

  if (currentPath === '/contact/kenan') {
    return <KenanContactPage onNavigate={navigate} />;
  }

  if (currentPath === '/contact/mamduh') {
    return <MamduhContactPage onNavigate={navigate} />;
  }

  if (currentPath === '/demos/cafe') {
    return <CafeDemo onNavigate={navigate} />;
  }
  
  if (currentPath === '/demos/restaurant') {
    return <RestaurantDemo onNavigate={navigate} />;
  }

  if (currentPath === '/demos/barbershop') {
    return <BarbershopDemo onNavigate={navigate} />;
  }

  if (currentPath === '/demos/three-brothers') {
    return <ThreeBrothersDemo onNavigate={navigate} />;
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
      {renderCurrentPage()}
    </Layout>
  );
}

export default App;
