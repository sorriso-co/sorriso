import React, { useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { useTranslation } from "react-i18next";
import faqs from "./text"; // your FAQ data
import styles from "./FAQComponent.module.css"; // for the .collapse classes only

const FAQComponent = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const { t } = useTranslation("common");

  // Ref array for each FAQ
  const nodeRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(
    faqs.map(() => React.createRef<HTMLDivElement>())
  );

  const toggleFAQ = (index: number) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-900 mb-8 sm:mb-10">
        {t("faqs.title")}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-x-12">
        {faqs.map((faq, index) => (
          <div key={index} className="pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left text-teal-800 text-xl sm:text-2xl font-semibold py-2 sm:py-3 px-4 sm:px-5 hover:bg-teal-50 transition-all ${
                activeIndices.includes(index) ? "bg-teal-100" : ""
              }`}
            >
              {t(faq.question)}
            </button>
            <Transition
              in={activeIndices.includes(index)}
              timeout={300}
              nodeRef={nodeRefs.current[index]}
            >
              {(state) => (
                <div
                  ref={nodeRefs.current[index]}
                  className={`${styles.collapse} ${
                    state === "entering" || state === "entered"
                      ? styles.entered
                      : styles.exited
                  }`}
                >
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
