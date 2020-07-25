import React from 'react';
import './App.css';
import { render } from 'react-dom';

class AddTwoNumbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    let input = event.target.name;
    let value = event.target.value;
    if (!Number(value)){
      alert("You must input a number");
    }
    this.setState({[input]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let input1 = parseInt(this.refs.input1.value);
    let input2 = parseInt(this.refs.input2.value);
    if ( !Number(input1) || !Number(input2)){
      alert("You must enter two numbers!");
    } else {
      this.setState({value: (input1 + input2)});
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="number">
          <label>
            Enter First Number: 
            <input id="input1" ref="input1" name="input1" type="text" pattern="[0-9]*" value={this.state.input1} onChange={this.handleChange} />
          </label>
          <label>
            Enter Second Number: 
            <input id="input2" ref="input2" name="input2" type="text"  pattern="[0-9]*" value={this.state.input2} onChange={this.handleChange} />
          </label>
          <label>
            Result: 
            <input id="result" type="text" name="result" ref="result" value={this.state.value} readOnly={true}/>
          </label>
          <br/>
          <input id="submit-button" name="click-button" type="submit" disabled={!this.state.input1 || !this.state.input2} value="Display Result" />
        </div>
      </form>
    );
  }
}

export default AddTwoNumbers;
