export const transformQuery = (searchParams, newQuery) => {
  const currentQuery = {};
  const currentQueryArray = searchParams.split('&');

  currentQueryArray.forEach(el => {
    const items = el.split('=');

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (!(i % 2)) currentQuery[item] = items[i + 1];
    }
  })

  const newQueryObj = !!searchParams ? { ...currentQuery, ...newQuery } :{ ...newQuery };
  return Object.entries(newQueryObj).map(el => el.join('=')).join('&');
};
