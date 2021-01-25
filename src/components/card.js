import React from "react";
import "../styles/card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <span>Name: {this.props.name}</span>
            <br />
            <span>HP: {this.props.hp}</span>
            <br />
            <span>Atack: {this.props.atack}</span>
            <br />
            <span>Defense: {this.props.defense}</span>
            <br />
            <i id="type">* </i> <span>Type: {this.props.type}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
