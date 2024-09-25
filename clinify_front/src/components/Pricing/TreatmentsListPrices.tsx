"use client";

import React, { useEffect} from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/global.css";

export interface TreatmentOption {
  variant: string;
  price: number;
  euPrice: number;
}

export interface Treatment {
  name: string;
  price?: number;
  euPrice?: number;
  options?: TreatmentOption[];
}

const treatments: Treatment[] = [
  {
    name: "dentalExamination",
    price: 50,
    euPrice: 150,
  },
  {
    name: "interproximalXRay",
    price: 30,
    euPrice: 120,
  },
  {
    name: "panoramicXRay",
    price: 60,
    euPrice: 250,
  },
  {
    name: "cbctScan",
    price: 120,
    euPrice: 400,
  },
  {
    name: "segmentalCbctScan",
    price: 80,
    euPrice: 350,
  },
  {
    name: "compositeFilling",
    price: 70,
    euPrice: 300,
  },
  {
    name: "compositeReconstruction",
    price: 150,
    euPrice: 600,
  },
  {
    name: "dentalHygieneTreatment",
    price: 80,
    euPrice: 300,
  },
  {
    name: "removalOfNicotineStains",
    price: 100,
    euPrice: 400,
  },
  {
    name: "simpleToothExtraction",
    price: 80,
    euPrice: 350,
  },
  {
    name: "semiImpactedToothExtraction",
    price: 200,
    euPrice: 800,
  },
  {
    name: "impactedWisdomToothExtraction",
    price: 250,
    euPrice: 1000,
  },
  {
    name: "periodontalPocketDebridement",
    price: 90,
    euPrice: 400,
  },
  {
    name: "laserGumTreatment",
    price: 180,
    euPrice: 700,
  },
  {
    name: "implantHygieneMaintenance",
    price: 100,
    euPrice: 500,
  },
  {
    name: "softTissueGraft",
    price: 600,
    euPrice: 2500,
  },
  {
    name: "apicotomy",
    price: 300,
    euPrice: 1200,
  },
  {
    name: "frenectomy",
    price: 150,
    euPrice: 600,
  },
  {
    name: "abscessIncision",
    price: 120,
    euPrice: 500,
  },
  {
    name: "gumPlasticSurgery",
    price: 400,
    euPrice: 1500,
  },
  {
    name: "biopsy",
    price: 200,
    euPrice: 800,
  },
  {
    name: "phExamination",
    price: 100,
    euPrice: 450,
  },
  {
    name: "analgoSedation",
    price: 500,
    euPrice: 2000,
  },
  {
    name: "metalCeramicCrown",
    price: 250,
    euPrice: 1200,
  },
  {
    name: "porcelainCrown",
    price: 400,
    euPrice: 1500,
  },
  {
    name: "zirconiumCrown",
    price: 500,
    euPrice: 2000,
  },
  {
    name: "porcelainCrownOnImplant",
    price: 600,
    euPrice: 2500,
  },
  {
    name: "nightguard",
    price: 100,
    euPrice: 400,
  },
  {
    name: "teethWhiteningKit",
    price: 150,
    euPrice: 600,
  },
  {
    name: "endodonticPost",
    price: 200,
    euPrice: 900,
  },
  {
    name: "implant",
    price: 700,
    euPrice: 3000,
  },
  {
    name: "suprastructure",
    price: 200,
    euPrice: 1000,
  },
  {
    name: "temporaryCrowns",
    price: 50,
    euPrice: 250,
  },
  {
    name: "teethWhitening",
    price: 150,
    euPrice: 600,
  },
  {
    name: "sinusLift",
    price: 1000,
    euPrice: 5000,
  },
  {
    name: "complicatedToothExtraction",
    price: 200,
    euPrice: 800,
  },
  {
    name: "boneGraft",
    price: 300,
    euPrice: 1500,
  },
  {
    name: "fibrinTreatment",
    price: 200,
    euPrice: 800,
  },
  {
    name: "endodonticTreatment",
    price: 150,
    euPrice: 700,
  },
  {
    name: "endodonticReTreatment",
    price: 200,
    euPrice: 900,
  },
];

const Treatments: React.FC = () => {
  const { t } = useTranslation("pricing");

  useEffect(() => {
    AOS.init({ duration: 300, once: true });
  }, []);

  const renderPrice = (price: number) => (
    <td className="py-3 px-4 border-b border-gray-200 text-center">
      <span className="text-teal-600 font-semibold text-base">€{price.toFixed(2)}</span>
    </td>
  );

  const renderSavings = (price: number, euPrice: number) => {
    const savings = euPrice ? ((euPrice - price) / euPrice) * 100 : 0;
    return (
      <td className="py-3 px-4 border-b border-gray-200 text-center">
        <span className="text-green-600 font-semibold text-base">{savings.toFixed(0)}%</span>
      </td>
    );
  };

  return (
    <div className="min-h-screen py-12 bg-transparent flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="text-left py-3 px-4 text-lg font-semibold">
                  {t("treatment")}
                </th>
                <th className="text-center py-3 px-4 text-lg font-semibold">
                  {t("price")}
                </th>
                <th className="text-center py-3 px-4 text-lg font-semibold">
                  {t("savings")}
                </th>
              </tr>
            </thead>
            <tbody>
              {treatments.map((treatment, index) => (
                <React.Fragment key={index}>
                  <tr
                    className={`cursor-pointer hover:bg-teal-50 transition-colors duration-200 ${
                      treatment.options ? "font-bold text-teal-800" : "text-teal-700"
                    }`}
                    onClick={() => treatment.options}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <td className="py-3 px-4 border-b border-gray-200">
                      {t(treatment.name)}
                      {treatment.options && (
                        <span className="ml-2 text-sm text-teal-600">
                          ({t("clickForOptions")})
                        </span>
                      )}
                    </td>
                    {!treatment.options && treatment.price !== undefined && (
                      <>
                        {renderPrice(treatment.price)}
                        {renderSavings(treatment.price, treatment.euPrice!)}
                      </>
                    )}
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
