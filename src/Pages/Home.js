import React, { Component } from 'react';
import '../App.css';
import './Home.css';




class Home extends Component {
  handleChange(e){
    const { getCurrentItem, history } = this.props;
    getCurrentItem(JSON.parse(e.target.value));
    history.push('/pairings')
  }


  render() {
    const { error, isLoaded, items } = this.props;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
      return (
        <div>
          <select defaultValue={JSON.stringify(items[0])} onChange={e => this.handleChange(e)}>
            {items.map(item =>(
                <option name={JSON.stringify(item)} key={item.name} value={JSON.stringify(item)}>
                {item.name}
                </option>
              ))}
          </select>
        </div>

      );
    // }
  }
}

export default Home;
