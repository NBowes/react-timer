var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
    render: function(){
        return(
            <div>
                <Clock totalSeconds={0}/>
                Counter.jsx
            </div>
        )
    }
});

module.exports = Countdown;
