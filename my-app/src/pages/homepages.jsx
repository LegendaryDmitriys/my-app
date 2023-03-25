import React from "react";
import './scss/home.scss';

function Home () {
    return (
        <body>
    <section className='Header'>
        <header>
            <a href=""><img src="./assets/office.svg" alt="" /></a>
            <ul>
                <li><a href="">ГЛАВНАЯ</a></li>
                <li><a href="">АЛЬБОМЫ</a></li>
                <li><a href="">ТУР</a></li>
                <li><a href="">ВИДЕО</a></li>
                <li><a href="">АРХИВ</a></li>
                <li><a href="">ОБ АРТИСТЕ</a></li>  
            </ul>
        </header>
  </section>
    <section className='Homepage'>
        <div className='content'>
        <div className='content-left'>
            <img src="./assets/santiz.svg" alt="" />
            <img src="./assets/home.svg" alt="" />
        </div>
        <div className='content-right'>
            <img src="./assets/Whale.svg" alt="" />
        </div>
        </div>
    </section>
    <footer>
        <div>
        <p><a href="">Privacy policy</a></p>
        <a href=""><img src="./assets/telegram.svg" alt="" /></a>
        <a href=""><img src="./assets/instagram.svg" alt="" /></a>
        <a href=""><img src="./assets/vk.svg" alt="" /></a>
        </div>
    </footer>
  </body>
    )
} 

export default Home;