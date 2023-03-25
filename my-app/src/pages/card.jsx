import React, {useState,useEffect} from "react";
import './scss/card.scss';

import User_Panel from "./modules/userpanel";
import jwt_decode from 'jwt-decode';

function Basket () {

  const [quantity, setQuantity] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [mergedData, setMergedData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("loginToken");
        if (token) {
          const decodedToken = jwt_decode(token);
          const userId = decodedToken.data.user_id;
  
          const basketResponse = await fetch(`http://192.168.0.104/auth-api/basket.php?user_id=${userId}`);
          const basketData = await basketResponse.json();
          const ordersResponse = await fetch(`http://192.168.0.104/orders.php?user_id=${userId}`);
          const ordersData = await ordersResponse.json();
          
          const mergedData = basketData.map(item => {
            const correspondingOrder = ordersData.find(order => order.merch_id === item.id);
            if (correspondingOrder) {
              // Извлекаем информацию о товаре из таблицы `merch` на основе `merch_id`
              const correspondingMerch = basketData.find(merch => merch.id === item.id);
              if (correspondingMerch) {
                return {
                  ...item,
                  selected_size: correspondingOrder.selected_size,
                  discounted_price: correspondingMerch.discounted_price,
                };
              }
            }
            return item;
          });
          
          setMergedData(mergedData);

          const initialQuantity = mergedData.reduce((acc, item) => {
            acc[item.id] = 1;
            return acc;
          }, {});
          setQuantity(initialQuantity);


          let totalPrice = 0;
        mergedData.forEach(item => {
          totalPrice += initialQuantity[item.id] * (item.discounted_price || item.price);
        });
        setTotalPrice(totalPrice);
      }
      } catch (error) {
        console.error("Ошибка при извлечении данных: ", error);
      }
    };
  
    fetchData();
  }, []);

 
 
  
  const handleDelete = async (itemId) => {
    try {
      const token = localStorage.getItem("loginToken");
      if (token) {
        const decodedToken = jwt_decode(token);
        const userId = decodedToken.data.user_id;
        const response = await fetch(
          `http://192.168.0.104/deletproduct.php?user_id=${userId}&item_id=${itemId}`
        );
        const data = await response.json();
  
        // Обновляем состояние mergedData без удаленного товара
        const updatedMergedData = mergedData.filter(item => item.id !== itemId);
        setMergedData(updatedMergedData);
  
        // Удаляем удаленный товар из состояния quantity
        const updatedQuantity = { ...quantity };
        delete updatedQuantity[itemId];
        setQuantity(updatedQuantity);
  
        // Вычисляем общую стоимость всех товаров после удаления
        let totalPrice = 0;
        updatedMergedData.forEach(item => {
          totalPrice += updatedQuantity[item.id] * (item.discounted_price || item.price);
        });
        setTotalPrice(totalPrice);
      }
    } catch (error) {
      console.error("Ошибка при удалении товара: ", error);
    }
  };
  
  
  
  const handleQuantityChange = (change, id, price) => {
    const newQuantity = { ...quantity };
    newQuantity[id] = (newQuantity[id] || 0) + change;
  
    if (newQuantity[id] < 1) {
      return;
    }
  
    setQuantity(newQuantity);
  
    // Вычисляем общую стоимость всех товаров
    let totalPrice = 0;
    mergedData.forEach(item => {
      totalPrice += newQuantity[item.id] * (item.discounted_price || item.price);
    });
  
    setTotalPrice(totalPrice);
  };
  
  
  
  
    return(
        <div>
        <div className="card__wrapper">
          <User_Panel/>
          <div className="card">
            <div className="card__header">
            <div className="cart-header__type">Товар</div>
              <div className="cart-header__title">Наименование</div>
              <div className="cart-header__count">Количество</div>
              <div className="cart-header__size">Размер</div>
              <div className="cart-header__cost">Стоимость</div>
              <div className="cart-header__delete">Удалить</div>
            </div>
            {mergedData.map((item) => (
                <div key={item.id} className="product_card">
                  <div className="product__img"><img src={item.image_url} alt=""/></div>
                  <div className="product__title">{item.name}</div>
                  <div className="product__count">
                    <div className="count">
                      <div className="count__controls">
                        <a onClick={() => handleQuantityChange(-1, item.id)}><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="48"><path d="M200 606v-60h560v60H200Z"/></svg></a>
                        <span>{quantity[item.id] || 1}</span>
                        <a onClick={() => handleQuantityChange(1, item.id)}><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="48"><path d="M450 856V606H200v-60h250V296h60v250h250v60H510v250h-60Z"/></svg></a>
                      </div>
                    </div>
                  </div>
                  <div className="product__size">
                    <div className="card__text">{item.selected_size}</div>
                  </div>
                  <div className="product__price">{item.discounted_price ? item.discounted_price : item.price}</div>
                  <div className="product__controls">
                    <button onClick={() => handleDelete(item.id)}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="#7E9BBD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 6L18 18" stroke="#7E9BBD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
            ))}
            <div className="card__categ-under">
              <div className="basket_total">
                <h2>Общий итог: {totalPrice} <span>₽</span></h2>
              </div>
              <button>Перейти к оплате</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Basket;