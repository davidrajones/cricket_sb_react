import React from 'react';
import PropTypes from 'prop-types';

import '../../css/button.css';

export class RunsButton extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onButtonClick(this.props.runsVal);
    }
        
    render(){
        return (<button className="runs-button" onClick={this.handleClick}>{this.props.runsVal}</button>);
    }
}

RunsButton.propTypes = {
    runsVal: PropTypes.number.isRequired
};

RunsButton.defaultProps = {
    runsVal: 1
};