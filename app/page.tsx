import About from '@/components/About';
import Benefits from '@/components/Benefits';
import CTAFinal from '@/components/CTAFinal';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Programs from '@/components/Programs';
import QuickQualifier from '@/components/QuickQualifier';
import SocialProof from '@/components/SocialProof';

export default function Home() {
  return (
    <main id="top" className="bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_34%),linear-gradient(180deg,_#050505_0%,_#090909_40%,_#050505_100%)]">
      <QuickQualifier />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Programs />
      <SocialProof />
      <About />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
