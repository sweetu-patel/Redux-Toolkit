import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: { amount: 0 },
  reducers: {
    Deposit: (state, action) => {
      state.amount = state.amount + action.payload;
    },
    Withdraw: (state, action) => {
      state.amount = state.amount - action.payload;
    },
  },
});

export const { Deposit, Withdraw } = CartSlice.actions;

export default CartSlice.reducer;
