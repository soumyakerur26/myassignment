var React = require('react');
var trialform = React.createClass({
  render: function()
  {
    return(
      <DisRec> WaveName={this.state.WaveName} WaveType={this.state.WaveType}  Locationn={this.state.Locationn} NoOfParti={this.state.NoOfParti} pStartDate={this.state.pStartDate} pEndDate={this.state.pEndDate} AStartDate={this.state.AStartDate} AEndDate={this.state.AEndDate} MovingOut={this.state.MovingOut}  </DisRec>
    );
    );
  }
})
module.exports= trialform;
//old code
var React = require('react');
var DisRec= require('./DisRec.js');
var formWave= React.createClass({
  getInitialState: function()
  {
    return({wave:{"name":'',"type":'',"location":''}})
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

      </div>
    )
  }
})
module.exports= formWave;
