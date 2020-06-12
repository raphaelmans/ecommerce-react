import React, {createContext, useReducer} from 'react'


const initialState = {
    itemsOnCart: []
    // {id:0,itemName:'Bird Nerd T-shirt',itemQty:1,itemPrice:20}
}
// Create context
export const GlobalContext = createContext(initialState);

function reducer(state,action){
    switch(action.type){
        case "ADD_TO_CART":
            return {itemsOnCart:[...state.itemsOnCart,action.payload]}
        case "REMOVE_ITEM":
            return {itemsOnCart: state.itemsOnCart.filter((item)=>{return item.id !== action.payload })}
        case "UPDATE_ITEM":
            return {itemsOnCart: state.itemsOnCart.map(item =>{ if(item.id == action.payload){
               return {...item,itemQty:item.itemQty+action.event}
            }
            return {...item}
        })}  
    }
}


export const GlobalProvider = ({children}) =>{

    const [state,dispatch] = useReducer(reducer,initialState);

    const addToCart = (newItem) =>{
        dispatch({type:"ADD_TO_CART",payload:newItem});
    }
    const removeFromCart = (id) =>{
        dispatch({type:"REMOVE_ITEM",payload:id});
    }
    const updateItem = (id,action) =>{
        dispatch({type:"UPDATE_ITEM",payload:id,event:action});
    }


    return(
        <GlobalContext.Provider value={{itemsOnCart: state.itemsOnCart,addToCart,removeFromCart,updateItem}}>
            {children}
        </GlobalContext.Provider>
    )
}

