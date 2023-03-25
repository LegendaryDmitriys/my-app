import React from "react";
import { Link } from "react-router-dom";
import './scss/navbar.scss';

function NavBar () {
    return(
        <header>
        <div className="wrapper">
            <img src="./assets/santiz_logo.svg" alt="" />
            <ul>
                <Link to="/"><li>ГЛАВНАЯ</li></Link>
                <Link to="albums"><li>АЛЬБОМЫ</li></Link>
                <Link to="tour"><li>ТУР</li></Link>
                <Link to="video"><li>ВИДЕО</li></Link>
                <Link to="archive"><li>АРХИВ</li></Link>
                <Link to="about"><li>ОБ АРТИСТЕ</li></Link>
                <Link to="merch"><li>МЕРЧ</li></Link>
            </ul>
            <div className="social_network">
                <a href=""><img src="./assets/telegram.svg" alt="" /></a>
                <a href=""><img src="./assets/instagram.svg" alt="" /></a>
                <a href=""><img src="./assets/vk.svg" alt="" /></a>
            </div>
        </div>
    </header>
    )
}

export default NavBar;