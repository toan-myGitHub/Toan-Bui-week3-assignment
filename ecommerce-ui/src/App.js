import React, { Component } from 'react';
import './App.css';
import ShoppingCart from './ShoppingCart';
import AccommodationList from './AccommodationList';
import airbnbs from './airbnbs.json';

class App extends Component {

  state = {
    airbnbs,
    selectedAccommodation: []

  }

  bookAccommodation = (idx) => {
    const selectedAccomm = this.state.airbnbs[idx];
    if (this.state.selectedAccommodation.includes(selectedAccomm)) {
      alert('You already selected that accommodation.');
      return;
    }
    
    this.setState(prevState => {
      return {
        selectedAccommodation: [...prevState.selectedAccommodation, selectedAccomm]
      };
    });
  }

  deleteAccommodation = (idx) => {    
    this.setState(prevState => {
      const selectedAccommodation = [...prevState.selectedAccommodation];
      selectedAccommodation.splice(idx, 1);

      return {
        selectedAccommodation
      };
    });
  }

  render() {
    return (
      
<div class="wrapper">
  <div class="shoppingcart">
 <ShoppingCart
          accommodation={this.state.selectedAccommodation}
          onDeleteAccommodation={this.deleteAccommodation}
        />
  </div>
  <hr />
  <div class="accommodation">
   <AccommodationList
          accommodation={this.state.airbnbs}
        onBookAccommodation={this.bookAccommodation}
        />
  </div>
</div>

    );
  }
}
export default App;
