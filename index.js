import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Example from './Example'
import store from "./store/index";
import { addArticle } from "./actions/index";

window.store = store;
window.addArticle = addArticle;

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Example></Example>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
