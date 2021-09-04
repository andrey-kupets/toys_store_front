export const logger = (store) => (next) => (action) => {
  console.log(action, 'ACTION');
  const result = next(action);

  console.log(store.getState(), 'STORE after ACTION'); // стор отрабатывает синхронно

  return result;
};
