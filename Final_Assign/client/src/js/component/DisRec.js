var React = require('react');
var DisRec = React.createClass({
  render: function()
  {
    return(
      <div>
                  <div className="col-md-4">
                            <div className="panel-group" id="panel-652836">
                              <div className="panel panel-default">
                                <div className="panel-heading">
                                   <a className="panel-title" data-toggle="collapse" data-parent="#panel-652836" href="#panel-element-133781">Title</a>
                                </div>
                                <div id="panel-element-133781" className="panel-collapse collapse in">
                                  <div className="panel-body">
                                    {this.props.PStartDate}
                                  </div>
                                </div>
                              </div>
                              </div>
                              </div>
                              <div className="col-md-4">
                                          <div className="panel-group" id="panel-652836">
                                            <div className="panel panel-default">
                                              <div className="panel-heading">
                                                 <a className="panel-title" data-toggle="collapse" data-parent="#panel-652836" href="#panel-element-133781">Year</a>
                                              </div>
                                              <div id="panel-element-133781" className="panel-collapse collapse in">
                                                <div className="panel-body">
                                                  {this.props.Locationn}
                                                </div>
                                              </div>
                                            </div>
                                            </div>
                                            </div>
                                            <div className="col-md-4">
                                                        <div className="panel-group" id="panel-652836">
                                                          <div className="panel panel-default">
                                                            <div className="panel-heading">
                                                               <a className="panel-title" data-toggle="collapse" data-parent="#panel-652836" href="#panel-element-133781">imdbID</a>
                                                            </div>
                                                            <div id="panel-element-133781" className="panel-collapse collapse in">
                                                              <div className="panel-body">
                                                                {this.props.WaveType}
                                                              </div>
                                                            </div>
                                                          </div>
                                                          </div>
                                                          </div>

                                            <div className="col-md-4">
                                            	<img src={this.props.WaveName} alt="HTML5"></img>
                                            </div>


                                                        </div>
    );
  }
})
module.exports= DisRec;
