import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "productinfo",
  initialState: {
    productData: [],
    userInfo: null,
    toggle:true

  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteFromCart: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload._id
      );
    },
    resetCart:(state)=>{
        state.productData=[]

    },
    incrementQuantity:(state,action)=>{
        const item=state.productData.find((item)=>item._id === action.payload._id)
        if(item){
            item.quantity ++;
        }

    },
    decrementQuantity:(state,action)=>{
        const item=state.productData.find((item)=>item._id === action.payload._id)
        if(item){
            item.quantity --;
        }

    },
    //------------add user---------
    addUser:(state,action)=>{
      state.userInfo=action.payload

    },
    //------------remove user
    removeUser:(state)=>{
      state.userInfo=null

    },
    setdarkTheme:(state)=>{
      state.toggle=true

  },
  setLightTheme:(state)=>{
      state.toggle=false

  }
    
  },
});

// Export all the actions
export const { addToCart, deleteFromCart,resetCart ,incrementQuantity,decrementQuantity,addUser,removeUser,setdarkTheme,setLightTheme} = productSlice.actions;

export default productSlice.reducer;
