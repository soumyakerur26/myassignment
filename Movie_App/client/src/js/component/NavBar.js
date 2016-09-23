var React = require('react');
var NavBar = React.createClass({
  render: function()
  {
    return(
      <div>
      <div className="container-fluid">
      	<div className="row">
      		<div className="col-md-12">
      			<ul className="nav nav-tabs">
      				<li className="active">
      					<a href="#">Home</a>
      				</li>
      				<li>
      					<a href="#">Profile</a>
      				</li>
      				<li>
      					<a href="#">Messages</a>
      				</li>
      				<li className="dropdown pull-right">
      					 <a href="#" data-toggle="dropdown" className="dropdown-toggle">Dropdown<strong className="caret"></strong></a>
      					<ul className="dropdown-menu">
      						<li>
      							<a href="#">Action</a>
      						</li>
      						<li>
      							<a href="#">Another action</a>
      						</li>
      						<li>
      							<a href="#">Something else here</a>
      						</li>
      						<li className="divider">
      						</li>
      						<li>
      							<a href="#">Separated link</a>
      						</li>
      					</ul>
      				</li>
      			</ul>
      		</div>
      	</div>
      </div>

      </div>
    )
  }
})
module.exports=NavBar;
