const initialState = {
    cartData:[]
}

function dataReducer(state, action){
    switch(action.type){
        case "add_to_cart":
            
            return {
                cartData:[...state.cartData, action.payload]
            }
        case "remove_from_cart":
            return{
                
                ...state,
                cartData:state.cartData.filter(item=> item.id !== action.payload.id)
            }

        default:
            return state;
    }
}

export {
    initialState,
    dataReducer,
}