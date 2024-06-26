"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';

const Privacy: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t('privacyPolicy.title')}</h2>
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-semibold mb-4">{t('privacyPolicy.introductionTitle')}</h3>
            <p>{t('privacyPolicy.introductionContent')}</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4">{t('privacyPolicy.informationWeCollectTitle')}</h3>
            <p>{t('privacyPolicy.informationWeCollectContent')}</p>
            <ul className="list-disc list-inside ml-4">
              <li>{t('privacyPolicy.informationWeCollectItem1')}</li>
              <li>{t('privacyPolicy.informationWeCollectItem2')}</li>
              <li>{t('privacyPolicy.informationWeCollectItem3')}</li>
              <li>{t('privacyPolicy.informationWeCollectItem4')}</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4">{t('privacyPolicy.howWeUseInformationTitle')}</h3>
            <p>{t('privacyPolicy.howWeUseInformationContent')}</p>
            <ul className="list-disc list-inside ml-4">
              <li>{t('privacyPolicy.howWeUseInformationItem1')}</li>
              <li>{t('privacyPolicy.howWeUseInformationItem2')}</li>
              <li>{t('privacyPolicy.howWeUseInformationItem3')}</li>
              <li>{t('privacyPolicy.howWeUseInformationItem4')}</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-2xl font-semibold mb-4">{t('privacyPolicy.dataSecurityTitle')}</h3>
            <p>{t('privacyPolicy.dataSecurityContent')}</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Privacy;