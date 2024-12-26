"use client";
import React, { memo } from "react";
import { useTranslation } from "react-i18next";

const Privacy: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center mb-12 text-teal-700">
          {t("privacyPolicy.title")}
        </h1>

        {/* Main Content */}
        <div className="space-y-12 bg-white shadow-lg rounded-lg p-8 lg:p-12">
          {/* Introduction Section */}
          <section className="border-l-4 border-teal-500 pl-4">
            <h3 className="text-2xl font-semibold mb-4 text-teal-700">
              {t("privacyPolicy.introductionTitle")}
            </h3>
            <p className="text-lg leading-relaxed text-gray-600">
              {t("privacyPolicy.introductionContent")}
            </p>
          </section>

          {/* Information We Collect Section */}
          <section className="border-l-4 border-teal-500 pl-4">
            <h3 className="text-2xl font-semibold mb-4 text-teal-700">
              {t("privacyPolicy.informationWeCollectTitle")}
            </h3>
            <p className="text-lg leading-relaxed text-gray-600">
              {t("privacyPolicy.informationWeCollectContent")}
            </p>
            <ul className="list-disc list-inside ml-6 space-y-2 text-lg text-gray-600">
              <li>{t("privacyPolicy.informationWeCollectItem1")}</li>
              <li>{t("privacyPolicy.informationWeCollectItem3")}</li>
              <li>{t("privacyPolicy.informationWeCollectItem4")}</li>
            </ul>
          </section>

          {/* How We Use Information Section */}
          <section className="border-l-4 border-teal-500 pl-4">
            <h3 className="text-2xl font-semibold mb-4 text-teal-700">
              {t("privacyPolicy.howWeUseInformationTitle")}
            </h3>
            <p className="text-lg leading-relaxed text-gray-600">
              {t("privacyPolicy.howWeUseInformationContent")}
            </p>
            <ul className="list-disc list-inside ml-6 space-y-2 text-lg text-gray-600">
              <li>{t("privacyPolicy.howWeUseInformationItem1")}</li>
              <li>{t("privacyPolicy.howWeUseInformationItem3")}</li>
              <li>{t("privacyPolicy.howWeUseInformationItem4")}</li>
            </ul>
          </section>

          {/* Data Security Section */}
          <section className="border-l-4 border-teal-500 pl-4">
            <h3 className="text-2xl font-semibold mb-4 text-teal-700">
              {t("privacyPolicy.dataSecurityTitle")}
            </h3>
            <p className="text-lg leading-relaxed text-gray-600">
              {t("privacyPolicy.dataSecurityContent")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default memo(Privacy);
