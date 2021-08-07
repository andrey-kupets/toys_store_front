export const productStorageSetter = (store) => (next) => (action) => {
  next(action);

  const { wishlist, cart } = store.getState();

  // product && localStorage.setItem(`${product.name}`, JSON.stringify(oneProductCountInCart));
  localStorage.setItem('WISHLIST', JSON.stringify(wishlist));
  localStorage.setItem('CART', JSON.stringify(cart));
};
