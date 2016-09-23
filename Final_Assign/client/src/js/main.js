var React = require('react');
var ReactDom = require('react-dom');
var DisRec = require('./component/Disrec.js');
var EnterRec = require('./component/EnterRec.js')
var formWave = require('./component/formWave.js');
var ParentComp = React.createClass({


render: function(){
return(
  <div>
<EnterRec/>
</div>
)
  }
})
ReactDom.render(<ParentComp/>,document.getElementById('app'));
