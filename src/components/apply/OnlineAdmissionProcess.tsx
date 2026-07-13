import React from "react";
// import BankDetails from "./BankDetails";
import Classes from "../../utils/styles/Global.module.css";
import AccordionSection from "./AccordionSection";
const OnlineAdmissionProcess: React.FC = () => {
    return (
        <div className={`${Classes["container"]} font-sans`}>
            {/* Page Header */}
            {/* <BankDetails /> */}
            <AccordionSection />
        </div>
    );
};

export default OnlineAdmissionProcess;
