var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');
var TimerButton = require('TimerButton');

var Timer = React.createClass({
    getInitialState: function(){
      return{
        count: 0,
        countStatus: 'stopped'
      }
    },
    componentDidUpdate: function(prevProps,prevState){
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
        var newCount = this.state.count +1;
        this.setState({
          count: newCount,
          timerStatus: 'started'
        })
      }, 1000)
    },
    handleTimer: function(){
      this.setState({
        countStatus: 'started'
      })
    },
    handleStatusChange: function(newStatus){
      this.setState({
        countStatus: newStatus
      })
    },
    render: function(){
      var {count, countStatus} = this.state;
      var renderControls = ()=>{
        if (countStatus !== 'stopped') {
          return <Controls countStatus={countStatus} onStatusChange={this.handleStatusChange}/>;
        } else {
          return <TimerButton onSetTimer={this.handleTimer}/>;
        }
        
      }
        return(
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count}/>
                {renderControls()}
            </div>
        )
    }
});

module.exports = Timer;