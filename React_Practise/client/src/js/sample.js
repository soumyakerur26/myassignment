var React= require('react');
var ReactDom=require('react-dom');
var MyComponent=React.createClass({
  render: function()
  {
    return(
      <div>
      <h1> My second Component</h1>
      </div>
    )
  }
})
ReactDom.render(< MyComponent />, document.getElementById('app'));
