import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { leadCaptureApi } from "../../interceptor/CoreServiceApi";
import { getMessageAfterColon } from "../../utils/GetErrorMessage";

interface initialStateType {
    isLoading: boolean;
    isError: string | null;
    resetAction: any;
    responseOfenquiry: any;
}

const initialState: initialStateType = {
    isLoading: true,
    isError: null,
    resetAction: "",
    responseOfenquiry: "",
};


export const submissionForEnquiry = createAsyncThunk<any, any>(
    "enquiry-submision",
    async (value, { rejectWithValue }) => {
        try {
            const response = await toast.promise(
                leadCaptureApi.post("rmq/v1/internalLeadCapture", value),
                {
                    loading: "Loading...",
                    success: "Enquiry has been Successfully Sent!",
                    error: (e: any) => {
                        const message = e?.response?.data?.error;
                        return getMessageAfterColon(message) || "Submission failed";
                    },
                }
            );
            return response.data;
        } catch (error: any) {
            console.error(error.message);
            return rejectWithValue(error.message);
        }
    }
);


const submissionEnquirySlice = createSlice({
    name: "enquiry-submission",
    initialState,
    reducers: {
        resetResponseofEnquiry: (state) => {
            state.responseOfenquiry = "";
        },
        takeActionForEnquiry: (state, action) => {
            state.resetAction = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submissionForEnquiry.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(submissionForEnquiry.fulfilled, (state, action) => {
                state.isLoading = false;
                state.responseOfenquiry = action.payload;
            })
            .addCase(submissionForEnquiry.rejected, (state, action) => {
                state.isError = action.error.message || "error occured";
            });
    },
});
export const { resetResponseofEnquiry, takeActionForEnquiry } = submissionEnquirySlice.actions;
export const submissionForEnquiryReducer = submissionEnquirySlice.reducer;

//createEnquiryForEnquiry
