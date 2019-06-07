import React from 'react';
import PropTypes from 'prop-types';

import '../../css/button.css';

export class ThemeChangeButton extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onButtonClick();
    }
       
    render(){
        return (<button className={"button-theme-change btn "+this.props.but_style} onClick={this.handleClick}>Change To {this.props.value} Theme</button>);
    }
}
