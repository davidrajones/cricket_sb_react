import React from 'react';
import PropTypes from 'prop-types';

import '../../css/button.css';

export class OutButton extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onButtonClick();
    }
        
    render(){
        return (<button className="runs-button" onClick={this.handleClick}>{this.props.value}</button>);
    }
}