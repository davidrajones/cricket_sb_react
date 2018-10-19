import React from 'react';
import { NumberDisplay } from './NumberDisplay';

import '../../css/wickets.css';

export class Wickets extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="wickets-grid">
                <section className="wickets-head"><h5>Wickets</h5></section>
                <section className="wickets-number"><NumberDisplay value={this.props.value} /></section>
            </div>);
    }
}