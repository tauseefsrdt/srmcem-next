import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coreServicesApi from "../../interceptor/CoreServiceApi";

interface allCareerType {
    allCareerData: [];
    isLoading: boolean;
    isError: null | string;
}

const initialState: allCareerType = {
    allCareerData: [],
    isLoading: true,
    isError: null,
};

export const getAllCareer = createAsyncThunk<any, void, { rejectValue: string }>("getAllCareerData", async (_, { rejectWithValue }) => {
    try {
        const response = await coreServicesApi.get(`api/crm/public/srmcem/careers`);
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data.message || "An error occurred.");
    }
});

const getAllCareerSlice = createSlice({
    name: "coreCareer-details",
    initialState,
    reducers: {
        resetAllCareer: (state) => {
            state.allCareerData = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCareer.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(getAllCareer.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allCareerData = action.payload;
            })
            .addCase(getAllCareer.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message || "Something went wrong";
            });
    },
});

export const { resetAllCareer } = getAllCareerSlice.actions;
export const getAllCareerReducer = getAllCareerSlice.reducer;
//getCareer