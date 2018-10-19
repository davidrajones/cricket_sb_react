import React from 'react';

import '../../css/numberDisplay.css';

export class NumberDisplay extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="number-digit">{this.props.value}</div>);
    }
}