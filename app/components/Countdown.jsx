var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState: function(){
        return { 
            count: 0
        };
    },
    handleCountdown: function(time){
        this.setState({
            count: time
        });
    },
    render: function(){
        var {count} = this.state;
        return(
            <div>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountdown={this.handleCountdown}/>
            </div> 
        )
    }
});

module.exports = Countdown;
