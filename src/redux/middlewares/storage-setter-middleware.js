export const productStorageSetter = (store) => (next) => (action) => {
  next(action);

  const { wishlist, cart } = store.getState();

  localStorage.setItem('WISHLIST', JSON.stringify(wishlist));
  localStorage.setItem('CART', JSON.stringify(cart));
};
