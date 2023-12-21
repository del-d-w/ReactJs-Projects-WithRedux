// const initialState = {
//     cartItems: [],
//   };
  
//   const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         return {
//           ...state,
//           cartItems: [...state.cartItems, action.payload],
//         };
//       case 'UPDATE_QUANTITY':
//       const { productId, newQuantity } = action.payload;
//       return {
//         ...state,
//         cartItems: state.cartItems.map((item) =>
//           item.id === productId ? { ...item, quantity: newQuantity } : item
//         ),
//       };
//       case 'REMOVE_FROM_CART':
//       const { removedProductId } = action.payload;
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((item) => item.id !== removedProductId),
//       };
//       default:
//         return state;
//     }
//   };
  
//   export default cartReducer;

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the item is already in the cart
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (existingItem) {
        // If the item is already in the cart, update the quantity
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        const newItem = { ...action.payload, quantity: 1 };
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }

    case 'UPDATE_QUANTITY':
      const { productId, newQuantity } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        ),
      };

    case 'REMOVE_FROM_CART':
      const { removedProductId } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== removedProductId),
      };

    default:
      return state;
  }
};

export default cartReducer;

