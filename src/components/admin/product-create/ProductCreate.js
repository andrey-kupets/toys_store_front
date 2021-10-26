import React, { useState } from "react";
import styles from './ProductCreate.module.css';
import { Error } from "../../error";
import { productService } from "../../../services";
import { toastifyHelper } from "../../../funtion-helpers";
import { errorsEnum } from "../../../errors";
import { useSelector } from "react-redux";

export const ProductCreate = ({status}) => {
  const { language } = useSelector(({language}) => language);
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    type: '',
    img: ''
  });


  const createProduct = (e) => {
    const { target: { name, value, type, files } } = e;
    if (type === 'number') {
      setProductData({
        ...productData,
        [name]: +value
      });
      return;
    }

    if (type === 'file') {
      setProductData({
        ...productData,
        [name]: files[0]
      })
      return;
    }

    setProductData({
      ...productData,
      [name]: value
    });
  }

  const onSubmitHandler = async () => {
    const access_token = JSON.parse(localStorage.getItem('access_token'));

    try {
      setProductData({
        ...productData,
        name: '',
        category: '',
        price: '',
        description: '',
        type: '',
        img: '', // isn't to be cleared
      });

      const resData = await productService.createProduct(productData, access_token) || {};

      // setError(null);
      // toastifyHelper.notify(resData[language]); // or through msg.enum

      // history.push('/');
    // } catch ({ response: { data } }) {
    } catch (e) {
      console.log(e)
      // setError(errorsEnum[data.customCode][language]);
      //
      // toastifyHelper.notifyError(errorsEnum[data.customCode][language]);
    }
  };

  return (
    <div className={styles.product_create_wrapper}>
      <div className={styles.product_create_window}>
        <button className={styles.product_create_btn_close} onClick={() => status('productCreate')}>X</button>
        <h2>Создать продукт</h2>
        <input
          name='name'
          value={productData.name}
          onChange={createProduct}
          type="text"
          placeholder='Название'/>
        <input
          name='category'
          value={productData.category}
          onChange={createProduct}
          type="text"
          placeholder='Категория'/>
        <input
          name='price'
          value={productData.price}
          onChange={createProduct}
          type="number"
          placeholder='Цена'/>
        <textarea
          name='description'
          value={productData.description}
          onChange={createProduct}
          placeholder='Описание'/>
        <input
          name='type'
          value={productData.type}
          onChange={createProduct}
          type="text"
          placeholder='Тип'/>
        <label>Загрузить фото</label>
        <input
          name='img'
          onChange={createProduct}
          type="file"
          placeholder='Загрузить фото'/>
        {/*{!!error && <Error error={error}/>}*/}
        <button onClick={onSubmitHandler}>Создать</button>
      </div>
    </div>
  )
};
