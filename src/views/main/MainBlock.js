import React, { useEffect } from "react";
import styles from './Main.module.css';
import { LeftSideBar, ProductsList } from "../../components";
import { useHistory, useLocation } from "react-router-dom";
import { Loading } from "../../components";
import { PaginationWrapper } from "../../components";
import { NoSearchResults } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { loadProductsData } from "../../redux";

export const MainBlock = ({ children }) => {
  const { pages, page, products, loading } = useSelector(
    ({ pagination, products }) => ({ ...pagination, ...products }));
  const dispatch = useDispatch();
  const history = useHistory();
  const searchParams = useLocation().search.replace('?', '');

  useEffect(() => {
    dispatch(loadProductsData(searchParams));
  }, [searchParams]);

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
        ? <Loading/>
        :(
          <PaginationWrapper
            page={page}
            pages={pages}
            searchParams={searchParams}
          >
            {!!searchParams && !products.length && <NoSearchResults/>}
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
