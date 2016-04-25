import React from 'react'
import RestaurantModel from './RestaurantModel'

class Restaurant extends React.Component {
  constructor(props) {
    super(props)
    this.displayName = "Restaurant"
  }

  render() {
    // helper for code simplicity.
    var model = this.props.model

    // Controller calculats food icon for HTML View presentation.
    var foodTypeImage = "";
    if (model.foodType === "Burger") {
      foodTypeImage = "assets/img/Burger.png"
    } else {
      foodTypeImage = "http://placeponi.es/48/48"
    }

    // Prepare rating JSX
    var ratings = [];
    for (var i=0; i < model.rating; i++) {
        ratings.push(<span className="glyphicon glyphicon-star" key={i}/>);
    }

    return (
      <li className="media" onClick={this.props.onClick}>
        <div className="media-left">
          <img className="media-object" src={foodTypeImage} />
        </div>

        <div className={this.props.selected ? "media-body selected" : "media-body"}>
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
