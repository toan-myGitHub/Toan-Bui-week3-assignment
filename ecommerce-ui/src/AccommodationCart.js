import React from 'react';

export default class AccommodationCart extends React.Component {
    render() {
        const {title, 
            image, 
            houseType, 
            city,
            country,
            cost,
            description,
            name,
            isSuperhost,
            stars,
            reviews,
            onClick, idx, buttonText} = this.props;
        return (           
          <div class='Accommodation-card'> 
          <img src={image} alt='' class='Accommodation-img'></img>
          <div class="Accommodation-container">
          <h4>{title}</h4>
          <b>Type</b>: {houseType}

          <br></br><b>Location</b>: {city}, {country}
                <p><b>Cost</b>: ${cost}
                <br></br>{description}
                </p><p><b>Host</b>: {name}
                <br></br><b>Is Host a Superhost</b>: {isSuperhost}
                <br></br><b>Rating</b>: {stars} Star
                <br></br><b>Reviews</b>: {reviews}
                </p>

<p><button onClick={() => onClick(idx)}>{buttonText}</button>
</p>

          
          </div>
</div>     
        )
    }

  

}
