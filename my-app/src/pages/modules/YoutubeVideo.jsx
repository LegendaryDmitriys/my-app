import React from 'react';

const YoutubeVideo = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="336"
      height="180"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allowFullScreen 
      title="Embedded youtube video"
    />
  </div>
);

export default YoutubeVideo;
