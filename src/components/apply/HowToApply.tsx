import React, { useEffect } from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { ApplyOverviewData } from "../../data/customOverViewData";
import PdfDownloadCard from "../../utils/custom/PdfDownloadCard";
import { HowToApplyPdfData } from "../../data/howToApplyData";
import EnquiryForm from "../admissions/EnquiryForm";
import Classes from "../../utils/styles/Global.module.css";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData3 } from "../../data/customTopFooterData";
import OnlineAdmissionProcess from "./OnlineAdmissionProcess";
import Apply from "../home/apply/Apply";
import { resetResponseofEnquiry, submissionForEnquiry, takeActionForEnquiry } from "../../store/enquiry-form/Enquiry-submission-slice";
import { RootState, store } from "../../store";
import { useSelector } from "react-redux";

const HowToApply: React.FC = () => {

  const { isError, isLoading, responseOfenquiry, resetAction } = useSelector((state: RootState) => state.createEnquiryForEnquiry);

  const submitHandlerForAdmission = (value: any) => {
    const { values, actions } = value;
    const submitData = { ...values };

    submitData["currentCoreStateId"] = submitData["coreStateId"];
    submitData["currentCoreCityId"] = submitData["coreCityId"];

    console.log("submitData+++++++++", submitData);

    const payload = {
      name: submitData.firstName + " " + submitData.lastName,
      email: submitData.email,
      phone: submitData.phone,

      leadEnquiryDTOS: [
        {
          coreStateId: submitData.currentCoreStateId,
          coreCityId: submitData.currentCoreCityId,
          academicCareerId: submitData.academicCareerId,
          academicProgramId: submitData.academicProgramId,
          leadSourceId: submitData.leadSourceId,
        },
      ],
    };
    console.log("payload+++++++++", payload);

    store.dispatch(takeActionForEnquiry(actions));
    store.dispatch(submissionForEnquiry(payload));
  };

  useEffect(() => {
    if (!isError && responseOfenquiry) {
      store.dispatch(resetResponseofEnquiry());

      // Check if resetForm is available and is a function
      if (resetAction) {
        console.log("Console inside useeffect");
        resetAction.resetForm();
      }
    }
  }, [isLoading, responseOfenquiry, resetAction, isError]);
  return (
    <>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={ApplyOverviewData} />
      </div>
      <Apply />
      <OnlineAdmissionProcess />
      <PdfDownloadCard data={HowToApplyPdfData} />
      <EnquiryForm onSubmitHandlerForAdmission={submitHandlerForAdmission} />
      <CustomTopFooter data={CustomTopFooterData3} />
    </>
  );
};

export default HowToApply;
