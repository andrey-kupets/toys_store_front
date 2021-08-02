import React, { useEffect } from "react";
import styles from './Main.module.css';
import { loadProductsData } from "../../funtion-helpers";
import { LeftSideBar, ProductsList } from "../../components";
import { useHistory, useLocation } from "react-router-dom";
import { Loading } from "../../components/loading";
import { PaginationWrapper } from "../../components/pagination-wrapper";
import { NoSearchResults } from "../../components/noResults-search";
import { useDispatch, useSelector } from "react-redux";

export const MainBlock = ({ children }) => {
    const { pages, page, products, loading } = useSelector(({ counter, products }) => ({ ...counter, ...products }));
  // const { products, loading } = useSelector(({ products }) => products);
  // const { pages, page } = useSelector(({ counter }) => counter);

    const dispatch = useDispatch();
    const history = useHistory();
    const searchParams = useLocation().search.replace('?', '');
    // let prefLang = 'en'; // todo redux

    useEffect(() => {
      loadProductsData(dispatch, searchParams);
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
  }
;

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
