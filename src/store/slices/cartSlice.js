import { createSlice } from "@reduxjs/toolkit";

export const cartSclice = createSlice({
    name:'cartSlice',
    initialState:{
        carts:[],
    },
    reducers:{
        add_to_cart: function(state,{payload:product}){
            let temp = JSON.parse(JSON.stringify(product))
            let check = state.carts.find((i)=>i.id === product.id);
            if(check){
                check.qty++;
            }else{
                temp.qty = 1;
                state.carts.push(temp);
            }
        },
        update_cart: (state,{payload})=>{
            const {qty , product} = payload;
            let check = state.carts.find((i)=>i.id === product.id);
            if(check){
                check.qty = qty;
            }
        },
    }
})

export default cartSclice.reducer;