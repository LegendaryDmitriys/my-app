import React from "react";
import './scss/history.scss';

import User_Panel from "./modules/userpanel";
import NavBar from "./navbar";

function HistoryBasket() {
    
    return (
        <div>
            <div className="setting__wrapper">
                <User_Panel/>
                <div className="card">
                    <div className="card__header">
                        <div className="cart-header__type">Товар</div>
                        <div className="cart-header__title">Наименование</div>
                        <div className="cart-header__count">Количество</div>
                        <div className="cart-header__size">Размер</div>
                        <div className="cart-header__cost">Стоимость</div>
                        <div className="cart-header__delete">Дата покупки</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoryBasket;