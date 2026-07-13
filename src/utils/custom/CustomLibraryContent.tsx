import React from "react";
import { CustomLibraryContentTypes } from "../../types/customDataTypes";

const CustomLibraryContent: React.FC<CustomLibraryContentTypes> = ({ data }) => {
    return (
        <div className="p-6">
            {data?.paraContent.map((item, index) => (
                <p key={index} className=" mb-6 text-center">{item?.content}</p>
            ))}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {data?.images.map((image, index) => (
                    <div
                        key={index}
                        className="rounded-lg overflow-hidden shadow-md transform transition duration-200 cursor-pointer"
                    >
                        <img
                            src={image.src}
                            alt={`Library Image ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomLibraryContent;