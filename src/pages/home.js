import React from "react";
import Card from "../components/card.js";
import "../styles/home.css";
import Logo from "../img/pokemon.png";

class Home extends React.Component {
  state = {
    name: "",
    img: "#",
    moves: [],
    namepok: "",
    type: "",
    hp: "",
    atack: "",
    defense: "",
  };

  Api = async () => {
    let url = `https://pokeapi.co/api/v2/pokemon/${this.state.name}`;

    let response = await fetch(url);

    let data = await response.json();

    if (this.state.name == "") {
      this.setState({
        img: "#",
      });
    } else {
      this.setState({
        img: data.sprites.front_default,
        moves: data.moves,
        namepok: data.name.toUpperCase(),
        type: data.types[0].type.name,
        hp: data.stats[0].base_stat,
        atack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.Api();
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value.toLowerCase() });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <img src={Logo} alt="" id="logo" />
          <form onSubmit={this.handleSubmit}>
            <br />
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Ingrese el nombre del pokemon"
              id="inputpoke"
              className="mt-5"
              required
            />
            <button className="btn btn-danger" id="submit" type="submit">
              Buscar
            </button>
          </form>
          <br />
          {this.state.name.length > 2 && (
            <Card
              img={this.state.img}
              atack={this.state.atack}
              hp={this.state.hp}
              defense={this.state.defense}
              name={this.state.namepok}
              type={this.state.type}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
