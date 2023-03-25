import React from "react";
import './scss/albums.scss';
import NavBar from "./navbar";

function Albums (){
    return(
        <div>
            <section>
                <div className="wrapper-cards">
                    <div className="Cards-content">
                        <img src="./assets/screensaver.jpg" alt="" />
                        <div className="content-left">
                            <p>ПРОДОЛЖИТЕЛЬНОСТЬ</p>
                            <p>ДАТА РЕЛИЗА</p>
                        </div>
                        <div className="content-right">
                            <p>10 композиций</p>
                            <p>20 февраля 2019</p>
                        </div>
                    </div>
                    <div className="button">
                    <button>Прослушать</button>
                    </div>
                    <div className="Cards-content">
                        <img src="./assets/screensaver2.jpg" alt="" />
                        <div className="content-left">
                            <p>ПРОДОЛЖИТЕЛЬНОСТЬ</p>
                            <p>ДАТА РЕЛИЗА</p>
                        </div>
                        <div className="content-right">
                            <p>1 композиция, 2:27</p>
                            <p>25 июля 2018</p>
                        </div>
                    </div>
                    <div className="button">
                    <button>Прослушать</button>
                    </div>
                    <div className="Cards-content">
                        <img src="./assets/screensaver3.jpg" alt="" />
                        <div className="content-left">
                            <p>ПРОДОЛЖИТЕЛЬНОСТЬ</p>
                            <p>ДАТА РЕЛИЗА</p>
                        </div>
                        <div className="content-right">
                            <p>1 композиция, 3:04</p>
                            <p>29 ноября 2018</p>
                        </div>
                    </div>
                    <div className="button">
                    <button>Прослушать</button>
                    </div>
                    <div className="Cards-content">
                        <img src="./assets/screensaver4.jpg" alt="" />
                        <div className="content-left">
                            <p>ПРОДОЛЖИТЕЛЬНОСТЬ</p>
                            <p>ДАТА РЕЛИЗА</p>
                        </div>
                        <div className="content-right">
                            <p>1 композиция, 2:47</p>
                            <p>24 Июля 2018</p>
                        </div>
                    </div>
                    <div className="button">
                    <button>Прослушать</button>
                    </div><div className="Cards-content">
                        <img src="./assets/screensaver5.jpg" alt="" />
                        <div className="content-left">
                            <p>ПРОДОЛЖИТЕЛЬНОСТЬ</p>
                            <p>ДАТА РЕЛИЗА</p>
                        </div>
                        <div className="content-right">
                            <p>1 композиция, 3:13</p>
                            <p>2018</p>
                        </div>
                    </div>
                    <div className="button">
                    <button>Прослушать</button>
                    </div><div className="Cards-content">
                        <img src="./assets/screensaver6.jpg" alt="" />
                        <div className="content-left">
                            <p>ПРОДОЛЖИТЕЛЬНОСТЬ</p>
                            <p>ДАТА РЕЛИЗА</p>
                        </div>
                        <div className="content-right">
                            <p>1 композиция, 3:32</p>
                            <p>31 июля, 2020</p>
                        </div>
                    </div>
                    <div className="button">
                    <button>Прослушать</button>
                    </div>
                </div>
            </section>
        </div>
    )

    







}

export default Albums;