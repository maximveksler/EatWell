import React from 'react'
import ReactDOM from 'react-dom';
import Header from './Header'

var App = React.createClass({
  render: function() {
    return (
      <Header />
//      <div>Hello World</div>
    )
  }
})

//ReactDOM.render(<App />, document.getElementById('app'));
export default App
