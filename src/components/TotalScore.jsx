import React from 'react';
import { NumberDisplay } from './NumberDisplay';
import { RunsButton } from './RunsButton';

import '../../css/totalScore.css';

export class TotalScore extends React.Component{
    constructor(props){
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(delta){
        this.props.handleClick(delta);
    }

    render(){
        return (
            <div className="total-score-grid">
                <section className={"head "+this.props.title_style}>Total</section>
                <section className="number"><NumberDisplay value={this.props.number} /></section>
                <section className="total-score-buttons">
                    <div className="total-score-buttons-grid">
                        <section className="total-score-minus-button">
                            <RunsButton runsVal={-1} button_style={this.props.but_style} onButtonClick={this.handleButtonClick} />
                        </section>
                        <section className={"total-score-button-text "+this.props.title_style}>
                            Extras
                        </section>
                        <section className="total-score-plus-button">
                            <RunsButton runsVal={1} button_style={this.props.but_style} onButtonClick={this.handleButtonClick} />
                        </section>
                    </div>
                </section>                
            </div>);
    }
}
