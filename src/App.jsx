import React from 'react'; //didnt mention to do this
import './App.css';

class App extends React.Component { //functions are just as powerful as classes now
  constructor(props) { 
    super(props);
    this.state = {
      list: ["ready", "set", "GO"],
      text: ""
    };
    this.onSubmit = this.onSubmit.bind(this); // not necessary can because "old"
  }

  onSubmit = (e) => { // arrow function already handles the bind, with ES6+
    e.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.text]
    });
  }

  render() {
    return (
      <div>
        <h1>HelloWorld</h1>
        <form onSubmit={this.onSubmit}> {/*can just add prop here*/}
          <input 
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
          ></input>
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
