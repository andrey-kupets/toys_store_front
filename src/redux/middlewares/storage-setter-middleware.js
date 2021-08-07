export const oneProductStorageSetter = (store) => (next) => (action) => {
  next(action);

  const { oneProductCountInCart } = store.getState().cart;
  const { product } = store.getState().products;

  product && localStorage.setItem(`${product.name}`, JSON.stringify(oneProductCountInCart));
  // localStorage.setItem(`product`, JSON.stringify(oneProductCountInCart));
};
