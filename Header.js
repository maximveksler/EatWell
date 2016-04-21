import React from 'react'
import ReactDOM from 'react-dom';

var Header = React.createclassName({
  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img src="http://placehold.it/1000x550" alt="test" className="img-responsive" />
            <div className="carousel-caption">
              <h1>Eat what you love.</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Header
