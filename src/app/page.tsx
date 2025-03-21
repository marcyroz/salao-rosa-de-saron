import About from './screens/About';
import Footer from './_components/Footer';
import Hero from './screens/Hero';
import Navbar from './_components/Navbar';
import Reasons from './screens/Reasons';
import Services from './screens/Services';
import TopOfMind from './_components/TopOfMind';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TopOfMind />
      <About />
      <Reasons />
      <Services />
      <Footer />
    </main>
  );
}
