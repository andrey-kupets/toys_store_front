import React, { useState } from "react";
import styles from './LeftSideBar.module.css';
import { Link, useHistory, useLocation } from "react-router-dom";
import { categoriesEnum } from '../../constants';
import { transformQuery } from '../../funtion-helpers';
import { CategoriesFilter } from "../categoriesFilter";
import queryString from "query-string";

export const LeftSideBar = () => {
  const history = useHistory();
  // const searchParams = useLocation().search.replace('?', '');
  const location = useLocation();

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
      ...priceData,
      priceFrom: '',
      priceTo: ''
    });

    let parsed = queryString.parse(location.search);

    delete parsed.page;
    parsed.priceGte = priceData.priceFrom;
    parsed.priceLte = priceData.priceTo;
    if (priceData.priceFrom === '') delete parsed.priceGte;
    if (priceData.priceTo === '') delete parsed.priceLte;

    const stringified = queryString.stringify(parsed);

    // const priceGte = priceData.priceFrom;
    // const priceLte = priceData.priceTo;

    // let newQuery;
    // if (!!priceGte) newQuery = { priceGte };
    // if (!!priceLte) newQuery = { priceLte };
    // if (!!priceGte && !!priceLte) newQuery = { priceGte, priceLte };

    // history.push(`/products?${transformQuery(searchParams, newQuery)}`);
    history.push(`/products?${stringified}`);
  };

  return (
    <div className={styles.left_sideBar}>
      <div className={styles.left_sideBar_category}>
        <h1>Категория</h1>
        {/*1st var*/}
        {/*<ul>*/}
        {/*  {categoriesEnum.map((item) => (*/}
        {/*    <li key={item}>*/}
        {/*      <Link*/}
        {/*        to={`/products?${transformQuery(searchParams, { category: item, page: 1 })}`}>{item}*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}

        {/*2nd var - with Matherial Ui*/}
        <CategoriesFilter/>
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
            name='priceFrom'
            type="number"
            placeholder='Укажите цену "От" ...грн.'/><br/>
          <input
            onChange={updatePriceData}
            value={priceData.priceTo}
            name='priceTo'
            type="number"
            placeholder='Укажите цену "До" ...грн.'/><br/>
          <button onClick={onSubmitHandler}>Подтвердить</button>
        </div>
      </div>
    </div>
  );
};
