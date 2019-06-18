import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playerNum: 1,
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: ''
    };
  }

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;
    this.setState(field);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const line = ["The", this.state.adj1, this.state.noun1, this.state.adv, this.state.verb, "the", this.state.adj2, this.state.noun2 + "."].join(" ");
    // console.log(line);
    
    this.props.addLineCallback(line);

    this.setState({
      playerNum: this.state.playerNum + 1,
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: ''
    });
  }

  render() {

    // console.log(this.state);

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.state.playerNum }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit} >

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            The

            <input
              name="adj1"
              value={this.state.adj1}
              placeholder="adjective"
              type="text"
              onChange={this.onChangeHandler} 
            />

            <input
              name="noun1"
              value={this.state.noun1}
              placeholder="noun"
              type="text"
              onChange={this.onChangeHandler} 
            />

            <input
              name="adv"
              value={this.state.adv}
              placeholder="adverb"
              type="text"
              onChange={this.onChangeHandler} 
            />

            <input
              name="verb"
              value={this.state.verb}
              placeholder="verb"
              type="text"
              onChange={this.onChangeHandler} 
            />

            the 

            <input
              name="adj2"
              value={this.state.adj2}
              placeholder="adjective"
              type="text"
              onChange={this.onChangeHandler} 
            />

            <input
              name="noun2"
              value={this.state.noun2}
              placeholder="noun"
              type="text"
              onChange={this.onChangeHandler} 
            />
            .
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
