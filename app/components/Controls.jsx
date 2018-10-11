var React = require('react');
var Proptypes = require('prop-types');

var Controls = React.createClass({
    onStatusChange: function(newStatus){
        return () =>{
            this.props.onStatusChange(newStatus);
        }
    },
    render: function(){
        var{countStatus} = this.props;
        var renderStartStopButton = ()=>{
            if(countStatus === 'started'){
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            }else if(countStatus === 'paused' ){
                return <button className="button primary"onClick={this.onStatusChange('started')}>Start</button>
            }
        }
        return(
            <div className="expanded button-group">
                {renderStartStopButton()}
                <button className="button alert" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div> 
        )
    }
})
Controls.Proptypes = {
        countStatus: Proptypes.string.isRequired,
        onStatusChange: Proptypes.func.isRequired
}
module.exports = Controls;