import React from 'react';

const DownloadButton = () => {
  const cvUrl = 'YOUR_CV_URL_HERE.pdf'; // Replace with your CV file URL

  return (
    <div className="flex items-center justify-center">
      <a href={cvUrl} download>
        <button className="mt-4 flex items-center justify-center bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded animate-pulse w-full md:w-auto">
          <i className="fas fa-download mr-2"></i> Download CV
        </button>
      </a>
    </div>
  );
};

export default DownloadButton;
