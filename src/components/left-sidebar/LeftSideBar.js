import React, { useState } from "react";
import styles from './LeftSideBar.module.css';
import { Link, useHistory, useLocation } from "react-router-dom";
import { constants } from '../../constants';

export const LeftSideBar = () => {
  const history = useHistory();
  const searchParams = useLocation().search.replace('?', '');
  const query = constants.searchQuery(searchParams);

  // Uncontrolled inputs
  // const onFormSubmit = (e) => {
  //   e.preventDefault();
  //
  //   const priceGte = e.target[0].value;
  //   const priceLte = e.target[1].value;
  //
  //   history.push(`/products?gte=${priceGte}&lte=${priceLte}`);
  // }

  // Controlled inputs

  const [priceData, setPriceData] = useState({
    priceFrom: '',
    priceTo: '',
  });

  const updatePriceData = (e) => {
    const { target: { value, name } } = e;
    setPriceData({
      ...priceData,
      [name]: value
    });
  };

  const onSubmitHandler = () => {
    setPriceData({
      // ...priceData,
      priceFrom: '',
      priceTo: ''
    });

    const priceGte = priceData.priceFrom;
    const priceLte = priceData.priceTo;

    const currentQueryFunc = (searchParams) => {
      const currentQuery = {};
      const currentQueryArray = searchParams.split('&');
      console.log(currentQueryArray, 'queryString');

      currentQueryArray.forEach(el => {
        const items = el.split('=');
        console.log(items, 'items of QueryString')

        for (let i = 0; i < items.length; i++) {
          const item = items[i];

          if (!(i % 2)) currentQuery[item] = items[i + 1];
          // console.log(currentQuery)
        }
      })
      return currentQuery;
    };

    const currentQuery = currentQueryFunc(searchParams);
    console.log(currentQuery, 'currentQuery')
    const newQuery = { priceGte, priceLte };
    console.log(newQuery, 'newQuery')

    const newQueryObj = !!searchParams ? { ...currentQuery, ...newQuery } : {  ...newQuery };
    console.log(newQueryObj, 'newQueryObj')

    const newQueryString = JSON
      .stringify(newQueryObj).
      replaceAll(':', '=').
      replaceAll(',', '&').
      replaceAll('"', '').
      replace('{', '').
      replace('}', '');
    console.log(newQueryString);

    // !!priceGte && history.push(`/products?${query}priceGte=${priceGte}`);
    // !!priceLte && history.push(`/products?${query}priceLte=${priceLte}`);
    // !!priceGte && !!priceLte && history.push(`/products?${query}priceGte=${priceGte}&priceLte=${priceLte}`);

    // history.push(`/products?${ !!searchParams ? newQueryObj : newQuery }`);
    // history.push(`/products?${ newQueryObj }`);
    history.push(`/products?${ newQueryString }`);
  };

  return (
    <div className={styles.left_sideBar}>
      <div className={styles.left_sideBar_category}>
        <h1>Категория</h1>
        <ul>
          <li><Link
            to={`products?${query}category=${constants.toys_for_toddlers}`}>{constants.toys_for_toddlers}</Link>
          </li>
          <li><Link
            to={`/products?${query}category=${constants.cars_and_special_equipment}`}>{constants.cars_and_special_equipment}</Link>
          </li>
          <li><Link
            to={`/products?${query}category=${constants.strollers_and_dolls}`}>{constants.strollers_and_dolls}</Link>
          </li>
          <li><Link
            to={`/products?${query}category=${constants.creation}`}>{constants.creation}</Link>
          </li>
          <li><Link
            to={`/products?${query}category=${constants.constructors}`}>{constants.constructors}</Link>
          </li>
          <li><Link
            to={`/products?${query}category=${constants.stuffed_toys}`}>{constants.stuffed_toys}</Link>
          </li>
          <li><Link
            to={`/products?${query}category=${constants.board_games}`}>{constants.board_games}</Link>
          </li>
        </ul>
      </div>
      <div className={styles.left_sideBar_filter}>
        <h3>Ценовой фильтр</h3>

        {/*Jsx for uncontrolled inputs*/}
        {/*<form onSubmit={onFormSubmit}>*/}
        {/*  <input type="number" placeholder='Укажите цену "От" ...грн.'/><br/>*/}
        {/*  <input type="number" placeholder='Укажите цену "До" ...грн.'/>*/}
        {/*  <button>Submit</button>*/}
        {/*</form>*/}

        <div>
          <input
            onChange={updatePriceData}
            value={priceData.priceFrom}
            name='priceFrom' type="number"
            placeholder='Укажите цену "От" ...грн.'/><br/>
          <input
            onChange={updatePriceData}
            value={priceData.priceTo}
            name='priceTo' type="number"
            placeholder='Укажите цену "До" ...грн.'/>
          <button onClick={onSubmitHandler}>Подтвердить</button>
        </div>
      </div>
    </div>
  );
};
