import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api/axiosinstance";

const noticeAPI = API(9031);

export const getTestimonial = createAsyncThunk(
    "notice/getAll",
    async (_, thunkAPI) => {
        try {
            const res = await noticeAPI.get("/api/testimonials/getAll");
            return res.data.data // ⬅️ your actual notice array
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.response?.data || "Error");
        }
    }
);
