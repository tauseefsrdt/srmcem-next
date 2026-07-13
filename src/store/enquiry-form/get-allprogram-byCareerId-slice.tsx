import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coreServicesApi from "../../interceptor/CoreServiceApi";

interface ProgramType {
    getProgramDataByCareerId: [];
    isLoading: boolean;
    isError: null | string;
}

const initialState: ProgramType = {
    getProgramDataByCareerId: [],
    isLoading: true,
    isError: null,
};

export const getAllProgramByCareerId = createAsyncThunk<any | string, any>("getProgram-byCareerId", async (CareerId, { rejectWithValue }) => {
    try {
        const response = await coreServicesApi.get(`api/crm/public/srmcem/programs/${CareerId}`);
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data.message || "An error occurred.");
    }
});

const getAllProgramByCareerIdSlice = createSlice({
    name: "get-AllProgram-byCareerId",
    initialState,
    reducers: {
        resetProgramDataByCareerId: (state) => {
            state.getProgramDataByCareerId = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProgramByCareerId.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(getAllProgramByCareerId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.getProgramDataByCareerId = action.payload;
            })
            .addCase(getAllProgramByCareerId.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message || "Something went wrong";
            });
    },
});

export const { resetProgramDataByCareerId } = getAllProgramByCareerIdSlice.actions;
export const getAllProgramByCareerIdReducer = getAllProgramByCareerIdSlice.reducer;
//getProgramByCareerId