export const logger = (store) => (next) => (action) => {
  console.log(action);
  const result = next(action);

  console.log(store.getState().products); // стор отрабатывает синхронно

  return result;
};
