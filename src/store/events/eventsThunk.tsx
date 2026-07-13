import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api/axiosinstance";
const noticeAPI = API(9031);
export const fetchAllEvents = createAsyncThunk("events/getAll", async (_, thunkAPI) => {
  try {
    const res = await noticeAPI.get("/event/allEvent");
    return res.data.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response?.data || "Error");
  }
});
