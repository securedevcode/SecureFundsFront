import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComplianceSection from "@/components/ComplianceSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import LoanExplorer from "@/components/LoanExplorer";
import EnquirySection from "@/components/EnquirySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <StructuredData />
      {/* <Header /> */}

      <main>
        <Hero />
        <LoanExplorer />
        <ServicesSection />
        <EnquirySection/>
        <ProcessSection />
        <ComplianceSection />
        <ContactSection/>
        {/* <CTASection /> */}
      </main>

      {/* <Footer /> */}
    </>
  );
}
