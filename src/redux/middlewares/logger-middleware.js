export const logger = (store) => (next) => (action) => {
  console.log(action, 'ACTION');
  const result = next(action);

  console.log(store.getState().wishlist, 'STORE.WISHLIST after ACTION'); // стор отрабатывает синхронно

  return result;
};
