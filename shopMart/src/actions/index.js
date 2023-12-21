
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const updateToCart = (productId, newQuantity) => ({
  type: 'UPDATE_QUANTITY',
  payload: {
    productId,
    newQuantity,
  },
});

export const removeFromCart = (removedProductId) => ({
  type: 'REMOVE_FROM_CART',
  payload: {
    removedProductId,
  },
});
