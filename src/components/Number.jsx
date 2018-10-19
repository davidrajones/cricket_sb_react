import React from 'react';
import { RunsButton } from './RunsButton';
import PropTypes from 'prop-types';

import '../../css/numberDisplay.css';

export class Number extends React.Component{
    constructor(props){
        super(props);
        this.state = {numRuns: 0};
        this.handleClickSingle = this.handleClickSingle.bind(this, 1);
        this.handleClickFour = this.handleClickFour.bind(this, 4);
        this.handleClickSix = this.handleClickSix.bind(this, 6);
        this.handleClickMinusSingle = this.handleClickMinusSingle.bind(this, 1);
        this.handleClickMinusFour = this.handleClickMinusFour.bind(this, 4);
        this.handleClickMinusSix = this.handleClickMinusSix.bind(this, 6);
    }

    handleClickSingle(runsValue, e) {
        const newRuns = this.state.numRuns + runsValue;
        this.setState({numRuns: newRuns});
    }

    handleClickFour(runsValue, e) {
        const newRuns = this.state.numRuns + runsValue;
        this.setState({numRuns: newRuns});
    }

    handleClickSix(runsValue, e) {
        const newRuns = this.state.numRuns + runsValue;
        this.setState({numRuns: newRuns});
    }

    handleClickMinusSingle(runsValue, e) {
        const newRuns = this.state.numRuns - runsValue;
        this.setState({numRuns: newRuns});
    }

    handleClickMinusFour(runsValue, e) {
        const newRuns = this.state.numRuns - runsValue;
        this.setState({numRuns: newRuns});
    }

    handleClickMinusSix(runsValue, e) {
        const newRuns = this.state.numRuns - runsValue;
        this.setState({numRuns: newRuns});
    }


    render(){
        return (<div className="number-display-container">
                    <section className="title">{this.props.title}</section>

                    <section className="buttonMinus1">
                        <RunsButton runsVal={1} onClick={this.handleClickMinusSingle} />
                    </section> 
                    <section className="buttonPlus1">
                        <RunsButton runsVal={1} onClick={this.handleClickSingle} />                    
                    </section>

                    <section className="buttonMinus4">
                        <RunsButton runsVal={4} onClick={this.handleClickMinusFour} />
                    </section> 
                    <section className="number-digit">
                        {this.state.numRuns}
                    </section>
                    <section className="buttonPlus4">
                        <RunsButton runsVal={4} onClick={this.handleClickFour} />
                    </section>

                    <section className="buttonMinus6">
                        <RunsButton runsVal={6} onClick={this.handleClickMinusSix} />
                    </section> 
                    <section className="buttonPlus6">
                        <RunsButton runsVal={6} onClick={this.handleClickSix} />
                    </section>
                </div>);
    }
}