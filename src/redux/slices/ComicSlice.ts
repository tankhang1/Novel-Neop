import {createSlice} from '@reduxjs/toolkit';

const initialValue = {
  curLanguage: 'English',
};
const ComicSlice = createSlice({
  name: 'ComicSlice',
  initialState: initialValue,
  reducers: {
    changeLanguage: (state, action) => {
      state.curLanguage = action.payload;
      return state;
    },
  },
});

export const {changeLanguage} = ComicSlice.actions;

export default ComicSlice.reducer;
