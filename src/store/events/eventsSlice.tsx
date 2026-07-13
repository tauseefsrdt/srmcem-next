import { createSlice } from "@reduxjs/toolkit";
import { fetchAllEvents } from "./eventsThunk";

interface initialTypes {
    data: any[],
    loading: boolean,
    success: boolean,
    error: null | string;
}
const initialState: initialTypes = {
    data: [],
    loading: false,
    success: false,
    error: null,
};

const eventsSlice = createSlice({
    name: "notice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllEvents.pending, (state) => {
                state.loading = true;
                state.success = false
            })
            .addCase(fetchAllEvents.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; // direct array of notices
                state.success = true
            })
            .addCase(fetchAllEvents.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const eventsSliceReducer = eventsSlice.reducer;