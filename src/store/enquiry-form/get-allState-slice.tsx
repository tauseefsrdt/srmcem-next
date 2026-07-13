import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coreServicesApi from "../../interceptor/CoreServiceApi";

interface allStateType {
    allStateData: [];
    isLoading: boolean;
    isError: null | string;
}

const initialState: allStateType = {
    allStateData: [],
    isLoading: true,
    isError: null,
};

export const getAllState = createAsyncThunk<any, void, { rejectValue: string }>("getAllStateData", async (_, { rejectWithValue }) => {
    try {
        const response = await coreServicesApi.get(`api/crm/public/core/getAllActiveState`);
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data.message || "An error occurred.");
    }
});

const getAllStateSlice = createSlice({
    name: "coreState-details",
    initialState,
    reducers: {
        resetAllState: (state) => {
            state.allStateData = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllState.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(getAllState.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allStateData = action.payload;
            })
            .addCase(getAllState.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message || "Something went wrong";
            });
    },
});

export const { resetAllState } = getAllStateSlice.actions;
export const getAllStateReducer = getAllStateSlice.reducer;
//getAllStateData