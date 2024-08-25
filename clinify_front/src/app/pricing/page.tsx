import Hero from "../../components/Pricing/PriceHero";
import Comparison from "../../components/Pricing/Comparison";
import Treatments from "../../components/Pricing/TreatmentsListPrices";
import PricingSection from "@/components/Pricing/PricingSection";
import ContactUs from "@/components/Pricing/ReachOut";
import CompetitiveAdvantage from "@/components/Pricing/CompetitiveAdvantage";
import RootLayout from "../layout";
const PricingPage = () => {
  return (
    <RootLayout title="Sorriso - Affordable Prices">
      <section className="overflow-x-hidden">
        <div className="mx-auto">
          <Hero />
          <Comparison />
          <CompetitiveAdvantage />
          <PricingSection />
        </div>
        <div className="relative rounded-t-[30px] rounded-b-[30px] bg-white overflow-x-hidden text-teal-900">
          <div className="container mx-auto px-4 pt-16">
            <h1 className="text-5xl font-bold text-center text-teal-600 mb-12">
              Our Dental Treatments & Prices
            </h1>
            <Treatments />
            <ContactUs />
          </div>
        </div>
      </section>
    </RootLayout>
  );
};

export default PricingPage;
