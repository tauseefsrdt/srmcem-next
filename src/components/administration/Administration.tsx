import React, { Fragment } from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { administrationOverviewData } from "../../data/customOverViewData";
import Classes from "../../utils/styles/Global.module.css";
const img = "/images/administration/Rectangle 323.png";
import Cards from "./Cards";
// import PdfDownloadCard from "../../utils/custom/PdfDownloadCard";
// import { budgetData } from "../../data/administrationData";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomClubsTopFooterData } from "../../data/customTopFooterData";

const Administration: React.FC = () => {
  return (
    <Fragment>
      <section>
        <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
          {/* this is for overviewSection */}
          <CustomOverviewSection data={administrationOverviewData} />
          {/* this is administration card section */}
          <Cards />
          {/* this is Organizational Chart section */}
          <div className="flex justify-center items-center flex-col mt-[2rem] sm:mt-[4rem]">
            <h1 className="text-3xl lg:text-4xl font-bold text-center mx-auto">Organizational Chart</h1>
            <div className="border-2 border-gray-200 mt-[2rem] sm:mt-[3.5rem] py-2 transition-all duration-200 rounded-md hover:border-[#ffb703]">
              <img className="" src={img} alt="img" />
            </div>
          </div>
          {/* this is for budget section */}
          {/* <h1 className="text-3xl lg:text-4xl font-bold text-center mx-auto mt-[4rem]">Budgets</h1> */}
          {/* <PdfDownloadCard data={budgetData} /> */}
          {/* this is for CustomTopFooter heading */}
        </div>

        <CustomTopFooter data={CustomClubsTopFooterData} />
      </section>
    </Fragment>
  );
};

export default Administration;
