import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
};

const Slice = createSlice({
  name: "tableRowClickedId",
  initialState,
  reducers: {
    setId: (state, action) => {
      const data = {
        clickedRow: action.payload,
      };
      state.id = data.clickedRow;
    },
  },
});

export const { setId } = Slice.actions;
export default Slice.reducer;
