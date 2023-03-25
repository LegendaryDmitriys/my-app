import React from "react";
import NavBar from "./navbar";
import './scss/about.scss';

function About (){
    return (
        <div>
            <section>
                <div className="wrapper">
                    <div className="content">
                        <div className="content-left">
                            <p>Рэпер Santiz ещё не приобрёл широкой известности. Однако в молодёжной рэп-тусовке Егор Парамонов — узнаваемая персона. Егор является частью творческого объединения SECOND SQUAD.</p>
                            <p>Первое время Егор публиковал песни, которые слушали в основном его знакомые. Но в 2018-м он громко заявил о себе, и творчеством стало интересоваться все больше людей, которые были очарованы образом простого парня в кепке.</p>
                            <p>Музыка Егора отличается спокойными ритмами и мелодичностью, большинство его песен представлены в жанрах хип-хоп и рэп, а в текстах раскрываются личные истории артиста, который рассказывает о непростых отношениях. </p>
                        </div>
                        <div className="content-right">
                            <img src="./assets/about_image.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>

        
    )
}

export default About;