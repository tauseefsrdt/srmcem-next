import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coreServicesApi from "../../interceptor/CoreServiceApi";

interface StateType {
    getCityDataByStateId: [];
    isLoading: boolean;
    isError: null | string;
}

const initialState: StateType = {
    getCityDataByStateId: [],
    isLoading: true,
    isError: null,
};

export const getAllCityByStateId = createAsyncThunk<any | string, any>("getCity-byId", async (StateId, { rejectWithValue }) => {
    try {
        const response = await coreServicesApi.get(`api/crm/public/core/getAllActiveCityByStateId/${StateId}`);
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data.message || "An error occurred.");
    }
});

const getAllCityByStateIdSlice = createSlice({
    name: "get-AllStateByid",
    initialState,
    reducers: {
        resetCityDataByStateId: (state) => {
            state.getCityDataByStateId = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCityByStateId.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(getAllCityByStateId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.getCityDataByStateId = action.payload;
            })
            .addCase(getAllCityByStateId.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message || "Something went wrong";
            });
    },
});

export const { resetCityDataByStateId } = getAllCityByStateIdSlice.actions;
export const getAllCityByStateIdReducer = getAllCityByStateIdSlice.reducer;
//getCityByStateId