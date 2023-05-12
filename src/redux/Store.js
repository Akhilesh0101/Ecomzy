import { configureStore } from "@reduxjs/toolkit";
import  CartSlice  from "./Slices/CartSlice";


export const store = configureStore({    
    reducer:{
        cart:CartSlice      //key
    }
});



/*configuresStore->A friendly abstraction over the standard Redux createStore
 function that adds good 
defaults to the store setup for a better development */