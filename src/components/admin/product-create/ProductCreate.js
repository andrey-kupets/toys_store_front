import React, { useState } from "react";
import styles from './ProductCreate.module.css';
import { Error } from "../../error";
import { productService } from "../../../services";
import { toastifyHelper } from "../../../funtion-helpers";
import { errorsEnum } from "../../../errors";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { messagesEnum } from "../../../constants";

export const ProductCreate = ({ status }) => {
  const { language } = useSelector(({ language }) => language);
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
  };

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

      const data = { ...productData };

      for (const key in data) {
        if (!data[key]) {
          delete data[key]
        }
      }

      const resData = await productService.createProduct(data, access_token) || {};

      setError(null);
      // toastifyHelper.notify(resData[language]);
      toastifyHelper.notify(messagesEnum.PRODUCT_CREATED[language]); // or through msg.enum if back return an object but not msg

    } catch ({ response: { data } }) {
      setError(errorsEnum[data.customCode][language]);

      toastifyHelper.notifyError(errorsEnum[data.customCode][language]);
    }
  };

  return (
    <div className={styles.product_create_wrapper}>
      <div className={styles.product_create_window}>
        <button className={styles.product_create_btn_close} onClick={() => status('productCreate')}>X</button>
        <h2>?????????????? ??????????????</h2>
        <input
          name='name'
          value={productData.name}
          onChange={createProduct}
          type="text"
          placeholder='????????????????'/>
        <input
          name='category'
          value={productData.category}
          onChange={createProduct}
          type="text"
          placeholder='??????????????????'/>
        <input
          name='price'
          value={productData.price}
          onChange={createProduct}
          type="number"
          placeholder='????????'/>
        <textarea
          name='description'
          value={productData.description}
          onChange={createProduct}
          placeholder='????????????????'/>
        <input
          name='type'
          value={productData.type}
          onChange={createProduct}
          type="text"
          placeholder='??????'/>
        <label>?????????????????? ????????</label>
        <input
          name='img'
          onChange={createProduct}
          type="file"
          placeholder='?????????????????? ????????'/>
        {!!error && <Error error={error}/>}
        <button onClick={onSubmitHandler}>??????????????</button>
      </div>
    </div>
  )
};
