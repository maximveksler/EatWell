import _ from 'lodash';
import React from 'react'
import RestaurantModel from './RestaurantModel'

class Restaurant extends React.Component {
  constructor(props) {
    super(props)
    this.displayName = "Restaurant"
  }

  iconFromFoodType(foodType) {
    if (foodType === "Burger") {
      return "assets/img/Burger.png"
    } else {
      return "http://placeponi.es/48/48"
    }
  }
  
  render() {
    // helper for code simplicity.
    var model = this.props.model

    // Controller calculats food icon for HTML View presentation.
    var foodTypeImage = this.iconFromFoodType(model.foodType)
    
    // Prepare rating JSX
    var ratings = _.times(model.rating, i => <span className="glyphicon glyphicon-star" key={i} />)

    return (
      <li className="media" onClick={this.props.onClick}>
        <div className="media-left">
          <img className="media-object" src={foodTypeImage} />
        </div>

        <div className={"media-body" + (this.props.selected ? " selected-restaurant-row" : "")}>
          <h4 className="media-heading">{model.name}</h4>

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
  restaurant : new RestaurantModel("NameOfPlace", "Burger", 2, "Dubnov 7, Tel Aviv-Yafo, Israel")
}

export default Restaurant
