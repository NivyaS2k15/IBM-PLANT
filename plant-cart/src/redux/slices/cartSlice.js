import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name: 'cartItems',
    initialState: [],
    reducers: {
        addToCart: (state, actionBycomponent) => {
            const existingProduct = state.find(item => item.id == actionBycomponent.payload.id)
            if (existingProduct) {
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingproduct = state.filter(item => item.id != existingProduct.id)
                state = [...remainingproduct, existingProduct]

            } else {
                state.push({ ...actionBycomponent.payload, quantity: 1, totalPrice: actionBycomponent.payload.price })
            }
        },
        incrementByQuantity: (state, actionByCart) => {

            const existingProduct = state.find(item => item.id == actionByCart.payload)

            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingproduct = state.filter(item => item.id != existingProduct.id)
            state = [...remainingproduct, existingProduct]



        },
         decrementByQuantity: (state, actionByCart) => {

            const existingProduct = state.find(item => item.id == actionByCart.payload)

            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingproduct = state.filter(item => item.id != existingProduct.id)
            state = [...remainingproduct, existingProduct]



        },

        removeCartItem:(state,actionbyCart)=>{
           
          return   state.filter(item=>item.id!=actionbyCart.payload)

        },
        emtyCart: (state)=>{
           return state=[]
        }

        

    }


       


    })

export const { addToCart,incrementByQuantity ,decrementByQuantity,removeCartItem,emtyCart} = cartSlice.actions
export default cartSlice.reducer