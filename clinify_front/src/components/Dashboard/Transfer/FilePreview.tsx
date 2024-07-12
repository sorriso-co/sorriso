import React from 'react';

interface FilePreviewProps {
  url: string;
  type: 'scans' | 'records' | 'images';
}

const FilePreview: React.FC<FilePreviewProps> = ({ url, type }) => {
  const getTitle = () => {
    switch (type) {
      case 'scans':
        return 'Scans Preview:';
      case 'records':
        return 'Dental Records Preview:';
      case 'images':
        return 'Images/Videos Preview:';
      default:
        return '';
    }
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-pink-600">{getTitle()}</h3>
      <iframe src={url} className="w-full h-64 border border-pink-300 rounded-lg"></iframe>
    </div>
  );
};

export default FilePreview;
