import React from 'react'

var backgroundImageCSS = {
}

class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron text-center eat-header-caption">
        <div className="container">
          <div className="row" >
            <div className="caption">
              <h1>EatWell</h1>
              <h2>Eat what you love...</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header
