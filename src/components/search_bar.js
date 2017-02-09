import React, { Component } from 'react';
// { Component } es equivalente a poner:
// const Component = React.Component

//se cambio por una clase en vez de una funcion por que ocupamos refenciar el input.
class SearchBar extends Component {
  constructor(props) {
    super(props);
    // dentro de state podemos guardar nuestra variable, en este caso la llamamos 'term'
    this.state = { term: '' };
  }

  //cada clase debe tener un render() function
  render() {
    // Se puede utilizar "arrow functions" como en la segunda linea o se puede mandar a llamar el metodo onInputChange, la primera opcion es la mas corta y con menos codigo ya que no tienes que declarar un metodo y luego mandarlo a llamar.
    // return <input onChange={this.onInputChange} />;
    // return <input onChange={(event) => console.log(event.target.value)} />;
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange = {(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  //creacion de nuevo metodo para utilizarlo como handler del onChange del input
  //el event de parametro contiene informacion del evento cuando se mando a llamar.
  onInputChange(term) {
    // console.log(term);
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

// export sirve para que cualquier otro componente que implemente SearchBar obtenga ese componente.
export default SearchBar;
