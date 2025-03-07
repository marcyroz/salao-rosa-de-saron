import About from './_components/About';
import Hero from './_components/Hero';
import Navbar from './_components/Navbar';
import Reasons from './_components/Reasons';
import TopOfMind from './_components/TopOfMind';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TopOfMind />
      <About />
      <Reasons />
    </main>
  );
}
