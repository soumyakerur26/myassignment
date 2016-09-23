var React= require('react');
var ReactDom = require('react-dom');
var NavBar= require('./component/NavBar.js');
var FavouriteComp=require('./component/FavouriteComp.js');
var Home=require('./component/Home.js');
var MovieBox= require('./component/MovieBox.js');
var About= require('./component/About.js')
var {hashHistory,Route,Router,IndexRoute}=require('react-router');
var Moviezone=React.createClass(
    {

       render:function(){

              return(<div>
                      <NavBar/>
                      <br/><br/><br/>
                    {this.props.children}
                          </div>)
        }
    })

    ReactDom.render(<Router history={hashHistory}>
                       <Route path='/' component={Moviezone}>
                       <IndexRoute component={Home}/>
                       <Route path='/home' component={Home}/>
                       <Route path='/FavouriteComp' component={FavouriteComp}/>
                       <Route path='/MovieBox' component={MovieBox}/>
                       <Route path='/About/name'component={About}/>



                       </Route>


</Router>,document.getElementById('Movie_App'));
