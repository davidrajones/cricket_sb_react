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
        return (<button type="button" className={"btn "+this.props.button_style+" runs-button"} onClick={this.handleClick}>{this.props.value}</button>);
    }
}
