import React, { useState } from 'react';
import FilePreview from './FilePreview';

const FileUpload: React.FC = () => {
  const [scans, setScans] = useState<File | null>(null);
  const [records, setRecords] = useState<File | null>(null);
  const [images, setImages] = useState<File | null>(null);
  const [previewUrls, setPreviewUrls] = useState({
    scans: '',
    records: '',
    images: ''
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, type: 'scans' | 'records' | 'images') => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setPreviewUrls((prev) => ({
        ...prev,
        [type]: URL.createObjectURL(file)
      }));
    }

    if (type === 'scans') setScans(file);
    if (type === 'records') setRecords(file);
    if (type === 'images') setImages(file);
  };

  const handleSubmit = () => {
    if (scans && records && images) {
      alert('Files have been sent successfully!');
    } else {
      alert('Please upload all required files.');
    }
  };

  const handleRemove = (type: 'scans' | 'records' | 'images') => {
    if (type === 'scans') setScans(null);
    if (type === 'records') setRecords(null);
    if (type === 'images') setImages(null);

    setPreviewUrls((prev) => ({
      ...prev,
      [type]: ''
    }));
  };

  return (
    <div className="w-full max-w-3xl bg-white p-6 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold text-pink-800 mb-4 text-center">Upload Your Dental Records</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-pink-600 mb-2">Scans</label>
          {scans ? (
            <div className="flex items-center justify-between">
              <p className="text-gray-700">{scans.name}</p>
              <button
                onClick={() => handleRemove('scans')}
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-300"
              >
                Remove
              </button>
            </div>
          ) : (
            <input
              type="file"
              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.mp4"
              onChange={(e) => handleFileChange(e, 'scans')}
              className="w-full px-3 py-2 border border-pink-300 rounded-lg"
            />
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-pink-600 mb-2">Dental Records</label>
          {records ? (
            <div className="flex items-center justify-between">
              <p className="text-gray-700">{records.name}</p>
              <button
                onClick={() => handleRemove('records')}
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-300"
              >
                Remove
              </button>
            </div>
          ) : (
            <input
              type="file"
              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.mp4"
              onChange={(e) => handleFileChange(e, 'records')}
              className="w-full px-3 py-2 border border-pink-300 rounded-lg"
            />
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-pink-600 mb-2">Images/Videos of Your Face</label>
          {images ? (
            <div className="flex items-center justify-between">
              <p className="text-gray-700">{images.name}</p>
              <button
                onClick={() => handleRemove('images')}
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-300"
              >
                Remove
              </button>
            </div>
          ) : (
            <input
              type="file"
              accept=".png,.jpg,.jpeg,.mp4"
              onChange={(e) => handleFileChange(e, 'images')}
              className="w-full px-3 py-2 border border-pink-300 rounded-lg"
            />
          )}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit}
          className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-500 transition duration-300"
        >
          Send
        </button>
      </div>
      <div className="mt-6 space-y-4">
        {previewUrls.scans && <FilePreview url={previewUrls.scans} type="scans" />}
        {previewUrls.records && <FilePreview url={previewUrls.records} type="records" />}
        {previewUrls.images && <FilePreview url={previewUrls.images} type="images" />}
      </div>
    </div>
  );
};

export default FileUpload;
