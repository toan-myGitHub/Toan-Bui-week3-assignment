import React from 'react';
import AccommodationCart from './AccommodationCart';

class ShoppingCart extends React.Component {
    render() {
        const accommodationList = this.props.accommodation
            .map((accommodation, idx) => {
                return (               
                  <AccommodationCart
                  title={accommodation.title}
                  image={accommodation.image}                  
                  houseType={accommodation.houseType}
                  city={accommodation.location.city}
                  country={accommodation.location.country}
                  cost={accommodation.payment.cost}
                  description={accommodation.payment.description}
                  name={accommodation.host.name}
                  isSuperhost={accommodation.host.isSuperhost.toString()}
                  stars={accommodation.rating.stars}
                  reviews={accommodation.rating.reviews}
                  onClick={this.props.onDeleteAccommodation}
                  idx={idx}
                  key={idx}
                  buttonText="Remove"
              />

                );
            });

        return (
            <div>
                <h2>Shopping Cart</h2>               
                    {accommodationList}
                
            </div>
        );
    }
}

export default ShoppingCart;