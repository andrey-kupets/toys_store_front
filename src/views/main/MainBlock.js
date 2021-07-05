import React, { useEffect, useState } from "react";
import styles from './Main.module.css';
import { getProducts } from "../../requests-helper";
import { LeftSideBar, ProductsList } from "../../components";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Loading = () => <div className={styles.loading}>Loading...</div>
const notify = () => toast.success("You may set a price range using component filter or query in URL-holder.");
const notifyError = () => toast.error("Error occurred while loading.");

export const MainBlock = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(null); // если null - можно проверить, происходил ли запрос вообще
  const history = useHistory();

  // window.location
  // const { search } = location;
  // console.log(location);
  // console.log('search', search);
  //
  // const searchParams = search.replace('?', '');
  // console.log(searchParams);

  const searchParams = useLocation().search.replace('?', '');
  console.log(searchParams);

  // for query value
  // const searchParams = useLocation().search;
  // const queryValue = new URLSearchParams(searchParams).get('price')
  // console.log(queryValue);

  useEffect(() => {
    getProducts(setProducts, setLoading, notify, notifyError, searchParams);
  }, []);

  const onProductClick = (product) => {
    history.push(`/products/${product.id}`);
  };

  return (
    <div className={styles.main_block}>
      {/*div for checking overflow scrolling*/}
      {/*<div style={{height: 1600, background: 'blue'}}>yy</div>*/}
      <LeftSideBar/>
      {/*{children}*/}
      {loading || loading === null
        ? Loading() :(
          <ProductsList
            items={products}
            onProductClick={onProductClick}
          />
        )
      }
    </div>
  );
};
