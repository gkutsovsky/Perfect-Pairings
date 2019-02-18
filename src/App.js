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
    // fetch("https://api.otreeba.com/v1/strains")
    // .then(
    //   (result) => {
    //     console.log(result)
    //     this.setState({
    //       isLoaded: true,
    //       items: result.data
    //     });
    //   },
    //   // Note: it's important to handle errors here
    //   // instead of a catch() block so that we don't swallow
    //   // exceptions from actual bugs in components.
    //   (error) => {
    //     this.setState({
    //       isLoaded: true,
    //       error
    //     });
    //   }
    // )
  }

  getCurrentItem = item => {
    console.log(item)
    this.setState({ currentItem: item })
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
