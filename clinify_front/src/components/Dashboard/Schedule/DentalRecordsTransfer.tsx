// import React, { useState } from 'react';

const DentalRecordsTransfer: React.FC = () => {
  // const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center w-full mt-6">
      <div className="w-full md:w-3/4 lg:w-1/2">
        <h2 className="text-2xl font-bold text-pink-800 mb-4 text-center">
          Send Us Related Dental Records
        </h2>
        <div className="bg-white p-6 rounded-3xl shadow-lg mb-4">
          <p className="text-lg text-gray-600">
            We find it tremendously helpful to have all of your scans, related
            dental records, and a few photographs before consulting and finding
            an appropriate solution to your dental problems. Of course, this is
            recommended, but not required. You can send your documentation via
            our secure web form.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-500 transition duration-300">
            <a href="/transfer">Transfer</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DentalRecordsTransfer;
