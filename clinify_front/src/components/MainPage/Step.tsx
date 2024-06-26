import React from "react";
import { IconType } from "react-icons";

interface StepProps {
  stepNumber: string;
  title: string;
  description: string;
  Icon: IconType;
}

const Step: React.FC<StepProps> = ({
  stepNumber,
  title,
  description,
  Icon,
}) => {
  return (
    <div className="flex flex-col items-center text-center lg:text-left lg:items-start p-4 bg-white rounded-lg mb-7 mt-7 shadow-md h-80 w-60 mx-auto">
      <Icon className="text-3xl text-darkPink mb-2" />
      <h3 className="text-lg font-bold text-darkPink mb-1">
        STEP {stepNumber}
      </h3>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-md text-gray-700">{description}</p>
    </div>
  );
};

export default Step;
