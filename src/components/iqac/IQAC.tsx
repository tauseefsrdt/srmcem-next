import React, { Fragment, useEffect, useState } from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { iqacOverviewData } from "../../data/customOverViewData";
import Classes from "../../utils/styles/Global.module.css";
import { academicPoliciesData, iqacCards, iqaTableData1, iqaTableData2, iqaTableData3, officerMessageData, policiesData } from "../../data/iqacData";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../data/customTopFooterData";
import PdfDownloadCard from "../../utils/custom/PdfDownloadCard";
import CustomAcademicPolicies from "../../utils/custom/CustomAcademicPolicies";
import IqacCard from "./iqacCard";
import CustomPdfView from "../../utils/custom/CustomPdfView";

const IQAC: React.FC = () => {
  const [viewItem, setViewItem] = useState<object>({});
  const [viewPopup, setViewPopup] = useState<boolean>(false);

  useEffect(() => {
    if (viewPopup) {
      document.body.style.height = "100vh";
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflowY = "auto";
    }
  }, [viewPopup]);

  return (
    <Fragment>
      <section className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
        <CustomOverviewSection data={iqacOverviewData} />
        {/* for officerMessage section */}
        {officerMessageData.map((item: any) => {
          return (
            <div className="w-full  rounded-[10px] bg-[#F2F7FF] px-5 py-10 sm:px-10 sm:py-12 mt-[2rem] sm:mt-[3.5rem]">
              <div className="flex flex-col md:flex-row items-start gap-5">
                <div className="w-full corner-border flex flex-col items-center justify-center px-[30px] md:px-[70px]">
                  <h2 className="text-3xl lg:text-4xl font-bold  text-black mb-2">{item.heading}</h2>
                  <p className=" mt-3 lg:mt-4 text-[#5B5B5B] leading-8 text-justify">{item.para1}</p>
                  <p className=" mt-3 lg:mt-4 text-[#5B5B5B] leading-8 text-justify mb-4">{item.para2}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* for flip cards section  */}
      </section>
      <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
        <h2 className="text-3xl font-bold mb-8 text-start">IQAC Policy</h2>
        <div className="grid-iqac-card manage main mb-5">
          {iqacCards?.map((card, index) => {
            length = iqacCards.length;
            return (
              <IqacCard
                length={length}
                index={index}
                key={index}
                title={card?.title}
                icon={card?.icon}
                description={card?.description}
                content={card?.content}
                colorCode={"bg-[#EDB906]"}
              />
            );
          })}
        </div>
      </div>
      <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
        <h2 className="text-3xl font-bold text-start">Organization</h2>
        <PdfDownloadCard style={true} data={iqaTableData3} />
      </div>
      <div className={`${Classes["container"]}`}>
        <h2 className="text-3xl mt-6 font-bold text-start">Important Policies</h2>
        <CustomAcademicPolicies style={true} title="Academic Policies" policies={academicPoliciesData} />
      </div>
      <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
        <CustomAcademicPolicies style={true} title="Administrative Policies" policies={policiesData} />
      </div>
      <div className={`${Classes["container"]}`}>
        <h2 className="text-3xl font-bold text-start">Reports</h2>
        <CustomAcademicPolicies style={true} title="Administrative Audit" policies={iqaTableData1} />
        {/* iqaTableData1 */}
        {/* <PdfDownloadCard
          viewPopup={true}
          handleView={(ele) => {
            setViewItem(ele);
            setViewPopup(true);
          }}
          style={true}
          data={iqaTableData1}
        /> */}
      </div>
      <PdfDownloadCard
        viewPopup={true}
        handleView={(ele) => {
          setViewItem(ele);
          setViewPopup(true);
        }}
        data={iqaTableData2}
      />
      <CustomTopFooter data={CustomTopFooterData3} />

      {viewPopup && (
        <CustomPdfView
          data={viewItem}
          onClose={() => {
            setViewItem({});
            setViewPopup(false);
          }}
        />
      )}
    </Fragment>
  );
};

export default IQAC;
