import Navbar from '../components/common/Navbar';
import Hero from '../components/home/Hero';
import Case from '../components/home/Case';
import Footer from '@/components/common/Footer';
import Testimonial from '@/components/home/Testimonial';

export default function Home() {
  return (
    <main >
      <Navbar />
      <Hero />
      <Case />
      <Testimonial />
      <Footer />
    </main>
  );
}