import React from "react";
import './scss/tour.scss';
import NavBar from "./navbar";


function Tour (){
    return (
        <div>
            <section>
                <div className="wrapper_tickets">
                    <h2>РАСПИСАНИЕ КОНЦЕРТОВ</h2>
                    <div className="content_tickets">
                        <img src="./assets/ticket_search.svg" alt=""/>
                        <h3>НЕТ ПРЕДСТОЯЩИХ КОНЦЕРТОВ</h3>
                    </div>
                    <div className="title_content_info_tickets">
                        <h2>ПРОШЕДШИЕ КОНЦЕРТЫ</h2>
                    </div>
                    <div className="content_info_tickets">
                        <div className="content_info_tickets_left">
                                <p>27 октября 2019</p>
                                <p>20:00</p>
                        </div>
                        <div className="content_info_tickets_mid">
                            <p>Санкт-Петербург, Россия</p>
                            <p>Opera Concert Club</p>
                        </div>
                        <div className="content_info_tickets_right">
                            <button>ИНФОРМАЦИЯ</button>
                        </div>
                    </div>
                    <div className="content_info_tickets">
                        <div className="content_info_tickets_left">
                                <p>26 октября 2019</p>
                                <p>19:00</p>
                        </div>
                        <div className="content_info_tickets_mid">
                            <p>Москва, Россия</p>
                            <p>Клуб Москва</p>
                        </div>
                        <div className="content_info_tickets_right">
                            <button>ИНФОРМАЦИЯ</button>
                        </div>    
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Tour;