import React from "react";
import NavBar from "./navbar";
import './scss/video.scss';


function Video (){
    return(
        <div>
            <section>
                <div className="wrapper-1">
                    <div className="content-video">
                        <div>
                            <img src="./assets/video.jpg" alt="" />
                            <p>santiz - mon ami (slowed - reverb)</p>
                        </div>
                        <div>
                            <img src="./assets/video2.jpg" alt="" />
                            <p>santiz Я не понимал (slowed - reverb)</p>
                        </div>
                        <div>
                            <img src="./assets/video3.jpg" alt="" />
                            <p>Santiz - Моей семье "REMIX"</p>
                        </div>
                        <div>
                            <img src="./assets/video4.jpg" alt="" />
                            <p>santiz - @ulukmanapo @santizofficial</p>
                        </div>
                    </div>
                    <div className="content-video">
                        <div>
                            <img src="./assets/video5.jpg" alt="" />
                            <p>santiz ft Kamilov</p>
                        </div>
                        <div>
                            <img src="./assets/video6.jpg" alt="" />
                            <p>santiz ft emil</p>
                        </div>
                        <div>
                            <img src="./assets/video7.jpg" alt="" />
                            <p>Santiz 2014 LİVE</p>
                        </div>
                        <div>
                            <img src="./assets/video8.jpg" alt="" />
                            <p>santiz Жизнь</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Video;