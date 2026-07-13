import React, { useEffect } from "react";
const girlImg = "/images/admissions/enquirygirl.jpg";
import Classes from "../../utils/styles/Global.module.css";
import { EnquiryFormData, initialValuesForEnquiry, validationSchemaForEnquiry } from "../../data/enquiryFormData";
import { ErrorMessage, Field, Formik, Form } from "formik";
import SelectInputForEnquiry from "./SelectInputForEnquiry";

import { RootState, store } from "../../store";
import { getAllCityByStateId } from "../../store/enquiry-form/get-allCity-byStateId-slice";
import { getAllProgramByCareerId } from "../../store/enquiry-form/get-allprogram-byCareerId-slice";
import { useSelector } from "react-redux";
import { getAllCareer } from "../../store/enquiry-form/get-all-career-slice";
import { getAllState } from "../../store/enquiry-form/get-allState-slice";
import { takeActionForEnquiry } from "../../store/enquiry-form/Enquiry-submission-slice";

interface EnquiryFormProps {
  onSubmitHandlerForAdmission?: any;
}
const EnquiryForm: React.FC<EnquiryFormProps> = ({ onSubmitHandlerForAdmission }) => {

  const { isLoading: isLoadingForCareer, allCareerData } = useSelector((state: RootState) => state.getCareer);
  const { isLoading: isLoadingForProgram, getProgramDataByCareerId } = useSelector((state: RootState) => state.getProgramByCareerId);

  const { isLoading: isLoadingForState, allStateData } = useSelector((state: RootState) => state.getAllStateData);
  const { isLoading: isLoadingForCity, getCityDataByStateId } = useSelector((state: RootState) => state.getCityByStateId);

  // for select feild
  let careerData: any = [];
  let programData: any = [];
  let stateData: any = [];
  let cityData: any = [];

  if (!isLoadingForCareer) {
    careerData = allCareerData;
  }

  if (!isLoadingForProgram) {
    programData = getProgramDataByCareerId;
  }

  if (!isLoadingForState) {
    stateData = allStateData;
  }

  if (!isLoadingForCity) {
    cityData = getCityDataByStateId;
  }

  //  Without ID's API's
  useEffect(() => {
    store.dispatch(getAllCareer());
    store.dispatch(getAllState());
  }, [store.dispatch]);



  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    let StateId = value;
    // with -ID API's
    console.log("stateId===", StateId)
    store.dispatch(getAllCityByStateId(StateId));
  };

  const handleProgramChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    let CareerId = value;

    console.log("CareerId", CareerId)
    // with -ID API's
    store.dispatch(getAllProgramByCareerId(CareerId)); // Program fetch based on Program-ID
  };



  return (

    <section className={`${Classes["enquiry_form_footer"]} mt-10 lg:mt-20 lg:pl-10 pr-5 `}>
      <div className={` relative`}>
        <div className={`${Classes["enquiry_form_bg"]}`}>
          <img src="/anual-fest.jpeg" className={`${Classes["img-fluid"]}`} alt="Enquiry Form" />
        </div>
        <div className={`${Classes["container"]}`}>
          <div className={`${Classes["enquiry_form_inner"]}  `}>
            <div className={`${Classes["enquiry_form_left"]} mt-[3rem] lg:mt-0 `}>
              <img src={girlImg} className="aspect-[1/0.9] object-cover " alt="Enquiry" />
            </div>
            <div className={`${Classes["enquiry_form_right"]}`}>
              <div className="font35 color_white text-white text-[2rem] mb-[1rem] font-base ">Enquiry Form</div>
              <Formik
                initialValues={initialValuesForEnquiry}
                validationSchema={validationSchemaForEnquiry}
                onSubmit={async (values, actions) => {
                  console.log("values", values, actions);

                  const valuesForEnquiry = { values, actions };
                  onSubmitHandlerForAdmission && onSubmitHandlerForAdmission(valuesForEnquiry)
                  store.dispatch(takeActionForEnquiry(actions))


                }}
              >
                {() => (
                  <Form className="mx-[-0.75rem]">
                    <div className="flex flex-wrap w-[100%] ">
                      {EnquiryFormData.map((data) => {
                        return (
                          <div key={data.id} className="mb-[1.5rem] flex flex-col gap-1 w-full md:w-1/3 px-[0.75rem]">
                            <label className="!mb-[0.5rem] text-white">{data.labelname}</label>
                            {data.type === "select" ? (
                              <SelectInputForEnquiry
                                data={data}
                                keyForId={
                                  data.name === "coreStateId"
                                    ? "coreStateId"
                                    : data.name === "coreCityId"
                                      ? "coreCityId"
                                      : data.name === "academicCareerId"
                                        ? "academic_career_id"
                                        : data.name === "academicProgramId"
                                          ? "academic_program_id"
                                          : ""
                                }
                                keyForName={
                                  data.name === "coreStateId"
                                    ? "name"
                                    : data.name === "coreCityId"
                                      ? "name"
                                      : data.name === "academicCareerId"
                                        ? "description"
                                        : data.name === "academicProgramId"
                                          ? "description"
                                          : ""
                                }
                                options={
                                  data.name === "coreStateId"
                                    ? stateData
                                    : data.name === "coreCityId"
                                      ? cityData
                                      : data.name === "academicCareerId"
                                        ? careerData
                                        : data.name === "academicProgramId"
                                          ? programData
                                          : []
                                }
                                onChange={
                                  data.name === "coreStateId" ? (e) => handleStateChange(e) : data.name === "academicCareerId" ? (e) => handleProgramChange(e) : undefined
                                }
                              />
                            ) : (
                              // : data.type === "tel" ? (
                              //   <PhoneInputForEnquiry values={values} name={data.name} placeholder={data.placeholder} isValid={isValid} dirty={dirty} />
                              // ) :
                              <>
                                <Field
                                  type={data.type}
                                  name={data.name}
                                  placeholder={data.placeholder}
                                  className="h-[3.2rem] px-[0.75rem] py-[0.375rem] bg-white border border-[#ced4da] rounded-md w-full focus:outline-none placeholder:text-gray-900"
                                />
                                <ErrorMessage name={data.name} component="div" className="text-red-500 text-sm" />
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="px-[0.75rem] w-full">
                      <div className="mt-[1.5rem]">
                        <div className="flex gap-x-2 items-start text-white mt-4">
                          <Field type="checkbox" name="consent" className="mt-1.5 block" />
                          <p>I authorize SRM Group and its representatives to Call, SMS, Email or Whatsapp me about the programs and scholarships offered.</p>
                        </div>
                        <ErrorMessage name="consent" component="div" className="text-red-500 text-sm mt-1" />
                        <button
                          type="submit"
                          className="mt-8 w-full text-center bg-[#ffb703] border-2 border-[#ffb703] hover:border-white hover:bg-transparent hover:text-white text-xl lg:text-[22px] font-semibold px-5 lg:px-8 py-3 rounded-md text-nowrap"
                        >
                          <div>Submit</div>
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default EnquiryForm;
