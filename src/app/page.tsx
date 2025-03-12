import About from './_components/About';
import Footer from './_components/Footer';
import Hero from './_components/Hero';
import Navbar from './_components/Navbar';
import Reasons from './_components/Reasons';
import Services from './_components/Services';
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
