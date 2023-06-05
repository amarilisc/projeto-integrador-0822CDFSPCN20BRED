import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name:'cart',
    initialState:{
        quantidade:0
    },
    reducers:{
        setQuantidade:(state) => {
            state.quantidade += 1
        }
    }
})

export const { setQuantidade } = slice.actions

export const selectCart = (state) => state.cart

export default slice.reducer