var React = require('react');

var CountdownForm = React.createClass({
    onSubmit: function(e){
        e.preventDefault();
        var time = this.refs.seconds.value;
        if(time.match(/^[0-9]*$/)){
            this.refs.seconds.value = "";
            this.props.onSetCountdown(parseInt(time,10));
        }
    },
    render: function(){
        return(
            <div>
                    <form className="countdown-form" onSubmit={this.onSubmit}>
                            <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                            <button className="button expanded">Submit</button>
                    </form> 
            </div>
        )

    }
})

module.exports = CountdownForm;