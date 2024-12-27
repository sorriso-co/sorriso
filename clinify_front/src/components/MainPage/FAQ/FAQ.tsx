import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import { useTranslation } from "react-i18next";
import faqs from './text'; 
import styles from './FAQComponent.module.css'; 

const FAQComponent = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const { t } = useTranslation('common'); 
  
  const toggleFAQ = (index: number) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10">{t('faqs.title')}</h2>
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-x-12">
        {faqs.map((faq, index) => (
          <div key={index} className="space-y-2 border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left text-teal-800 text-xl sm:text-2xl font-semibold py-2 sm:py-3 px-4 sm:px-5 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all ${
                activeIndices.includes(index) ? 'bg-teal-200' : ''
              }`}
            >
              {t(faq.question)}
            </button>
            <Transition in={activeIndices.includes(index)} timeout={300}>
              {(state) => (
                <div className={`${styles.collapse} ${styles[state]}`}>
                  <p className="px-4 sm:px-5 pt-2 sm:pt-3 text-gray-700 text-base sm:text-lg">
                    {t(faq.answer)}
                  </p>
                </div>
              )}
            </Transition>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
