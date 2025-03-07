import Hero from './_components/Hero';
import Navbar from './_components/Navbar';
import Services from './_components/SilderServices';
import TopOfMind from './_components/TopOfMind';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopOfMind />
      <Services />
    </div>
  );
}
