import {configureStore} from "@reduxjs/toolkit"
import authRedcer from "./authSlice"
const store=configureStore({
    reducer:authRedcer,
})

export default store    