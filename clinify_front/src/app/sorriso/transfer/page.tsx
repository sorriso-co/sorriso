"use client";
import React from 'react';
import FileUpload from '../../components/Transfer/FileUpload';

const UploadPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl bg-white p-8 rounded-3xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-pink-800">Upload Your Dental Records</h1>
        <p className="text-center text-gray-600 mb-8">
          We find it tremendously helpful to have all of your scans, related dental records, and a few photographs before consulting and finding an appropriate solution to your dental problems. Of course, this is recommended, but not required. You can send your documentation via our secure web form.
        </p>
        <FileUpload />
      </div>
    </div>
  );
};

export default UploadPage;
