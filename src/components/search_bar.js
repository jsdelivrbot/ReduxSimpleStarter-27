import React, { Component } from 'react';
// { Component } es equivalente a poner:
// const Component = React.Component

//se cambio por una clase en vez de una funcion por que ocupamos refenciar el input.
class SearchBar extends Component {
  //cada clase debe tener un render() function
  render() {
    return <input />;
  }
}

// export sirve para que cualquier otro componente que implemente SearchBar obtenga ese componente.
export default SearchBar;
