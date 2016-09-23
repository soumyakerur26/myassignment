var React = require('react');
var ReactDom = require('react-dom');
var ChildComponent= require('./component/ChildComponent');
var ChildComponent1= require('./component/ChildComponent1');
var MainComponent = React.createClass({
  getInitialState: function()
  {
    return(
    {stateData:'State Data'}
  );
  },

   handleClick: function(NewData)
   {
    stateData:this.setState({stateData:NewData})
   },

  render: function(){
    return(
      <div>
      <h2> Hello from React Hi</h2>
      <ChildComponent  handleClick={this.handleClick} />
      <ChildComponent1  stateData={this.state.stateData} />

        </div>

    )
  }
})
ReactDom.render(<MainComponent />,document.getElementById('app'));
