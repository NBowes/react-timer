var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function(){
        return { 
            count: 0,
            countStatus: 'stopped'
        };
    },
    componentDidUpdate: function(prevProps, prevState){
        if(this.state.countStatus !== prevState.countStatus){
            switch(this.state.countStatus){
                case 'started':
                    this.startTimer();
                break;
                case 'stopped':
                    this.setState({count:0})
                case 'paused':
                    clearInterval(this.timer)
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer: function(){
        this.timer = setInterval(()=>{
            var newCount = this.state.count - 1
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
            if(newCount === 0){
              this.setState({countStatus: 'stopped'});
            }
        }, 1000)
    },  
    handleCountdown: function(time){
        this.setState({
            count: time,
            countStatus: 'started'
        });
    },
    handleStatusChange: function(newStatus){
        this.setState({
            countStatus: newStatus
        })
    },
    render: function(){
        var {count, countStatus} = this.state;
        var renderControlArea = ()=>{
            if (countStatus !== 'stopped') {
                return <Controls countStatus={countStatus} onStatusChange={this.handleStatusChange}/>;
              } else {
                return <CountdownForm onSetCountdown={this.handleCountdown}/>;
              }
        }
        return(
            <div>
              <h1 className="page-title">Countdown</h1>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div> 
        )
    }
});

module.exports = Countdown;
