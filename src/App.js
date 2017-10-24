import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style/navstyle.css'
import Home1 from './components/home1'
import { Link } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <div className="topnav" id="myTopnav">
              <Link to="home2"><a>Home 2</a></Link>
              <Link to="home1"><a>Home 1</a></Link>
          </div>
          <div  id="page-wrap">
              {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;
