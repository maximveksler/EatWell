import React from 'react'

var captionCSS = {
  position: 'absolute'
  ,top: '45%'
  ,left: 0
  ,width: '100%'
}

var backgroundImageCSS = {
  background: "url(assets/img/cover.png)"
  ,backgroundSize: "cover"
}

class Header extends React.Component {
  render() {
    return (
      <div className="text-center jumbotron"  style={backgroundImageCSS}>
          <div className="row" >
            <div className="col-md-12" >
              <div className="caption" style={captionCSS}>
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
