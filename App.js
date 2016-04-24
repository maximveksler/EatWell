import React from 'react'
import Header from './Header'
import RestaurantList from './RestaurantList'

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <RestaurantList />
      </div>
    )
  }
}

export default App
