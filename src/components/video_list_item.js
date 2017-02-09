import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // son sitaxis de ES6 podemos remplasar el props por el contenido de props, en este caso es .video y de esta forma evitamos poner la siguiente linea que es sacar el valor de video dentro de props y guardarlo en una constante.
  // const video = props.video;

  //console.log(video);
  // no interesa sacar el snippet Object
  const imageUrl = video.snippet.thumbnails.default.url;

  return(
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
