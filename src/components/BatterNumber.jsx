import React from 'react';
import { RunsButton } from './RunsButton';
import { OutButton } from './OutButton';
import { NumberDisplay } from './NumberDisplay';

import '../../css/numberDisplay.css';

export class BatterNumber extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleOutClick = this.handleOutClick.bind(this);
    }

    handleClick(runsValue, e) {        
        this.props.scoreUpdate(runsValue);
    }

    handleOutClick() {
        this.props.handleWicket(this);
    }

    render(){
        return (<div className="number-display-container">
                    <section className="title"><h5>{this.props.title}</h5></section>

                    <section className="buttonMinus1 runs-button">
                        <RunsButton runsVal={-1} onButtonClick={this.handleClick} />
                    </section> 
                    <section className="buttonPlus1 runs-button">
                        <RunsButton runsVal={1} onButtonClick={this.handleClick} />                    
                    </section>

                    <section className="buttonMinus4 runs-button">
                        <RunsButton runsVal={-4} onButtonClick={this.handleClick} />
                    </section> 
                    <section className="number-display-grid">
                        <NumberDisplay value={this.props.score} />
                    </section>
                    <section className="buttonPlus4 runs-button">
                        <RunsButton runsVal={4} onButtonClick={this.handleClick} />
                    </section>

                    <section className="buttonMinus6 runs-button">
                        <RunsButton runsVal={-6} onButtonClick={this.handleClick} />
                    </section> 
                    <section className="buttonOut runs-button">
                        <OutButton value="out" onButtonClick={this.handleOutClick} />
                    </section>
                    <section className="buttonPlus6 runs-button">
                        <RunsButton runsVal={6} onButtonClick={this.handleClick} />
                    </section>
                </div>);
    }
}