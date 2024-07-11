"use client";
import React, { useEffect } from 'react';
import PriceCard from '../../components/Pricing/PriceCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const PricingSection: React.FC = () => {
    const { t } = useTranslation('pricing');

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section className="bg-gradient-to-r from-blue-50 to-teal-100 p-4 sm:p-8 lg:p-10 overflow--hidden">
            <div className="container mx-auto py-10 text-center">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-teal-900" data-aos="fade-up">
                    {t('pricingSection.title')}
                </h1>
                <p className="text-md sm:text-lg text-teal-800 mb-6 sm:mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    {t('pricingSection.description')}
                </p>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-24 lg:gap-16">
                    <div data-aos="fade-up" data-aos-delay="200" className="flex justify-center">
                        <PriceCard
                            title={t('pricingSection.dentalImplants.title')}
                            description={t('pricingSection.dentalImplants.description')}
                            prices={[
                                { country: "Montenegro", price: t('pricingSection.dentalImplants.prices.montenegro'), flag: "/images/flags/mne.png" },
                                { country: "Italy", price: t('pricingSection.dentalImplants.prices.italy'), flag: "/images/flags/ita.svg" },
                                { country: "Austria", price: t('pricingSection.dentalImplants.prices.austria'), flag: "/images/flags/aus.png" },
                                { country: "Australia", price: t('pricingSection.dentalImplants.prices.australia'), flag: "/images/flags/a.svg" },
                                { country: "Germany", price: t('pricingSection.dentalImplants.prices.germany'), flag: "/images/flags/ger.png" },
                                { country: "Switzerland", price: t('pricingSection.dentalImplants.prices.switzerland'), flag: "/images/flags/sw.png" },
                                { country: "United States", price: t('pricingSection.dentalImplants.prices.unitedStates'), flag: "/images/flags/us.png" },
                            ]}
                            buttonText={t('pricingSection.dentalImplants.buttonText')}
                            topImage={t('pricingSection.dentalImplants.topImage')}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center">
                        <PriceCard
                            title={t('pricingSection.zirconiumCrowns.title')}
                            description={t('pricingSection.zirconiumCrowns.description')}
                            prices={[
                                { country: "Montenegro", price: t('pricingSection.zirconiumCrowns.prices.montenegro'), flag: "/images/flags/mne.png" },
                                { country: "Italy", price: t('pricingSection.zirconiumCrowns.prices.italy'), flag: "/images/flags/ita.svg" },
                                { country: "Austria", price: t('pricingSection.zirconiumCrowns.prices.austria'), flag: "/images/flags/aus.png" },
                                { country: "Australia", price: t('pricingSection.zirconiumCrowns.prices.australia'), flag: "/images/flags/a.svg" },
                                { country: "Germany", price: t('pricingSection.zirconiumCrowns.prices.germany'), flag: "/images/flags/ger.png" },
                                { country: "Switzerland", price: t('pricingSection.zirconiumCrowns.prices.switzerland'), flag: "/images/flags/sw.png" },
                                { country: "United States", price: t('pricingSection.zirconiumCrowns.prices.unitedStates'), flag: "/images/flags/us.png" },
                            ]}
                            buttonText={t('pricingSection.zirconiumCrowns.buttonText')}
                            topImage={t('pricingSection.zirconiumCrowns.topImage')}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center">
                        <PriceCard
                            title={t('pricingSection.ceramicCrowns.title')}
                            description={t('pricingSection.ceramicCrowns.description')}
                            prices={[
                                { country: "Montenegro", price: t('pricingSection.ceramicCrowns.prices.montenegro'), flag: "/images/flags/mne.png" },
                                { country: "Italy", price: t('pricingSection.ceramicCrowns.prices.italy'), flag: "/images/flags/ita.svg" },
                                { country: "Austria", price: t('pricingSection.ceramicCrowns.prices.austria'), flag: "/images/flags/aus.png" },
                                { country: "Australia", price: t('pricingSection.ceramicCrowns.prices.australia'), flag: "/images/flags/a.svg" },
                                { country: "Germany", price: t('pricingSection.ceramicCrowns.prices.germany'), flag: "/images/flags/ger.png" },
                                { country: "Switzerland", price: t('pricingSection.ceramicCrowns.prices.switzerland'), flag: "/images/flags/sw.png" },
                                { country: "United States", price: t('pricingSection.ceramicCrowns.prices.unitedStates'), flag: "/images/flags/us.png" },
                            ]}
                            buttonText={t('pricingSection.ceramicCrowns.buttonText')}
                            topImage={t('pricingSection.ceramicCrowns.topImage')}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="500" className="flex justify-center">
                        <PriceCard
                            title={t('pricingSection.allon4.title')}
                            description={t('pricingSection.allon4.description')}
                            prices={[
                                { country: "Montenegro", price: t('pricingSection.allon4.prices.montenegro'), flag: "/images/flags/mne.png" },
                                { country: "Italy", price: t('pricingSection.allon4.prices.italy'), flag: "/images/flags/ita.svg" },
                                { country: "Austria", price: t('pricingSection.allon4.prices.austria'), flag: "/images/flags/aus.png" },
                                { country: "Australia", price: t('pricingSection.allon4.prices.australia'), flag: "/images/flags/a.svg" },
                                { country: "Germany", price: t('pricingSection.allon4.prices.germany'), flag: "/images/flags/ger.png" },
                                { country: "Switzerland", price: t('pricingSection.allon4.prices.switzerland'), flag: "/images/flags/sw.png" },
                                { country: "United States", price: t('pricingSection.allon4.prices.unitedStates'), flag: "/images/flags/us.png" },
                            ]}
                            buttonText={t('pricingSection.allon4.buttonText')}
                            topImage={t('pricingSection.allon4.topImage')}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600" className="flex justify-center">
                        <PriceCard
                            title={t('pricingSection.allon6.title')}
                            description={t('pricingSection.allon6.description')}
                            prices={[
                                { country: "Montenegro", price: t('pricingSection.allon6.prices.montenegro'), flag: "/images/flags/mne.png" },
                                { country: "Italy", price: t('pricingSection.allon6.prices.italy'), flag: "/images/flags/ita.svg" },
                                { country: "Austria", price: t('pricingSection.allon6.prices.austria'), flag: "/images/flags/aus.png" },
                                { country: "Australia", price: t('pricingSection.allon6.prices.australia'), flag: "/images/flags/a.svg" },
                                { country: "Germany", price: t('pricingSection.allon6.prices.germany'), flag: "/images/flags/ger.png" },
                                { country: "Switzerland", price: t('pricingSection.allon6.prices.switzerland'), flag: "/images/flags/sw.png" },
                                { country: "United States", price: t('pricingSection.allon6.prices.unitedStates'), flag: "/images/flags/us.png" },
                            ]}
                            buttonText={t('pricingSection.allon6.buttonText')}
                            topImage={t('pricingSection.allon6.topImage')}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="700" className="flex justify-center">
                        <PriceCard
                            title={t('pricingSection.hollywoodSmile.title')}
                            description={t('pricingSection.hollywoodSmile.description')}
                            prices={[
                                { country: "Montenegro", price: t('pricingSection.hollywoodSmile.prices.montenegro'), flag: "/images/flags/mne.png" },
                                { country: "Italy", price: t('pricingSection.hollywoodSmile.prices.italy'), flag: "/images/flags/ita.svg" },
                                { country: "Austria", price: t('pricingSection.hollywoodSmile.prices.austria'), flag: "/images/flags/aus.png" },
                                { country: "Australia", price: t('pricingSection.hollywoodSmile.prices.australia'), flag: "/images/flags/a.svg" },
                                { country: "Germany", price: t('pricingSection.hollywoodSmile.prices.germany'), flag: "/images/flags/ger.png" },
                                { country: "Switzerland", price: t('pricingSection.hollywoodSmile.prices.switzerland'), flag: "/images/flags/sw.png" },
                                { country: "United States", price: t('pricingSection.hollywoodSmile.prices.unitedStates'), flag: "/images/flags/us.png" },
                            ]}
                            buttonText={t('pricingSection.hollywoodSmile.buttonText')}
                            topImage={t('pricingSection.hollywoodSmile.topImage')}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
