import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api/axiosinstance";

const noticeAPI = API(9031);

export const getNoticeData = createAsyncThunk(
    "notice/getAll",
    async (_, thunkAPI) => {
        try {
            const res = await noticeAPI.get("/notice/allNotice");
            return res.data.data; // ⬅️ your actual notice array
        } catch (err:any) {
            return thunkAPI.rejectWithValue(err.response?.data || "Error");
        }
    }
);
