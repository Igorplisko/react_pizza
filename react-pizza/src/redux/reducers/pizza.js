const initialState = {
   items: [],
   isLoaded: false,

}

const pizza = (state = initialState, action) => {
   if (action.type === 'SET_PIZZA') {
      return {
         ...state,
         sortBy: action.payload,
      }
   }
   return state;
}

export default pizza;