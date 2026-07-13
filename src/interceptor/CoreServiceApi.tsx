import axios from "axios";
import axiosRetry from "axios-retry";

// Create an Axios instance
const coreServicesApi = axios.create({
    // http://10.8.20.38:7074
    baseURL: "https://crmservices.srmu.ac.in:7074", // Resource Server base URL
    // baseURL: "http://10.8.20.38:7074",
    timeout: 10000,
});

axiosRetry(coreServicesApi, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

export default coreServicesApi;


export const leadCaptureApi = axios.create({
    // baseURL: "http://10.8.20.38:4040",
    baseURL: "https://crmservices.srmu.ac.in:4040",

    timeout: 10000,

})