import { constants } from "../../constants";
import { useLocation } from "react-router-dom";


const onFirstClick = (history, setPageData, pageData) => {
const searchParams = useLocation().search.replace('?', '');


  setPageData(
    {
      ...pageData,
      page: 1
    }
  );

  history.push(`/products`);
};

const onPrevClick = (history, setPageData, pageData) => {
  if (pageData.page === 1) {
    return;
  }

  setPageData(
    {
      ...pageData,
      page: pageData.page - 1
    }
  );

  history.push(`/products?page=${pageData.page - 1}`);
};

const onNextClick = (history, setPageData, pageData) => {
  if (pageData.page === pageData.totalPages) {
    return;
  }

  setPageData(
    {
      ...pageData,
      page: pageData.page + 1
    }
  );

  history.push(`/products?page=${pageData.page + 1}`);
};

const onLastClick = (history, setPageData, pageData) => {
  setPageData(
    {
      ...pageData,
      page: pageData.totalPages
    }
  );

  history.push(`/products?page=${pageData.totalPages}`);
};

export {
  onFirstClick,
  onPrevClick,
  onNextClick,
  onLastClick,
}
