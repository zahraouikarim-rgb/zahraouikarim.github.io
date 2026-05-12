import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Platforms } from '../components/Platforms';
import { Services } from '../components/Services';
import { Artists } from '../components/Artists';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Platforms />
      <About />
      <Services />
      <Artists />
      <Stats />
      <Testimonials />
      <Footer />
    </>
  );
};
