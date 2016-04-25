import React from 'react'
import Header from './Header'
import RestaurantList from './RestaurantList'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <RestaurantList />
      </div>
    )
  }
}

export default App
