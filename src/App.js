import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './menu/Menu';
import {BrowserRouter as Router } from 'react-router-dom';
// import Posts from './posts/Posts';
// import Users from './users/Users';
import RouterApp from './router/RouterApp';



class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
     
    }

  }  
  

  updateState = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({[event.target.name]: value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React + JsonPlaceholder</h1>
        </header>

        <Router>

          <section className="content">
            
            <main className="main">
                <RouterApp /> 
            </main>
            <div className="menu">
              <Menu />
            </div>
          </section>
        </Router>
        

      </div>
    );
  }
}

export default App;
