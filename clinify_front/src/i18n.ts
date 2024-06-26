import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEn from '../public/locales/en/common.json';
import pricingEn from '../public/locales/en/pricing.json';
import servicesEn from '../public/locales/en/services.json';
import businessEn from '../public/locales/en/business.json';
import homepageEn from '../public/locales/en/homepage.json';
import aboutEn from '../public/locales/en/about.json';

import commonDe from '../public/locales/de/common.json';
import pricingDe from '../public/locales/de/pricing.json';
import servicesDe from '../public/locales/de/services.json';
import businessDe from '../public/locales/de/business.json';
import homepageDe from '../public/locales/de/homepage.json';
import aboutDe from '../public/locales/de/about.json';

import commonIt from '../public/locales/it/common.json';
import pricingIt from '../public/locales/it/pricing.json';
import servicesIt from '../public/locales/it/services.json';
import businessIt from '../public/locales/it/business.json';
import homepageIt from '../public/locales/it/homepage.json';
import aboutIt from '../public/locales/it/about.json';

import commonSr from '../public/locales/sr/common.json';
import pricingSr from '../public/locales/sr/pricing.json';
import servicesSr from '../public/locales/sr/services.json';
import businessSr from '../public/locales/sr/business.json';
import homepageSr from '../public/locales/sr/homepage.json';
import aboutSr from '../public/locales/sr/about.json';

import commonRu from '../public/locales/ru/common.json';
import pricingRu from '../public/locales/ru/pricing.json';
import servicesRu from '../public/locales/ru/services.json';
import businessRu from '../public/locales/ru/business.json';
import homepageRu from '../public/locales/ru/homepage.json';
import aboutRu from '../public/locales/ru/about.json';

import commonSp from '../public/locales/sp/common.json';
import pricingSp from '../public/locales/sp/pricing.json';
import servicesSp from '../public/locales/sp/services.json';
import businessSp from '../public/locales/sp/business.json';
import homepageSp from '../public/locales/sp/homepage.json';
import aboutSp from '../public/locales/sp/about.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: commonEn, pricing: pricingEn, services: servicesEn, business: businessEn, homepage: homepageEn, about: aboutEn},
      de: { common: commonDe, pricing: pricingDe, services: servicesDe, business: businessDe, homepage: homepageDe, about: aboutDe},
      it: { common: commonIt, pricing: pricingIt, services: servicesIt, business: businessIt, homepage: homepageIt, about: aboutIt},
      sr: { common: commonSr, pricing: pricingSr, services: servicesSr, business: businessSr, homepage: homepageSr, about: aboutSr},
      ru: { common: commonRu, pricing: pricingRu, services: servicesRu, business: businessRu, homepage: homepageRu, about: aboutRu},
      sp: { common: commonSp, pricing: pricingSp, services: servicesSp, business: businessSp, homepage: homepageSp, about: aboutSp},
    },
    fallbackLng: 'en',
    debug: true,
    ns: ['common', 'pricing', 'services', 'business', 'homepage', 'about'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
