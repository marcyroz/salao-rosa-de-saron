import About from './_components/About';
import Hero from './_components/Hero';
import Navbar from './_components/Navbar';
import TopOfMind from './_components/TopOfMind';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TopOfMind />
      <About />
    </main>
  );
}
