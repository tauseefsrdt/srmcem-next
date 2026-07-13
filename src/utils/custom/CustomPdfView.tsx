import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ImFilePdf } from 'react-icons/im';


interface PopupProps {
  data: any;
  onClose: () => void;
}

const CustomPdfView: React.FC<PopupProps> = ({ data, onClose }) => {


  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-md shadow-lg w-full max-w-[90%] sm:max-w-[500px] md:max-w-[600px]  overflow-hidden ">
        <div className="flex items-center justify-between p-4 bg-[#233E6F]">
          <h2 className="text-lg font-semibold text-white">{data?.heading}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300"
            aria-label="Close popup"
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
        <div className={`h-full max-h-[calc(100vh-350px)] overflow-y-auto`}>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left  font-medium text-[#233E6F] border-b p-4">Document</th>
                <th className="text-right font-medium text-[#233E6F] border-b p-4">Downloads</th>
              </tr>
            </thead>
            <tbody>
              {data?.subChildData && data?.subChildData?.map((item: any, index: number) => (
                <tr key={index} className='hover:bg-[#233e6f11] '>
                  <td className="py-2 text-sm text-[#233E6F] p-4">{item.heading}</td>
                  <td className="py-2 text-right px-4 pr-10">
                    <a
                      href={item.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 inline-block p-1 rounded-sm border border-transparent hover:border-[#ffb703] hover:text-[#ffb703] md:mr-5"
                    >
                      <ImFilePdf size={24} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomPdfView;