import React from 'react'
import Restaurant from './Restaurant'
import RestaurantModel from './RestaurantModel'

class RestaurantList extends React.Component {
  constructor() {
    super()
    this.displayName = "RestaurantList"

    this.state = {
      restaurants : [
        new RestaurantModel("Moses", "Burger", 2)
        ,new RestaurantModel("המזנון", "Pita", 3)
        ,new RestaurantModel("Fresh", "Bari", 1)
        ,new RestaurantModel("Hachim", "Mideterian", 3)
      ]
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-7">
          <ul class="media-list">
            {this.state.restaurants.map(function(restaurant, i) {
              return <Restaurant model={restaurant} key={i} />
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default RestaurantList