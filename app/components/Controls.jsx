var React = require('react');
var Proptypes = require('prop-types');

var Controls = React.createClass({
    onStatusChange: function(newStatus){
        return () =>{
            this.props.onStatusChange(newStatus);
        }
    },
    render: function(){
        var{countdownStatus} = this.props;
        var renderStartStopButton = ()=>{
            if(countdownStatus === 'started'){
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            }else if(countdownStatus === 'paused'){
                return <button className="button primary"onClick={this.onStatusChange('started')}>Start</button>
            }
        }
        return(
            <div>
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div> 
        )
    }
})
Controls.Proptypes = {
        countdownStatus: Proptypes.string.isRequired,
        onStatusChange: Proptypes.func.isRequired
}
module.exports = Controls;