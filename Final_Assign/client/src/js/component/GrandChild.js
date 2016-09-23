var React= require('react');
var GrandChild= React.createClass({
  render: function()
  {

    return(<div>
      <h2> I am Grand child </h2>
      <h3>{this.props.d3}</h3>
      <h4>{this.props.d4}</h4>
     </div>)
  }
});
module.exports=GrandChild;
