"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from '../Affiliates/AffiliateCard';
import Link from 'next/link';
import { FaDollarSign, FaCheck, FaStar, FaMoneyBillWave, FaChartLine, FaHandshake } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

const Payoff: React.FC = () => {
  const { t } = useTranslation('business');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-teal-800 to-teal-600 py-24 px-8 flex flex-col items-center overflow-x-hidden overflow-hidden">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6 text-white drop-shadow-lg" data-aos="fade-up">
          {t('payoff.title')}
        </h2>
        <p className="text-2xl lg:text-3xl mb-8 font-serif text-white" data-aos="fade-up" data-aos-delay="200">
          {t('payoff.description')}
        </p>
        <Link href="/contact" passHref>
          <button className="bg-white text-teal-700 font-bold py-3 px-8 rounded-full hover:bg-teal-500 hover:text-white transition-transform transform hover:scale-105 text-xl lg:text-2xl shadow-lg" data-aos="fade-up" data-aos-delay="400">
            {t('payoff.cta')}
          </button>
        </Link>
        <p className="mt-4 text-lg text-white italic" data-aos="fade-up" data-aos-delay="600">
          {t('payoff.contactPrompt')}
          <br />
          <Link href="/contact" passHref>
            <span className="text-teal-300">{t('payoff.contactEmail')}</span>
          </Link>
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card icon={<FaDollarSign />} title={t('payoff.cards.card1.title')} delay={200}>
          {t('payoff.cards.card1.description')}
        </Card>
        <Card icon={<FaCheck />} title={t('payoff.cards.card2.title')} delay={400}>
          {t('payoff.cards.card2.description')}
        </Card>
        <Card icon={<FaStar />} title={t('payoff.cards.card3.title')} delay={600}>
          {t('payoff.cards.card3.description')}
        </Card>
        <Card icon={<FaMoneyBillWave />} title={t('payoff.cards.card4.title')} delay={800}>
          {t('payoff.cards.card4.description')}
        </Card>
        <Card icon={<FaChartLine />} title={t('payoff.cards.card5.title')} delay={1000}>
          {t('payoff.cards.card5.description')}
        </Card>
        <Card icon={<FaHandshake />} title={t('payoff.cards.card6.title')} delay={1200}>
          {t('payoff.cards.card6.description')}
        </Card>
      </div>
    </div>
  );
};

export default Payoff;