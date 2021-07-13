import React, { useState } from "react";
import styles from './LeftSideBar.module.css';
import { Link, useHistory, useLocation } from "react-router-dom";
import { constants } from '../../constants';
import { transformQuery } from '../../funtion-helpers';

export const LeftSideBar = () => {
  const history = useHistory();
  const searchParams = useLocation().search.replace('?', '');
  const categories = constants.categoryList;

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

    const priceGte = priceData.priceFrom;
    const priceLte = priceData.priceTo;

    let newQuery;
    if (!!priceGte) newQuery = { priceGte };
    if (!!priceLte) newQuery = { priceLte };
    if (!!priceGte && !!priceLte) newQuery = { priceGte, priceLte };

    history.push(`/products?${transformQuery(searchParams, newQuery)}`);
  };

  return (
    <div className={styles.left_sideBar}>
      <div className={styles.left_sideBar_category}>
        <h1>Категория</h1>
        <ul>
          <li><Link name={categories[0]}
            to={`products?${transformQuery(searchParams, { category: categories[0] })}`}>{categories[0]}</Link>
          </li>
          <li><Link
            to={`/products?${transformQuery(searchParams, { category: categories[1] })}`}>{categories[1]}</Link>
          </li>
          <li><Link
            to={`/products?${transformQuery(searchParams, { category: categories[2] })}`}>{categories[2]}</Link>
          </li>
          <li><Link
            to={`/products?${transformQuery(searchParams, { category: categories[3] })}`}>{categories[3]}</Link>
          </li>
          <li><Link
            to={`/products?${transformQuery(searchParams, { category: categories[4] })}`}>{categories[4]}</Link>
          </li>
          <li><Link
            to={`/products?${transformQuery(searchParams, { category: categories[5] })}`}>{categories[5]}</Link>
          </li>
          <li><Link
            to={`/products?${transformQuery(searchParams, { category: categories[6] })}`}>{categories[6]}</Link>
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
