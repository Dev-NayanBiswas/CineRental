```javascript
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
```


#### *Breakdown the Complexity*

1.  ***Explaining State :***, the ***state*** is nothing but initialState in primary Stage, meaning
    -  `initialState = state = { cartData:[ ] }`
2. ***Explaining Action :*** It's an object consisting element ***type*** and ***payload***
3. ***Explaining Addition part :***
   - `case "add_to_cart":return {cartData:[...state.cartData, action.payload]}` in this part, checking if the action.type is "add-to-cart", then destructuring the currentState object{} and updating the `cartData` array.
   - Now creating a new array with all existed cardData elements of state object `[...state.cartData]`
   - `[...state.cartData, action.payload]` adding `action.payload` element in cartData and creating a new Array which has all previous and updated data.
4. ***Explaining Delete part :***
   - `case "remove_from_cart":return{...state, cartData:state.cartData.filter(item=> item.id !== action.payload.id)`
   - In this part, if it matched the criteria of action type, then it will update the existed array which is in state object, so as we shouldn't mutate the origin value, creating a swallow copy of state object by `{...state}`,
   - then inside the cartData array modifying it with conditions,
   - Question is why doing it `cartData: state.cartData.filter()` instead of `cartData:[...state.cartData.filter()]`, cause filter will return an array by default so the value of first on would be in an array like `cartData:[]` and the second one will return and array inside another array `cartData:[[]]` which one is unexpected.
   - `sate.cartData.filter(item => item.id !== action.payload.id)` applying filter array method on cartData array which is inside state object, we are crating a new array which one has all elements of `cartData` array except that one matches the id.
  5. If none of these action type matches, it returns the state as it is....     


***

[_Feel Free to Visit_](https://cinerentalwithlwsts.netlify.app/, '')