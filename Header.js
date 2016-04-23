import React from 'react'
import ReactDOM from 'react-dom';

var captionCSS = {
  position: 'absolute',
  top: '45%',
  left: 0,
  width: '100%'
}

var Header = React.createClass({
  render: function() {
    return (
      <div className="text-center jumbotron"  style={{ "backgroundImage": "url(assets/img/cover.png)" }}>
        <div className="container-fluid">
          <div className="row" >
            <div className="col-md-12" >

              <div className="caption" style={captionCSS}>
                <h1>EatWell</h1>
                <h2>Eat what you love.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Header
