import React from "react";
import axios from "axios";

const urlBase = "https://pokeapi.co/api/v2/pokemon/";
var pokemonInicial = {
  id: 0,
  name: "",
  base_experience: 0,
  height: 0,
  weight: 0,
  hp_name: "",
  hp_stat: 0,
  at_name: "",
  at_stat: 0,
  df_name: "",
  df_stat: 0,
  sa_name: "",
  sa_stat: 0,
  sd_name: "",
  sd_stat: 0,
  sp_name: "",
  sp_stat: 0,
  img_big: "",
  img_small: "",
  type: "",
};

class Pokemon extends React.Component {
  state = { name: "", pokemon: pokemonInicial };

  componentDidMount() {
    this.setState({ ...this.state, pokemon: pokemonInicial });

    axios
      .get(urlBase + this.props.name)
      .then((response) => {
        var pokemon = {
          id: response.data.id,
          name: response.data.name,
          base_experience: response.data.base_experience,
          height: response.data.height,
          weight: response.data.weight,
          hp_name: response.data.stats[0].stat.name,
          hp_stat: response.data.stats[0].base_stat,
          at_name: response.data.stats[1].stat.name,
          at_stat: response.data.stats[1].base_stat,
          df_name: response.data.stats[2].stat.name,
          df_stat: response.data.stats[2].base_stat,
          sa_name: response.data.stats[3].stat.name,
          sa_stat: response.data.stats[3].base_stat,
          sd_name: response.data.stats[4].stat.name,
          sd_stat: response.data.stats[4].base_stat,
          sp_name: response.data.stats[5].stat.name,
          sp_stat: response.data.stats[5].base_stat,
          img_big: response.data.sprites.other.home.front_default,
          img_small: response.data.sprites.front_default,
          type: response.data.types[0].type.name,
        };

        this.setState({ ...this.state, pokemon: pokemon });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.name !== prevProps.name) {
      this.componentDidMount();
    }
  }

  render() {
    return (
      <>
        <h1>Detalles de pokémon</h1>

        <div className="card" style={{ width: 300 }}>
          <div className="card-header">
            {this.state.pokemon.name.toUpperCase()}
          </div>
          <img
            src={this.state.pokemon.img_big}
            alt={this.state.pokemon.name}
            className="card-img-top"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Caracteristicas</h5>
            <p className="card-text"></p>

            <p>Identificador:{this.state.pokemon.id}</p>
            <p>Experiencia:{this.state.pokemon.base_experience}</p>
            <p>Altura:{this.state.pokemon.height}</p>
            <p>Peso:{this.state.pokemon.weight}</p>
            <p>Tipo:{this.state.pokemon.type}</p>
            <p>Estadistica</p>
          </div>

          <p>{this.state.pokemon.hp_name}</p>

          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: this.state.pokemon.hp_stat }}
              aria-valuenow={this.state.pokemon.hp_stat}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {this.state.pokemon.hp_stat}
            </div>
          </div>
          <br />

          <p>{this.state.pokemon.at_name}</p>
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: this.state.pokemon.at_stat }}
              aria-valuenow={this.state.pokemon.at_stat}
              aria-valuemin="0"
              aria-valuemax="300"
            >
              {this.state.pokemon.at_stat}
            </div>
          </div>
          <br />

          <p>{this.state.pokemon.df_name}</p>
          <div className="progress">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: this.state.pokemon.df_stat }}
              aria-valuenow={this.state.pokemon.df_stat}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {this.state.pokemon.df_stat}
            </div>
          </div>
          <br />

          <p>{this.state.pokemon.sa_name}</p>
          <div className="progress">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: this.state.pokemon.sa_stat }}
              aria-valuenow={this.state.pokemon.sa_stat}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {this.state.pokemon.sa_stat}
            </div>
          </div>

          <br />

          <p>{this.state.pokemon.sd_name}</p>

          <div className="progress">
            <div
              className="progress-bar bg-dark"
              role="progressbar"
              style={{ width: this.state.pokemon.sd_stat }}
              aria-valuenow={this.state.pokemon.sd_stat}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {this.state.pokemon.sd_stat}
            </div>
          </div>

          <br />
          <p>{this.state.pokemon.sp_name}</p>
          <div className="progress">
            <div
              className="progress-bar bg-Light"
              role="progressbar"
              style={{ width: this.state.pokemon.sp_stat }}
              aria-valuenow={this.state.pokemon.sp_stat}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {this.state.pokemon.sp_stat}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Pokemon;
