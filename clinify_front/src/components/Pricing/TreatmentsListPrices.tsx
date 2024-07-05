// "use client";
// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import AOS from "aos";
// import "aos/dist/aos.css";

// interface TreatmentOption {
//   variant: string;
//   price: number;
//   euPrice: number;
// }

// interface Treatment {
//   name: string;
//   price?: number;
//   euPrice?: number;
//   options?: TreatmentOption[];
// }

// const Treatments: React.FC = () => {
//   const { t } = useTranslation("pricing");
//   const [modalData, setModalData] = useState<Treatment | null>(null);

//   useEffect(() => {
//     AOS.init({ duration: 200, once: true });
//   }, []);

//   const treatments: Treatment[] = [
//     {
//       name: t("dentalExamination.name"),
//       price: parseFloat(t("dentalExamination.price")),
//       euPrice: parseFloat(t("dentalExamination.euPrice")),
//     },
//     {
//       name: t("interproximalXray.name"),
//       price: parseFloat(t("interproximalXray.price")),
//       euPrice: parseFloat(t("interproximalXray.euPrice")),
//     },
//     {
//       name: t("panoramicXray.name"),
//       price: parseFloat(t("panoramicXray.price")),
//       euPrice: parseFloat(t("panoramicXray.euPrice")),
//     },
//     {
//       name: t("cbctScan.name"),
//       price: parseFloat(t("cbctScan.price")),
//       euPrice: parseFloat(t("cbctScan.euPrice")),
//     },
//     {
//       name: t("segmentalCbctScan.name"),
//       price: parseFloat(t("segmentalCbctScan.price")),
//       euPrice: parseFloat(t("segmentalCbctScan.euPrice")),
//     },
//     {
//       name: t("compositeFilling.name"),
//       price: parseFloat(t("compositeFilling.price")),
//       euPrice: parseFloat(t("compositeFilling.euPrice")),
//     },
//     {
//       name: t("compositeReconstruction.name"),
//       price: parseFloat(t("compositeReconstruction.price")),
//       euPrice: parseFloat(t("compositeReconstruction.euPrice")),
//     },
//     {
//       name: t("dentalHygieneTreatment.name"),
//       price: parseFloat(t("dentalHygieneTreatment.price")),
//       euPrice: parseFloat(t("dentalHygieneTreatment.euPrice")),
//     },
//     {
//       name: t("removalOfNicotineStains.name"),
//       price: parseFloat(t("removalOfNicotineStains.price")),
//       euPrice: parseFloat(t("removalOfNicotineStains.euPrice")),
//     },
//     {
//       name: t("simpleToothExtraction.name"),
//       price: parseFloat(t("simpleToothExtraction.price")),
//       euPrice: parseFloat(t("simpleToothExtraction.euPrice")),
//     },
//     {
//       name: t("semiImpactedToothExtraction.name"),
//       price: parseFloat(t("semiImpactedToothExtraction.price")),
//       euPrice: parseFloat(t("semiImpactedToothExtraction.euPrice")),
//     },
//     {
//       name: t("impactedWisdomToothExtraction.name"),
//       price: parseFloat(t("impactedWisdomToothExtraction.price")),
//       euPrice: parseFloat(t("impactedWisdomToothExtraction.euPrice")),
//     },
//     {
//       name: t("periodontalPocketDebridement.name"),
//       price: parseFloat(t("periodontalPocketDebridement.price")),
//       euPrice: parseFloat(t("periodontalPocketDebridement.euPrice")),
//     },
//     {
//       name: t("laserGumTreatment.name"),
//       price: parseFloat(t("laserGumTreatment.price")),
//       euPrice: parseFloat(t("laserGumTreatment.euPrice")),
//     },
//     {
//       name: t("implantHygieneMaintenance.name"),
//       price: parseFloat(t("implantHygieneMaintenance.price")),
//       euPrice: parseFloat(t("implantHygieneMaintenance.euPrice")),
//     },
//     {
//       name: t("softTissueGraft.name"),
//       price: parseFloat(t("softTissueGraft.price")),
//       euPrice: parseFloat(t("softTissueGraft.euPrice")),
//     },
//     {
//       name: t("apicotomy.name"),
//       price: parseFloat(t("apicotomy.price")),
//       euPrice: parseFloat(t("apicotomy.euPrice")),
//     },
//     {
//       name: t("frenectomy.name"),
//       price: parseFloat(t("frenectomy.price")),
//       euPrice: parseFloat(t("frenectomy.euPrice")),
//     },
//     {
//       name: t("abscessIncision.name"),
//       price: parseFloat(t("abscessIncision.price")),
//       euPrice: parseFloat(t("abscessIncision.euPrice")),
//     },
//     {
//       name: t("gumPlasticSurgery.name"),
//       price: parseFloat(t("gumPlasticSurgery.price")),
//       euPrice: parseFloat(t("gumPlasticSurgery.euPrice")),
//     },
//     {
//       name: t("biopsy.name"),
//       price: parseFloat(t("biopsy.price")),
//       euPrice: parseFloat(t("biopsy.euPrice")),
//     },
//     {
//       name: t("phExam.name"),
//       price: parseFloat(t("phExam.price")),
//       euPrice: parseFloat(t("phExam.euPrice")),
//     },
//     {
//       name: t("analgoSedation.name"),
//       price: parseFloat(t("analgoSedation.price")),
//       euPrice: parseFloat(t("analgoSedation.euPrice")),
//     },
//     {
//       name: t("metalCeramicCrown.name"),
//       price: parseFloat(t("metalCeramicCrown.price")),
//       euPrice: parseFloat(t("metalCeramicCrown.euPrice")),
//     },
//     {
//       name: t("porcelainCrown.name"),
//       price: parseFloat(t("porcelainCrown.price")),
//       euPrice: parseFloat(t("porcelainCrown.euPrice")),
//     },
//     {
//       name: t("zirconiumCrown.name"),
//       price: parseFloat(t("zirconiumCrown.price")),
//       euPrice: parseFloat(t("zirconiumCrown.euPrice")),
//     },
//     {
//       name: t("porcelainCrownOnImplant.name"),
//       price: parseFloat(t("porcelainCrownOnImplant.price")),
//       euPrice: parseFloat(t("porcelainCrownOnImplant.euPrice")),
//     },
//     {
//       name: t("nightguard.name"),
//       price: parseFloat(t("nightguard.price")),
//       euPrice: parseFloat(t("nightguard.euPrice")),
//     },
//     {
//       name: t("teethWhiteningKit.name"),
//       price: parseFloat(t("teethWhiteningKit.price")),
//       euPrice: parseFloat(t("teethWhiteningKit.euPrice")),
//     },
//     {
//       name: t("endodonticPost.name"),
//       price: parseFloat(t("endodonticPost.price")),
//       euPrice: parseFloat(t("endodonticPost.euPrice")),
//     },
//     {
//       name: t("implant.name"),
//       price: parseFloat(t("implant.price")),
//       euPrice: parseFloat(t("implant.euPrice")),
//     },
//     {
//       name: t("suprastructure.name"),
//       price: parseFloat(t("suprastructure.price")),
//       euPrice: parseFloat(t("suprastructure.euPrice")),
//     },
//     {
//       name: t("temporaryCrowns.name"),
//       options: [
//         {
//           variant: t("temporaryCrowns.option1.variant"),
//           price: parseFloat(t("temporaryCrowns.option1.price")),
//           euPrice: parseFloat(t("temporaryCrowns.option1.euPrice")),
//         },
//         {
//           variant: t("temporaryCrowns.option2.variant"),
//           price: parseFloat(t("temporaryCrowns.option2.price")),
//           euPrice: parseFloat(t("temporaryCrowns.option2.euPrice")),
//         },
//       ],
//     },
//     {
//       name: t("teethWhitening.name"),
//       options: [
//         {
//           variant: t("teethWhitening.option1.variant"),
//           price: parseFloat(t("teethWhitening.option1.price")),
//           euPrice: parseFloat(t("teethWhitening.option1.euPrice")),
//         },
//         {
//           variant: t("teethWhitening.option2.variant"),
//           price: parseFloat(t("teethWhitening.option2.price")),
//           euPrice: parseFloat(t("teethWhitening.option2.euPrice")),
//         },
//       ],
//     },
//     {
//       name: t("sinusLift.name"),
//       options: [
//         {
//           variant: t("sinusLift.option1.variant"),
//           price: parseFloat(t("sinusLift.option1.price")),
//           euPrice: parseFloat(t("sinusLift.option1.euPrice")),
//         },
//         {
//           variant: t("sinusLift.option2.variant"),
//           price: parseFloat(t("sinusLift.option2.price")),
//           euPrice: parseFloat(t("sinusLift.option2.euPrice")),
//         },
//       ],
//     },
//     {
//       name: t("complicatedToothExtraction.name"),
//       options: [
//         {
//           variant: t("complicatedToothExtraction.option1.variant"),
//           price: parseFloat(t("complicatedToothExtraction.option1.price")),
//           euPrice: parseFloat(t("complicatedToothExtraction.option1.euPrice")),
//         },
//         {
//           variant: t("complicatedToothExtraction.option2.variant"),
//           price: parseFloat(t("complicatedToothExtraction.option2.price")),
//           euPrice: parseFloat(t("complicatedToothExtraction.option2.euPrice")),
//         },
//       ],
//     },
//     {
//       name: t("boneGraft.name"),
//       options: [
//         {
//           variant: t("boneGraft.option1.variant"),
//           price: parseFloat(t("boneGraft.option1.price")),
//           euPrice: parseFloat(t("boneGraft.option1.euPrice")),
//         },
//         {
//           variant: t("boneGraft.option2.variant"),
//           price: parseFloat(t("boneGraft.option2.price")),
//           euPrice: parseFloat(t("boneGraft.option2.euPrice")),
//         },
//         {
//           variant: t("boneGraft.option3.variant"),
//           price: parseFloat(t("boneGraft.option3.price")),
//           euPrice: parseFloat(t("boneGraft.option3.euPrice")),
//         },
//       ],
//     },
//     {
//       name: t("fibrin.name"),
//       options: [
//         {
//           variant: t("fibrin.option1.variant"),
//           price: parseFloat(t("fibrin.option1.price")),
//           euPrice: parseFloat(t("fibrin.option1.euPrice")),
//         },
//         {
//           variant: t("fibrin.option2.variant"),
//           price: parseFloat(t("fibrin.option2.price")),
//           euPrice: parseFloat(t("fibrin.option2.euPrice")),
//         },
//       ],
//     },
//     {
//       name: t("endodonticTreatment.name"),
//       options: [
//         {
//           variant: t("endodonticTreatment.option1.variant"),
//           price: parseFloat(t("endodonticTreatment.option1.price")),
//           euPrice: parseFloat(t("endodonticTreatment.option1.euPrice")),
//         },
//         {
//           variant: t("endodonticTreatment.option2.variant"),
//           price: parseFloat(t("endodonticTreatment.option2.price")),
//           euPrice: parseFloat(t("endodonticTreatment.option2.euPrice")),
//         },
//       ],
//     },
//     {
//       name: t("endodonticReTreatment.name"),
//       options: [
//         {
//           variant: t("endodonticReTreatment.option1.variant"),
//           price: parseFloat(t("endodonticReTreatment.option1.price")),
//           euPrice: parseFloat(t("endodonticReTreatment.option1.euPrice")),
//         },
//         {
//           variant: t("endodonticReTreatment.option2.variant"),
//           price: parseFloat(t("endodonticReTreatment.option2.price")),
//           euPrice: parseFloat(t("endodonticReTreatment.option2.euPrice")),
//         },
//       ],
//     },
//   ];

//   const renderPrice = (price: number) => (
//     <td className="py-2 px-2 sm:px-4 border-b border-gray-300 text-center">
//       <span className="py-1 px-2 sm:py-2 sm:px-4 text-teal-600 text-sm font-semibold">
//         €{price.toFixed(2)}
//       </span>
//     </td>
//   );

//   const renderSavings = (price: number, euPrice: number) => {
//     const savings = euPrice ? ((euPrice - price) / euPrice) * 100 : 0;
//     return (
//       <td className="py-2 px-2 sm:px-4 border-b border-gray-300 text-center">
//         <span className="py-1 px-2 sm:py-2 sm:px-4 text-teal-600 text-sm font-semibold">
//           {savings.toFixed(0)}%
//         </span>
//       </td>
//     );
//   };

//   const handleModalClose = () => setModalData(null);

//   return (
//     <div className="min-h-screen overflow-hidden py-8 bg-teal-50 flex justify-center items-center">
//       <div className="container mx-auto px-4">
//         <div className="overflow-x-auto">
//           <table
//             className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden"
//             data-aos="fade-up"
//           >
//             <thead className="bg-teal-600">
//               <tr>
//                 <th className="text-left py-2 px-2 sm:py-3 sm:px-4 text-white text-xs sm:text-sm font-semibold">
//                   {t("treatment")}
//                 </th>
//                 <th className="text-center py-2 px-2 sm:py-3 sm:px-4 text-white text-xs sm:text-sm font-semibold">
//                   {t("price")}
//                 </th>
//                 <th className="text-center py-2 px-2 sm:py-3 sm:px-4 text-white text-xs sm:text-sm font-semibold">
//                   {t("savings")}
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {treatments.map((treatment, index) => (
//                 <React.Fragment key={index}>
//                   <tr
//                     className={`hover:bg-teal-100 transition-colors duration-100 cursor-pointer ${
//                       treatment.options ? "font-bold text-teal-800" : ""
//                     }`}
//                     onClick={() => treatment.options && setModalData(treatment)}
//                     data-aos="fade-up"
//                     data-aos-delay={index * 50}
//                   >
//                     <td className="py-2 px-2 sm:py-3 sm:px-4 border-b border-gray-300 text-teal-700 text-xs sm:text-sm">
//                       {treatment.name}
//                       {treatment.options && (
//                         <span className="ml-2 text-xs text-teal-600">
//                           ({t("clickForOptions")})
//                         </span>
//                       )}
//                     </td>
//                     {!treatment.options && (
//                       <>
//                         {treatment.price !== undefined &&
//                           renderPrice(treatment.price)}
//                         {treatment.price !== undefined &&
//                           renderSavings(treatment.price, treatment.euPrice!)}
//                       </>
//                     )}
//                   </tr>
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {modalData && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg p-4 sm:p-8 w-11/12 sm:w-96">
//             <h2 className="text-lg sm:text-xl font-bold mb-4">
//               {modalData.name}
//             </h2>
//             <div className="space-y-2">
//               {modalData.options?.map((option, idx) => (
//                 <div key={idx} className="flex justify-between items-center">
//                   <span className="text-teal-700 text-xs sm:text-sm">
//                     {`${modalData.name} - ${option.variant}`}
//                   </span>
//                   {renderPrice(option.price)}
//                   {renderSavings(option.price, option.euPrice)}
//                 </div>
//               ))}
//             </div>
//             <button
//               className="mt-4 py-2 px-4 bg-teal-600 text-white rounded-lg w-full"
//               onClick={handleModalClose}
//             >
//               {t("close")}
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Treatments;

"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/global.css";

interface TreatmentOption {
  variant: string;
  price: number;
  euPrice: number;
}

interface Treatment {
  name: string;
  price?: number;
  euPrice?: number;
  options?: TreatmentOption[];
}

const Treatments: React.FC = () => {
  const { t } = useTranslation("pricing");
  const [modalData, setModalData] = useState<Treatment | null>(null);

  useEffect(() => {
    AOS.init({ duration: 200, once: true });

    const isMobileDevice = () => window.innerWidth <= 767;

    if (isMobileDevice()) {
      document
        .getElementById("treatments-container")
        ?.classList.add("disable-touch-on-mobile");
    }
  }, []);

  const treatments: Treatment[] = [
    {
      name: t("dentalExamination.name"),
      price: parseFloat(t("dentalExamination.price")),
      euPrice: parseFloat(t("dentalExamination.euPrice")),
    },
    {
      name: t("interproximalXray.name"),
      price: parseFloat(t("interproximalXray.price")),
      euPrice: parseFloat(t("interproximalXray.euPrice")),
    },
    {
      name: t("panoramicXray.name"),
      price: parseFloat(t("panoramicXray.price")),
      euPrice: parseFloat(t("panoramicXray.euPrice")),
    },
    {
      name: t("cbctScan.name"),
      price: parseFloat(t("cbctScan.price")),
      euPrice: parseFloat(t("cbctScan.euPrice")),
    },
    {
      name: t("segmentalCbctScan.name"),
      price: parseFloat(t("segmentalCbctScan.price")),
      euPrice: parseFloat(t("segmentalCbctScan.euPrice")),
    },
    {
      name: t("compositeFilling.name"),
      price: parseFloat(t("compositeFilling.price")),
      euPrice: parseFloat(t("compositeFilling.euPrice")),
    },
    {
      name: t("compositeReconstruction.name"),
      price: parseFloat(t("compositeReconstruction.price")),
      euPrice: parseFloat(t("compositeReconstruction.euPrice")),
    },
    {
      name: t("dentalHygieneTreatment.name"),
      price: parseFloat(t("dentalHygieneTreatment.price")),
      euPrice: parseFloat(t("dentalHygieneTreatment.euPrice")),
    },
    {
      name: t("removalOfNicotineStains.name"),
      price: parseFloat(t("removalOfNicotineStains.price")),
      euPrice: parseFloat(t("removalOfNicotineStains.euPrice")),
    },
    {
      name: t("simpleToothExtraction.name"),
      price: parseFloat(t("simpleToothExtraction.price")),
      euPrice: parseFloat(t("simpleToothExtraction.euPrice")),
    },
    {
      name: t("semiImpactedToothExtraction.name"),
      price: parseFloat(t("semiImpactedToothExtraction.price")),
      euPrice: parseFloat(t("semiImpactedToothExtraction.euPrice")),
    },
    {
      name: t("impactedWisdomToothExtraction.name"),
      price: parseFloat(t("impactedWisdomToothExtraction.price")),
      euPrice: parseFloat(t("impactedWisdomToothExtraction.euPrice")),
    },
    {
      name: t("periodontalPocketDebridement.name"),
      price: parseFloat(t("periodontalPocketDebridement.price")),
      euPrice: parseFloat(t("periodontalPocketDebridement.euPrice")),
    },
    {
      name: t("laserGumTreatment.name"),
      price: parseFloat(t("laserGumTreatment.price")),
      euPrice: parseFloat(t("laserGumTreatment.euPrice")),
    },
    {
      name: t("implantHygieneMaintenance.name"),
      price: parseFloat(t("implantHygieneMaintenance.price")),
      euPrice: parseFloat(t("implantHygieneMaintenance.euPrice")),
    },
    {
      name: t("softTissueGraft.name"),
      price: parseFloat(t("softTissueGraft.price")),
      euPrice: parseFloat(t("softTissueGraft.euPrice")),
    },
    {
      name: t("apicotomy.name"),
      price: parseFloat(t("apicotomy.price")),
      euPrice: parseFloat(t("apicotomy.euPrice")),
    },
    {
      name: t("frenectomy.name"),
      price: parseFloat(t("frenectomy.price")),
      euPrice: parseFloat(t("frenectomy.euPrice")),
    },
    {
      name: t("abscessIncision.name"),
      price: parseFloat(t("abscessIncision.price")),
      euPrice: parseFloat(t("abscessIncision.euPrice")),
    },
    {
      name: t("gumPlasticSurgery.name"),
      price: parseFloat(t("gumPlasticSurgery.price")),
      euPrice: parseFloat(t("gumPlasticSurgery.euPrice")),
    },
    {
      name: t("biopsy.name"),
      price: parseFloat(t("biopsy.price")),
      euPrice: parseFloat(t("biopsy.euPrice")),
    },
    {
      name: t("phExam.name"),
      price: parseFloat(t("phExam.price")),
      euPrice: parseFloat(t("phExam.euPrice")),
    },
    {
      name: t("analgoSedation.name"),
      price: parseFloat(t("analgoSedation.price")),
      euPrice: parseFloat(t("analgoSedation.euPrice")),
    },
    {
      name: t("metalCeramicCrown.name"),
      price: parseFloat(t("metalCeramicCrown.price")),
      euPrice: parseFloat(t("metalCeramicCrown.euPrice")),
    },
    {
      name: t("porcelainCrown.name"),
      price: parseFloat(t("porcelainCrown.price")),
      euPrice: parseFloat(t("porcelainCrown.euPrice")),
    },
    {
      name: t("zirconiumCrown.name"),
      price: parseFloat(t("zirconiumCrown.price")),
      euPrice: parseFloat(t("zirconiumCrown.euPrice")),
    },
    {
      name: t("porcelainCrownOnImplant.name"),
      price: parseFloat(t("porcelainCrownOnImplant.price")),
      euPrice: parseFloat(t("porcelainCrownOnImplant.euPrice")),
    },
    {
      name: t("nightguard.name"),
      price: parseFloat(t("nightguard.price")),
      euPrice: parseFloat(t("nightguard.euPrice")),
    },
    {
      name: t("teethWhiteningKit.name"),
      price: parseFloat(t("teethWhiteningKit.price")),
      euPrice: parseFloat(t("teethWhiteningKit.euPrice")),
    },
    {
      name: t("endodonticPost.name"),
      price: parseFloat(t("endodonticPost.price")),
      euPrice: parseFloat(t("endodonticPost.euPrice")),
    },
    {
      name: t("implant.name"),
      price: parseFloat(t("implant.price")),
      euPrice: parseFloat(t("implant.euPrice")),
    },
    {
      name: t("suprastructure.name"),
      price: parseFloat(t("suprastructure.price")),
      euPrice: parseFloat(t("suprastructure.euPrice")),
    },
    {
      name: t("temporaryCrowns.name"),
      options: [
        {
          variant: t("temporaryCrowns.option1.variant"),
          price: parseFloat(t("temporaryCrowns.option1.price")),
          euPrice: parseFloat(t("temporaryCrowns.option1.euPrice")),
        },
        {
          variant: t("temporaryCrowns.option2.variant"),
          price: parseFloat(t("temporaryCrowns.option2.price")),
          euPrice: parseFloat(t("temporaryCrowns.option2.euPrice")),
        },
      ],
    },
    {
      name: t("teethWhitening.name"),
      options: [
        {
          variant: t("teethWhitening.option1.variant"),
          price: parseFloat(t("teethWhitening.option1.price")),
          euPrice: parseFloat(t("teethWhitening.option1.euPrice")),
        },
        {
          variant: t("teethWhitening.option2.variant"),
          price: parseFloat(t("teethWhitening.option2.price")),
          euPrice: parseFloat(t("teethWhitening.option2.euPrice")),
        },
      ],
    },
    {
      name: t("sinusLift.name"),
      options: [
        {
          variant: t("sinusLift.option1.variant"),
          price: parseFloat(t("sinusLift.option1.price")),
          euPrice: parseFloat(t("sinusLift.option1.euPrice")),
        },
        {
          variant: t("sinusLift.option2.variant"),
          price: parseFloat(t("sinusLift.option2.price")),
          euPrice: parseFloat(t("sinusLift.option2.euPrice")),
        },
      ],
    },
    {
      name: t("complicatedToothExtraction.name"),
      options: [
        {
          variant: t("complicatedToothExtraction.option1.variant"),
          price: parseFloat(t("complicatedToothExtraction.option1.price")),
          euPrice: parseFloat(t("complicatedToothExtraction.option1.euPrice")),
        },
        {
          variant: t("complicatedToothExtraction.option2.variant"),
          price: parseFloat(t("complicatedToothExtraction.option2.price")),
          euPrice: parseFloat(t("complicatedToothExtraction.option2.euPrice")),
        },
      ],
    },
    {
      name: t("boneGraft.name"),
      options: [
        {
          variant: t("boneGraft.option1.variant"),
          price: parseFloat(t("boneGraft.option1.price")),
          euPrice: parseFloat(t("boneGraft.option1.euPrice")),
        },
        {
          variant: t("boneGraft.option2.variant"),
          price: parseFloat(t("boneGraft.option2.price")),
          euPrice: parseFloat(t("boneGraft.option2.euPrice")),
        },
        {
          variant: t("boneGraft.option3.variant"),
          price: parseFloat(t("boneGraft.option3.price")),
          euPrice: parseFloat(t("boneGraft.option3.euPrice")),
        },
      ],
    },
    {
      name: t("fibrin.name"),
      options: [
        {
          variant: t("fibrin.option1.variant"),
          price: parseFloat(t("fibrin.option1.price")),
          euPrice: parseFloat(t("fibrin.option1.euPrice")),
        },
        {
          variant: t("fibrin.option2.variant"),
          price: parseFloat(t("fibrin.option2.price")),
          euPrice: parseFloat(t("fibrin.option2.euPrice")),
        },
      ],
    },
    {
      name: t("endodonticTreatment.name"),
      options: [
        {
          variant: t("endodonticTreatment.option1.variant"),
          price: parseFloat(t("endodonticTreatment.option1.price")),
          euPrice: parseFloat(t("endodonticTreatment.option1.euPrice")),
        },
        {
          variant: t("endodonticTreatment.option2.variant"),
          price: parseFloat(t("endodonticTreatment.option2.price")),
          euPrice: parseFloat(t("endodonticTreatment.option2.euPrice")),
        },
      ],
    },
    {
      name: t("endodonticReTreatment.name"),
      options: [
        {
          variant: t("endodonticReTreatment.option1.variant"),
          price: parseFloat(t("endodonticReTreatment.option1.price")),
          euPrice: parseFloat(t("endodonticReTreatment.option1.euPrice")),
        },
        {
          variant: t("endodonticReTreatment.option2.variant"),
          price: parseFloat(t("endodonticReTreatment.option2.price")),
          euPrice: parseFloat(t("endodonticReTreatment.option2.euPrice")),
        },
      ],
    },
  ];

  const renderPrice = (price: number) => (
    <td className="py-2 px-2 sm:px-4 border-b border-gray-300 text-center">
      <span className="py-1 px-2 sm:py-2 sm:px-4 text-teal-600 text-sm font-semibold">
        €{price.toFixed(2)}
      </span>
    </td>
  );

  const renderSavings = (price: number, euPrice: number) => {
    const savings = euPrice ? ((euPrice - price) / euPrice) * 100 : 0;
    return (
      <td className="py-2 px-2 sm:px-4 border-b border-gray-300 text-center">
        <span className="py-1 px-2 sm:py-2 sm:px-4 text-teal-600 text-sm font-semibold">
          {savings.toFixed(0)}%
        </span>
      </td>
    );
  };

  const handleModalClose = () => setModalData(null);

  return (
    <div
      id="treatments-container"
      className="min-h-screen overflow-hidden py-8 bg-teal-50 flex justify-center items-center"
    >
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto">
          <table
            className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden"
            data-aos="fade-up"
          >
            <thead className="bg-teal-600">
              <tr>
                <th className="text-left py-2 px-2 sm:py-3 sm:px-4 text-white text-xs sm:text-sm font-semibold">
                  {t("treatment")}
                </th>
                <th className="text-center py-2 px-2 sm:py-3 sm:px-4 text-white text-xs sm:text-sm font-semibold">
                  {t("price")}
                </th>
                <th className="text-center py-2 px-2 sm:py-3 sm:px-4 text-white text-xs sm:text-sm font-semibold">
                  {t("savings")}
                </th>
              </tr>
            </thead>
            <tbody>
              {treatments.map((treatment, index) => (
                <React.Fragment key={index}>
                  <tr
                    className={`hover:bg-teal-100 transition-colors duration-100 cursor-pointer ${
                      treatment.options ? "font-bold text-teal-800" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      treatment.options && setModalData(treatment);
                    }}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <td className="py-2 px-2 sm:py-3 sm:px-4 border-b border-gray-300 text-teal-700 text-xs sm:text-sm">
                      {treatment.name}
                      {treatment.options && (
                        <span className="ml-2 text-xs text-teal-600">
                          ({t("clickForOptions")})
                        </span>
                      )}
                    </td>
                    {!treatment.options && (
                      <>
                        {treatment.price !== undefined &&
                          renderPrice(treatment.price)}
                        {treatment.price !== undefined &&
                          renderSavings(treatment.price, treatment.euPrice!)}
                      </>
                    )}
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4 sm:p-8 w-11/12 sm:w-96">
            <h2 className="text-lg sm:text-xl font-bold mb-4">
              {modalData.name}
            </h2>
            <div className="space-y-2">
              {modalData.options?.map((option, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-teal-700 text-xs sm:text-sm">
                    {`${modalData.name} - ${option.variant}`}
                  </span>
                  {renderPrice(option.price)}
                  {renderSavings(option.price, option.euPrice)}
                </div>
              ))}
            </div>
            <button
              className="mt-4 py-2 px-4 bg-teal-600 text-white rounded-lg w-full"
              onClick={handleModalClose}
            >
              {t("close")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Treatments;
