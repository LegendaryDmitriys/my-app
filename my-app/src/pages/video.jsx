import React from "react";
import NavBar from "./navbar";
import './scss/video.scss';

import YoutubeVideo from './modules/YoutubeVideo';


function Video (){
    return(
        <div>
            <section>
                <div className="wrapper-1">
                    <div className="content-video">
                        <div>
                        <YoutubeVideo embedId = "ZKrsXE-D6fg"/>
                        <p>Santiz - mon ami (slowed - reverb)</p>
                        </div>
                        <div>
                            <YoutubeVideo embedId = "4w4oQYQCoVQ"/>
                            <p>Santiz Я не понимал (slowed - reverb)</p>
                        </div>
                        <div>
                            <YoutubeVideo embedId = "dPDqASjipHw"/>
                            <p>Santiz - Моей семье "REMIX"</p>
                        </div>
                        <div>
                            <YoutubeVideo embedId = "V8E03OeM_cU"/>
                            <p>Santiz - @ulukmanapo @santizofficial</p>
                        </div>
                    </div>
                    <div className="content-video">
                        <div>
                            <YoutubeVideo embedId = "1gVwQbRdnzU"/>
                            <p>Santiz ft Kamilov</p>
                        </div>
                        <div>
                            <YoutubeVideo embedId = "LZpOA03sz1o"/>
                            <p>Santiz ft emil</p>
                        </div>
                        <div>
                            <YoutubeVideo embedId = "D-iUr68I3z8"/>
                            <p>Santiz 2014 LİVE</p>
                        </div>
                        <div>
                            <YoutubeVideo embedId = "rvi0seESe2M"/>
                            <p>Santiz Жизнь</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Video;