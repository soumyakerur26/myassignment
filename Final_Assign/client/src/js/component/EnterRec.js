var React = require('react');
var DisRec= require('./DisRec.js');
var EnterRec= React.createClass({
  getInitialState: function()
  {
     var wave = {"name":'', "type":'',"location":''};
    return({wave});
  },
  setTheState: function(e,arg)
  {
    this.setState({arg:e.target.value})
  },

  render: function()
  {
    return(
  <div>
  <div className="container" >
          <form className="navbar-form">
    <input type="text" className="form-control" placeholder="Wave Name" id="searchInput1" value={this.state.wave[name]} onChange={this.setTheState(wave[name])} ></input>
          </form>


                  <form className="navbar-form">
                    <input type="text" className="form-control" placeholder="Wave type" id="searchInput2" value={this.state.wave[type]} onChange={this.setTheState(wave[type])} ></input>
                  </form>


                          <form className="navbar-form">
                      <input type="text" className="form-control" placeholder="location" id="searchInput3" value={this.state.wave[location]} onChange={this.setTheState(wave[location])} ></input>
                          </form>
                          </div>

        </div>);


  }
})
module.exports= EnterRec;
