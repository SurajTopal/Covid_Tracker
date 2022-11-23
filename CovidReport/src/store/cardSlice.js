const {createSlice} = require('@reduxjs/toolkit');

const cartSlice = createSlice({
  name: 'cart',
  initialState: 'NaN',
  reducers: {
    add(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const {add} = cartSlice.actions;
export default cartSlice.reducer;
