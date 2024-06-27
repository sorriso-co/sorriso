"use client";
import React from "react";
import { useTranslation } from 'next-i18next';
import TreatmentsHero from "../../components/Treatments/TreatmentsHero";
import MostWantedProcedures from "../../components/Treatments/MostWantedProcedures";
import ExpertiseOverview from "../../components/Treatments/ExpertiseOverview";
import CallToAction from "../../components/Treatments/CallToAction";

interface Procedure {
  image: string;
  title: string;
  shortDescription?: string;
  link?: string; 
  necessity?: string;
  candidate?: string;
  duration?: string;
}

const ProceduresPage: React.FC = () => {
  const { t } = useTranslation('services');

  const procedures = t('procedures', { returnObjects: true }) as Procedure[];

  return (
    <div>
      <TreatmentsHero />
      <MostWantedProcedures procedures={procedures} />
      <ExpertiseOverview />
      <CallToAction />
    </div>
  );
};

export default ProceduresPage;
