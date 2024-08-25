import React from "react";
import Hero from "@/components/Affiliates/AffiliateHero";
import Payoff from "@/components/Affiliates/PayOff";
import Stories from "@/components/Affiliates/AffiliateStories";
import CTA from "@/components/Affiliates/CTA";
import HIW from "@/components/Affiliates/HowItWorks/HIW";
import Target from "@/components/Affiliates/Target";

const AffiliatesPage = () => {
  return (
    <section className="overflow-x-hidden">
      <div>
        <Hero />
      </div>
      <div>
        <HIW />
      </div>
      <div>
        <Payoff />
      </div>
      <div>
        <Stories />
      </div>
      <div>
        <Target />
      </div>
      <div>
        <CTA />
      </div>
    </section>
  );
};

export default AffiliatesPage;
