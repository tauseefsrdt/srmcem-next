import { createSlice } from "@reduxjs/toolkit";
import { getTestimonial } from "./testimonialThunk";
interface initialStateTypes{
    loading: boolean;
    success: boolean ,
    data: any[],
    error:null | string
}
const initialState:initialStateTypes={
    loading:false,
    success:false,
    data:[],
    error:null
}
const testimonialSlice = createSlice({
    name: "notice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTestimonial.pending, (state) => {
                state.loading = true;
                state.success = false
            })
            .addCase(getTestimonial.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; // direct array of notices
                state.success = true
            })
            .addCase(getTestimonial.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const getTestimonialSliceReducer = testimonialSlice.reducer;