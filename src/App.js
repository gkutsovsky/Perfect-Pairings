import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };

  }

  handleChange(event) {
    console.log("hello World");
  }


  componentDidMount(){
    fetch("https://api.otreeba.com/v1/strains")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        this.setState({
          isLoaded: true,
          items: result.data
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }


  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <select onChange={this.handleChange} >
          {items.map(item =>(
            <option key={item.name} value={item}>
              {item.name}

            </option>

          ))}
        </select>







        // <ul>
        //   {items.map(item =>(
        //     <li key={item.name}>
        //       {item.name}
        //       <img src={item.image}></img>
        //
        //     </li>
        //   ))}
        // </ul>
      );
    }
  }
}

export default App;
