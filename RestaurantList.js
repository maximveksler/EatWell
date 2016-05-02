import React from 'react'
import Restaurant from './Restaurant'
import RestaurantModel from './RestaurantModel'

class RestaurantList extends React.Component {
  constructor(props) {
    super(props)
    this.displayName = "RestaurantList"
    this.state = {
      selectedRestaurant : 0
    }
  }

  handleSelectedRestaurant(restaurant, i) {
    console.log('selected restaurant ' + i)
    this.setState({ selectedRestaurant: i });
  }

  render() {
    var restaurants = this.props.restaurants.map(
              (restaurant, i) => {
                var selected = (this.state.selectedRestaurant == i)
                return (<Restaurant
                  onClick={this.handleSelectedRestaurant.bind(this, restaurant, i)}
                  model={restaurant}
                  key={i}
                  selected={selected} />)
              })
                            
    return (
      <div className="row">
        <div className="col-md-7">
          <ul className="media-list">
            {restaurants}
          </ul>
        </div>
        <div className="col-md-5">
          <div className="restaurant-map-display">
            <iframe className="restaurant-map-display" height="600vh" frameborder="0" src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyANf9OZ_oX04XoE0DCKSKi5CZvDuUFIzQE&q=" + this.props.restaurants[this.state.selectedRestaurant].address} allowfullscreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}

RestaurantList.defaultProps = {
  restaurants : [
    new RestaurantModel("Moses", "Burger", 2, "Rothschild Blvd 35, Tel Aviv-Yafo")
    ,new RestaurantModel("מזנון", "Pita", 3, "Ibn Gabirol St 23, Tel Aviv-Yafo")
    ,new RestaurantModel("Fresh", "Bari", 1, "Ibn Gabirol St 30, Tel Aviv-Yafo")
    ,new RestaurantModel("Hachim", "Mideterian", 3, "Ibn Gabirol St 12, Tel Aviv-Yafo")
  ]
}

export default RestaurantList
