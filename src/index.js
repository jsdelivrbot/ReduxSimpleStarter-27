//para importar react al archivo, el return <div>Hola!</div>; es JSX y en realidad regresa JS con referencia al modulo de react.
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// como estamos importando un componente que nosostros creamos entonces tenemos que especificar toda la ruta se este componente. A diferencia de los imports de arriba, ya que los imports de arriba son package que instalamos con npm.
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// api key para hacer request a youtube
const API_KEY = 'AIzaSyAPBW29xL-BfL8lHca1yUspMwJBlXvHOxE';

// YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
//   console.log(data);
// });

//crear un nuevo componente. produce HTML
//se puso const en vez de var por que no se piensa cambiar el valors de App
// const App = function(){ y const App = () => {  es lo mismo
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('muse - madness');
  }

  // term es el video a buscar que ingreso el ususario
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // this.setState({ videos }); //si el key y value tienen el mismo nombre se puede dejar de esta forma.
      // cada vez que se manda a llamar el setState en el constructor entonces se vuelve a hacer render a la pagina.
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  // videos lo estamos pasando como props a VideoList
  render() {
    // con _.debounce le pasamos la funcion para buscar videos y la limitamos para que solo pueda ser corrida 1 vez cada 300 mili segundos
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400);

    return (
      <div>
        <SearchBar onSearchTermChange = { videoSearch }  />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo}) }
          videos = {this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and put it on the page (in the DOM)
//para mandar App como instancia en vez de una clase con encapsulamos con < />
// '.container' se refiere a <div class="container"></div> en body del archivo index.html en la raiz del proyecto.
ReactDOM.render(<App />, document.querySelector('.container'));
