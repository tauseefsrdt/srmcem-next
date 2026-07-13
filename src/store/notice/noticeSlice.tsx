import { createSlice } from "@reduxjs/toolkit";
import { getNoticeData } from "./noticeThunk";
export interface NoticeType {
    id: number;
    title: string;
    description: string;
    documentFile: string;
    createdAt: string;
    updatedAt: string;
    status: string;
    createdBy: number;
    updatedBy: number;
    publishedAt: string | null;
}

export interface initialTypes {
    data: NoticeType[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState:initialTypes = {
    data: [],
    loading:false,
    success:false,
    error: null,
};

const noticeSlice = createSlice({
    name: "notice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getNoticeData.pending, (state) => {
                state.loading =true ;
                state.success=false
            })
            .addCase(getNoticeData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; // direct array of notices
                state.success = true
            })
            .addCase(getNoticeData.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default noticeSlice.reducer;
