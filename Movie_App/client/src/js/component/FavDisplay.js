var React=require('react');

var MovieDesc=React.createClass(
      {


        searchFunction: function() {
          $.ajax({
            url: 'http://localhost:8080/movie/get',
            dataType: 'json',
            type:'GET',
            cache: false,
            success: function(data) {
              this.setState({data: data});
              this.setState({jsondata: data.Search});
                 }.bind(this),
            error: function(xhr, status, err) {
              console.error("http://localhost:8080/movie/get", status, err.toString());
            }.bind(this)
          });
        },
         render:function(){

                return(<div>
                  <div className="col-md-4">
                            <div className="panel-group" id="panel-652836">
                              <div className="panel panel-default">
                                <div className="panel-heading">
                                   <a className="panel-title" data-toggle="collapse" data-parent="#panel-652836" href="#panel-element-133781">Title</a>
                                </div>
                                <div id="panel-element-133781" className="panel-collapse collapse in">
                                  <div className="panel-body">
                                    {this.props.title}
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
                                                  {this.props.Year}
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
                                                                {this.props.imdbID}
                                                              </div>
                                                            </div>
                                                          </div>
                                                          </div>
                                                          </div>

                                            <div className="col-md-4">
                                            	<img src={this.props.src} alt="HTML5"></img>
                                            </div>
                                            <div className="col-md-4">
<button type="button"  className="btn btn-default" onClick={this.addFunction}>Add123</button>
                                            </div>

                                                                      </div>

                        );
          }
      })

module.exports=MovieDesc;
