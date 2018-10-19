import React from 'react';
import { NumberDisplay } from './NumberDisplay';

import '../../css/targetScore.css';

export class TargetScore extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="target-grid">
                <section className="target-head"><h5>Target Score</h5></section>
                <section className="target-number"><NumberDisplay value={this.props.value} /></section>
            </div>);
    }
}