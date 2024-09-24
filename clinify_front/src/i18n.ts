import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEn from '../public/locales/en/common.json';
import pricingEn from '../public/locales/en/pricing.json';
import servicesEn from '../public/locales/en/services.json';
import homepageEn from '../public/locales/en/homepage.json';
import aboutEn from '../public/locales/en/about.json';

import commonDe from '../public/locales/de/common.json';
import pricingDe from '../public/locales/de/pricing.json';
import servicesDe from '../public/locales/de/services.json';
import homepageDe from '../public/locales/de/homepage.json';
import aboutDe from '../public/locales/de/about.json';

import commonIt from '../public/locales/it/common.json';
import pricingIt from '../public/locales/it/pricing.json';
import servicesIt from '../public/locales/it/services.json';
import homepageIt from '../public/locales/it/homepage.json';
import aboutIt from '../public/locales/it/about.json';

import commonFr from '../public/locales/fr/common.json';
import pricingFr from '../public/locales/fr/pricing.json';
import servicesFr from '../public/locales/fr/services.json';
import homepageFr from '../public/locales/fr/homepage.json';
import aboutFr from '../public/locales/fr/about.json';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: commonEn, pricing: pricingEn, services: servicesEn, homepage: homepageEn, about: aboutEn },
      de: { common: commonDe, pricing: pricingDe, services: servicesDe, homepage: homepageDe, about: aboutDe },
      it: { common: commonIt, pricing: pricingIt, services: servicesIt, homepage: homepageIt, about: aboutIt },
      fr: { common: commonFr, pricing: pricingFr, services: servicesFr, homepage: homepageFr, about: aboutFr },
    },
    fallbackLng: 'en',
    debug: true,
    ns: ['common', 'pricing', 'services', 'homepage', 'about'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
