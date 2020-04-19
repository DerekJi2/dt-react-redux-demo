import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Example from './Example'
import store from "./store/index";
import { addArticle } from "./actions/index";
import { Provider } from "react-redux";

window.store = store;
window.addArticle = addArticle;

/**
 * Tests at console
 */
store.subscribe(() => console.log('Look ma, Redux!!') );
store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );
console.log(store.getState());

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

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
