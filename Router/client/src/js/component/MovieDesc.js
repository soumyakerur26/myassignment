var React=require('react');

var MovieDesc=React.createClass(
      {


        addFunction: function() {
          console.log("add function called"+this.props.movieData);
          $.ajax({
            url: 'http://localhost:8080/movie/add',
            dataType: 'json',
            type:'POST',
            cache: false,
            data : this.props.movieData,
            success: function(data) {
                console.log("data posted");
                 }.bind(this),
            error: function(xhr, status, err) {
              console.error("http://localhost:8080/movie/add", status, err.toString());
            }.bind(this)
          });
        },

         render:function(){

                return(<div>
                  <div className="container-fluid">
 	<div className="row">
 		<div className="col-md-8 col-lg-4 col-sm-4">

      <div className="imagemovie">
      <img src={this.props.src} alt="HTML5"></img>
      </div>


 		</div>
 		<div className="column">
 			<div className="panel panel-default">
 				<div className="panel-heading">
 					<h3 className="panel-title">
 						 Title
 					</h3>
 				</div>
 				<div className="panel-body">
 					{this.props.title}
 				</div>

 			</div>
 			<div className="panel panel-default">
 				<div className="panel-heading">
 					<h3 className="panel-title">
 						Year
 					</h3>
 				</div>
 				<div className="panel-body">
 					{this.props.Year}
 				</div>

 			</div>
 			<div className="panel panel-default">
 				<div className="panel-heading">
 					<h3 className="panel-title">
 						imdbID
 					</h3>
 				</div>
 				<div className="panel-body">
 					{this.props.imdbID}
 				</div>

 			</div>
 		</div>
 	</div>
  <button type="button"  className="btn btn-default" onClick={this.addFunction}> add </button>
 </div>


                                                  </div>

                        );
          }
      })

module.exports=MovieDesc;
