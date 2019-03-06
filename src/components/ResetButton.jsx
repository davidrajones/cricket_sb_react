import React from 'react';
import PropTypes from 'prop-types';

import '../../css/button.css';

export class ResetButton extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onButtonClick();
    }
        
    render(){
        return (<button className="button-reset btn btn-outline-secondary" onClick={this.handleClick}>{this.props.value}</button>);
    }
}
