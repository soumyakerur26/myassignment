var React= require('react');
var SearchBox= React.createClass({

  getInitialState:function()
  {
              return{name:''};
    },
     storeValue : function(e)
    {

           this.setState({name: e.target.value});

    },
    searchFunction :function(){

             this.props.searchFunction(this.state.name);
           },

    render: function()
    {
      return(
        <div className="container" id="main">
        <form className="navbar-form">
					<input type="text" className="form-control" placeholder="Search here..." id="searchInput" value={this.state.name} onChange={this.storeValue} ></input>
				</form>

        <div className="col-md-4">
                                <button type="button"  className="btn btn-default" onClick={this.searchFunction}>Submit1</button>
                          </div>

        </div>
      )
    }
})
module.exports=SearchBox;
