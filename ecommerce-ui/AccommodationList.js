import React from 'react';
import AccommodationCart from './AccommodationCart';

export default class AccommodationList extends React.Component {
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
                      onClick={this.props.onBookAccommodation}
                      idx={idx}
                      key={idx}
                      buttonText="Book"
                  />
              );
          });

          
      return (
          <div>
              <h2>Accommodation</h2>
                  {accommodationList}
                           
          </div>
      );
  }
}