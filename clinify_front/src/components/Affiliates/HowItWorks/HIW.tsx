"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Step from '../HowItWorks/Step';
import { useTranslation } from 'next-i18next';

const HIW = () => {
  const { t } = useTranslation('business');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  interface StepItem {
    stepNumber: number;
    title: string;
    items?: string[];
    description?: string;
    footnote?: string;
  }
  
  interface HowItWorksData {
    title: string;
    description: string;
    steps: StepItem[];
  }

  
  // Fetch and typecast the 'howItWorks' data
  const howItWorksData: HowItWorksData = t('howItWorks', { returnObjects: true });

  const steps1 = howItWorksData.steps.slice(0, 3);
  const steps2 = howItWorksData.steps.slice(3);

  return (
    <div className="bg-white py-16 px-8">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-5xl lg:text-6xl font-serif font-bold text-teal-900 mb-6 drop-shadow-lg">
          {howItWorksData.title}
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          {howItWorksData.description}
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {steps1.map((step: StepItem, index: number) => (
          <Step
            key={index}
            stepNumber={step.stepNumber}
            title={step.title}
            items={step.items}
            description={step.description}
            footnote={step.footnote}
          />
        ))}
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {steps2.map((step: StepItem, index: number) => (
          <Step
            key={index}
            stepNumber={step.stepNumber}
            title={step.title}
            items={step.items}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HIW;
