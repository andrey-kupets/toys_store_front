import React, { useEffect, useMemo, useState } from "react";
import styles from './Main.module.css';
import {
  setProductsData,
  onFirstClick,
  onPrevClick,
  onNextClick,
  onLastClick
} from "../../funtion-helpers";
import { LeftSideBar, ProductsList } from "../../components";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../../components/loading";
import { PaginationWrapper } from "../../components/pagination-wrapper";

const notify = () => toast.success("You may set a price range using component filter or query in URL-holder.");
const notifyError = () => toast.error("Error occurred while loading.");

export const MainBlock = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(null); // если null - можно проверить, происходил ли запрос вообще
  const history = useHistory();

  const [pageData, setPageData] = useState({});

  const searchParams = useLocation().search.replace('?', '');

  useEffect(() => {
    setProductsData(setProducts, setLoading, notify, notifyError, searchParams, setPageData, pageData);
  }, [searchParams]);


  // const onClickHandler = (value) => {
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
  // };

  const onProductClick = (product) => {
    history.push(`/products/${product.id}`);
  };

  return (
    <div className={styles.main_block}>
      {/*div for checking overflow scrolling*/}
      {/*<div style={{height: 1600, background: 'blue'}}>yy</div>*/}
      <LeftSideBar/>
      {/*{children}*/}
      {(loading || loading === null)
        ? <Loading/> :(
          <PaginationWrapper
            currentPage={pageData.page}
            totalPages={pageData.totalPages}
            onPrevClick={() => onPrevClick(history, setPageData, pageData)}
            onNextClick={() => onNextClick(history, setPageData, pageData)}
            onFirstClick={() => onFirstClick(history, setPageData, pageData)}
            onLastClick={() => onLastClick(history, setPageData, pageData)}
          >
            <ProductsList
              items={products}
              onProductClick={onProductClick}
            />
          </PaginationWrapper>
        )
      }
    </div>
  );
};

// window.location
// const { search } = location;
// console.log('location', location);
// console.log('search', search);
//
// const searchParams = search.replace('?', '');
// console.log(searchParams);


// for query value URLSearchParams
// const searchParams = useLocation().search;
// const queryValue = new URLSearchParams(searchParams).get('price')
// console.log(queryValue);
