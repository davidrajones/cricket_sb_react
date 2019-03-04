import React from 'react';
import { NumberDisplay } from './NumberDisplay';
import { RunsButton } from './RunsButton';

import '../../css/overs.css';

export class OversNum extends React.Component{
    constructor(props){
        super(props);
        this.handleOversClick = this.handleOversClick.bind(this);
    }

    handleOversClick(delta){
        this.props.handleClick(delta);
    }

    render(){
        return (
            <div className="overs-grid">
                <section className="over-head">Overs</section>
                <section className="over-number"><NumberDisplay value={this.props.number} /></section>
                <section className="overs-buttons">
                    <div className="overs-buttons-grid">
                        <section className=".overs-minus-button">
                            <RunsButton runsVal={-1} onButtonClick={this.handleOversClick} />
                        </section>                        
                        <section className=".overs-button-text">Overs</section>
                        <section className=".overs-plus-button">
                            <RunsButton runsVal={1} onButtonClick={this.handleOversClick} />
                        </section>
                    </div>
                </section>
                
            </div>);
    }
}
