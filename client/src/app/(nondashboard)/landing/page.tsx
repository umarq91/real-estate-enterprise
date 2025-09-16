import React from "react";
import HeroSection from "./hero-section";
import FeatureSection from "./feature-section";
import DiscoverSection from "./discover-section";
import CallToActionSection from "./cta";
import FooterSection from "./footer";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <DiscoverSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
