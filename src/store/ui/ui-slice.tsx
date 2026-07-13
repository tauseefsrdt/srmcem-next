import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface uiSliceType {
    activeIndex: number | null;
    activeTab: number;

}


const initialState: uiSliceType = {
    activeIndex: null,
    activeTab: 0
};

const uiSlice = createSlice({
    name: 'accordion',
    initialState,
    reducers: {
        toggleAccordion: (state, action: PayloadAction<number>) => {
            state.activeIndex = state.activeIndex === action.payload ? null : action.payload;
        },
        onTabChange: (state, action: PayloadAction<number>) => {
            state.activeTab = action.payload;
        }



    },
});

export const { toggleAccordion, onTabChange } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
