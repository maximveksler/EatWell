import React from 'react'
import RestaurantModel from './RestaurantModel'

class Restaurant extends React.Component {
  constructor(props) {
    super(props)
    this.displayName = "Restaurant"

    this.model = props.model

    var foodTypeImage = "";
    if (this.model.foodType === "Burger") {
      foodTypeImage = "assets/img/Burger.png"
    } else {
      foodTypeImage = "http://placeponi.es/48/48"
    }

    this.state = {
      foodTypeImage: foodTypeImage
    }
  }

  render() {
    var ratings = [];
    for (var i=0; i < this.model.rating; i++) {
        ratings.push(<span className="glyphicon glyphicon-star" key={i}/>);
    }

    return (
      <li className="media">
        <div className="media-left">
          <img className="media-object" src={this.state.foodTypeImage} />
        </div>

        <div className="media-body">
          <h4 className="media-heading">{this.model.name}</h4>

          <p>
            Rating: {ratings}
          </p>
        </div>
      </li>
    )
  }
}

Restaurant.propTypes = {
  model: React.PropTypes.instanceOf(RestaurantModel)
}

Restaurant.defaultProps = {
  restaurant : new RestaurantModel("NameOfPlace", "Burger", 2)
}

export default Restaurant
