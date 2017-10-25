import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <div>Hello React.js!</div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
