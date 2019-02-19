import React from 'react';

import '../../css/numberDisplay.css';

export class NumberDisplay extends React.Component{
    constructor(props){
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(){
      this.props.onChangeNumberText(this.props.runsVal);
    }

    render(){
        return (
            <div className="number-digit">
              {this.props.value}
            </div>);
    }
}
