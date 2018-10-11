var React = require('react');

var TimerButton = React.createClass({
  onClick: function(e){
    e.preventDefault();
    this.props.onSetTimer();
  },
  render: function(){
    return(
      <button className="button primary expanded" onClick={this.onClick}>Start</button>
    )
  }
});

module.exports = TimerButton;