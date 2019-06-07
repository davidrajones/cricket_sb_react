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

    shouldComponentUpdate(nextProps, nextState){
        if (this.props.but_style === nextProps.but_style){
            return false;
        }
        return true;
    }

    render(){
        var classes = "button-reset btn "+ this.props.but_style;
        return (<button className={classes} onClick={this.handleClick}>{this.props.value}</button>);
    }
}
