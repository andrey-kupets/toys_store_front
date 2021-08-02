// import { transformQuery } from "../joinQueries-helper";
//
// const onFirstClick = (history, searchParams) => {
//   history.push(`/products?${transformQuery(searchParams, { page: 1 })}`)
// };
//
// const onPrevClick = (history, searchParams) => {
//   history.push(`/products?${transformQuery(searchParams, { page: pageData.page - 1 })}`)
// };
//
// const onNextClick = (history, setPageData, pageData, searchParams) => {
//   if (pageData.page === pageData.totalPages) {
//     return;
//   }
//
//   setPageData(
//     {
//       ...pageData,
//       page: pageData.page + 1
//     }
//   );
//
//   history.push(`/products?${transformQuery(searchParams, { page: pageData.page + 1 })}`)
// };
//
// const onLastClick = (history, setPageData, pageData, searchParams) => {
//   setPageData(
//     {
//       ...pageData,
//       page: pageData.totalPages
//     }
//   );
//
//   history.push(`/products?${transformQuery(searchParams, { page: pageData.totalPages })}`)
//
// };
//
// export {
//   onFirstClick,
//   onPrevClick,
//   onNextClick,
//   onLastClick,
// }
