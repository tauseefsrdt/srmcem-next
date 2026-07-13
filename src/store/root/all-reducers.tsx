import { submissionForEnquiryReducer } from "../enquiry-form/Enquiry-submission-slice";
import { getAllCareerReducer } from "../enquiry-form/get-all-career-slice";
import { getAllCityByStateIdReducer } from "../enquiry-form/get-allCity-byStateId-slice";
import { getAllProgramByCareerIdReducer } from "../enquiry-form/get-allprogram-byCareerId-slice";
import { getAllStateReducer } from "../enquiry-form/get-allState-slice";
import { uiReducer } from "../ui/ui-slice";
import getNoticeReducer from "../notice/noticeSlice";
import { getTestimonialSliceReducer } from "../testimonial/testimonialSlice";
import { eventsSliceReducer } from "../events/eventsSlice";
const allReducer = {
  ui: uiReducer,
  getNotice: getNoticeReducer,
  createEnquiryForEnquiry: submissionForEnquiryReducer,
  getCareer: getAllCareerReducer,
  getProgramByCareerId: getAllProgramByCareerIdReducer,
  getAllStateData: getAllStateReducer,
  getCityByStateId: getAllCityByStateIdReducer,
  getTestimonial: getTestimonialSliceReducer,
  getAllEvents: eventsSliceReducer,
};
export default allReducer;
