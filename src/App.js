import React, { Component } from 'react';
import { Router, Link, Route } from 'react-router-dom';
import axios from 'axios';
import history from './history';
import Home from './Pages/Home';
import Pairings from './Pages/Pairings';
import './App.css';

class App extends Component {
  state = {
    items: [],
    currentItem: {},
    isLoaded: false,
    error: null,
  }

  async componentDidMount(){
    const { data } = await axios.get("https://api.otreeba.com/v1/strains")
    console.log(data)
    this.setState({ items: data.data })
  }

  getCurrentItem = (item, newPath) => {
    console.log(item)
    this.setState({
      currentItem: item },
      () => { history.push('/pairings')
    })
  }

  render() {
    console.log(history)
    const { items, isLoaded, error, currentItem } = this.state
      return (
        <Router history={history}>

          <div className = "navigation">
          <div id = "home">
              <Link to="/">Home</Link>
              </div>
              <div id = "pairings">
              <Link to="/pairings">Pairing</Link>
              </div>


            <div>
              <Route exact path="/" render={() => <Home history={history} getCurrentItem={this.getCurrentItem} items={items} isLoaded={isLoaded} error={error} />} />
              <Route path="/pairings" render={() => <Pairings currentItem={currentItem} />} />
            </div>
          </div>
        </Router>

      );
    }
  }

export default App;
