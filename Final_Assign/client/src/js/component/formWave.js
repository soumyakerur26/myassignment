var React = require('react');
var DisRec= require('./DisRec.js');
var formWave= React.createClass({
  callIt: function()
  {
    this.props.callIt();
  },
  getInitialState: function()
  {
    return{"WaveName":'',"WaveType":'',"Locationn":'',"NoOfParti":'',"PStartDate":'',"PStartDate":'',"PEndDate":'',"AStartDate":'',"AEndDate":'',"MovingOut":''}
  },
  storeValue1 : function(e)
   {

          this.setState({WaveName: e.target.value});

   },
   storeValue2 : function(e)
    {

           this.setState({WaveType: e.target.value});

    },
    storeValue3 : function(e)
     {

            this.setState({Locationn: e.target.value});

     },
     storeValue4 : function(e)
      {

             this.setState({NoOfParti: e.target.value});

      },
      storeValue5 : function(e)
       {

              this.setState({PStartDate: e.target.value});

       },
       storeValue6 : function(e)
        {

               this.setState({PEndDate: e.target.value});

        },
        storeValue7 : function(e)
         {

                this.setState({AStartDate: e.target.value});

         },
         storeValue8 : function(e)
          {

                 this.setState({AEndDate: e.target.value});

          },
          storeValue9 : function(e)
           {

                  this.setState({MovingOut: e.target.value});

           },
  render: function()
  {
    return(
  <div>
    <div className="container" id="main">
        <form className="navbar-form">

					<input type="text" className="form-control" placeholder="Wave Name" id="searchInput" value={this.state.WaveName} onChange={this.storeValue1} ></input>
				</form>
        </div>
        <div className="container" id="main">
            <form className="navbar-form">
    					<input type="text" className="form-control" placeholder="Wave Type" id="searchInput" value={this.state.WaveType} onChange={this.storeValue2} ></input>
    				</form>
            </div>
            <div className="container" id="main">
                <form className="navbar-form">
        					<input type="text" className="form-control" placeholder="Location" id="searchInput" value={this.state.Locationn} onChange={this.storeValue3} ></input>
        				</form>
                </div>
                <div className="container" id="main">
                    <form className="navbar-form">
            					<input type="text" className="form-control" placeholder="Number of participants." id="searchInput" value={this.state.NoOfParti} onChange={this.storeValue4} ></input>
            				</form>
                    </div>
                    <div className="container" id="main">
                        <form className="navbar-form">
                					<input type="text" className="form-control" placeholder="planned start date" id="searchInput" value={this.state.PStartDate} onChange={this.storeValue5} ></input>
                				</form>
                        </div>
                        <div className="container" id="main">
                            <form className="navbar-form">
                    					<input type="text" className="form-control" placeholder="Planned end date" id="searchInput" value={this.state.PEndDate} onChange={this.storeValue6} ></input>
                    				</form>
                            </div>
                            <div className="container" id="main">
                                <form className="navbar-form">
                        					<input type="text" className="form-control" placeholder="actual start date" id="searchInput" value={this.state.AStartDate} onChange={this.storeValue7} ></input>
                        				</form>
                                </div>
                                <div className="container" id="main">
                                    <form className="navbar-form">
                            					<input type="text" className="form-control" placeholder="actual end date." id="searchInput" value={this.state.AEndDate} onChange={this.storeValue8} ></input>
                            				</form>
                                    </div>
                                    <div className="container" id="main">
                                        <form className="navbar-form">
                                					<input type="text" className="form-control" placeholder="No of particiants moving out" id="searchInput" value={this.state.MovingOut} onChange={this.storeValue9} ></input>
                                				</form>
                                        </div>
                      


        </div>);


  }
})
module.exports= formWave;
