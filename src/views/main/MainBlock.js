import React, { useEffect, useState } from "react";
import styles from './Main.module.css';
import { getProducts } from "../../requests-helper";
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

  const [pageData, setPageData] = useState(null); // если null - можно проверить, происходил ли запрос вообще

  const searchParams = useLocation().search.replace('?', '');
  // console.log(searchParams);

  useEffect(() => {
    getProducts(setProducts, setLoading, notify, notifyError, searchParams, setPageData);
  }, []);

  const onProductClick = (product) => {
    history.push(`/products/${product.id}`);
  };

  console.log(pageData)
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
            onPrevClick={(page) => console.log(page)}
            onNextClick={(page) => console.log(page)}>
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
