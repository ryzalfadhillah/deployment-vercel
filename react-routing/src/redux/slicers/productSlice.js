import { createSlice } from '@reduxjs/toolkit'

const products = [{
    productID: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
    productName: "John",
    productCategory: "Doe",
    productFreshness: "Doe",
    productPrice: "Doe",
    productImg: "",
    additionalDescription: "Doe"}
]

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: products
    },
    reducers: {
        addProduct: (state, action) => {
            state.products = [...state.products, action.payload]
        },
        updateProduct: (state, action) => {
            state.products = action.payload
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter((item) => item.productID !== action.payload);
        }
    }
})

export const { addProduct, updateProduct, deleteProduct } = productSlice.actions
export default productSlice.reducer
