import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import OurStory from './components/OurStory.jsx';
import SignatureDishes from './components/SignatureDishes.jsx';
import Menu from './components/Menu.jsx';
import Cocktails from './components/Cocktails.jsx';
import Atmosphere from './components/Atmosphere.jsx';
import Reviews from './components/Reviews.jsx';
import Visit from './components/Visit.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-50 text-navy-800">
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <OurStory />
        <SignatureDishes />
        <Menu />
        <Cocktails />
        <Atmosphere />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
