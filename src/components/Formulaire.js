import React, { Component } from 'react';

class Formulaire extends Component {

  state = {
    length: this.props.length
  }

  createMessage = (e) => {
    e.preventDefault();

    const message = {
      message: this.message.value,
      pseudo: this.props.pseudo
    };

    this.props.addMessage(message);
    this.messageForm.reset();
    const length = this.props.length;
    this.setState({ length });
  };

  compteur = (e) => {
    const length = this.props.length - this.message.value.length;
    this.setState({ length });
  };

  render() {
    return (
        <form className="form" onSubmit={(e) => this.createMessage(e)} ref={input => this.messageForm = input}>
          <textarea maxLength={this.props.length} ref={input => this.message = input} onChange={(e) => this.compteur(e)} required></textarea>
          <div className="info">{this.state.length}</div>
          <button type="submit">Envoyer</button>
        </form>
    );
  }

  static propTypes = {
    addMessage: React.PropTypes.func.isRequired,
    pseudo: React.PropTypes.string.isRequired,
    length: React.PropTypes.number.isRequired
  };
}

export default Formulaire;