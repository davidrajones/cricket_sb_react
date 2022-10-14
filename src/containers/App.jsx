import React from 'react';
import { BatterNumber } from '../components/BatterNumber';
import { TotalScore } from '../components/TotalScore';
import { OversNum } from '../components/Overs';
import { Wickets } from '../components/Wickets';
import { TargetScore } from '../components/TargetScore';
import { ResetButton } from '../components/ResetButton';
import { NextInningsButton } from '../components/NextInningsButton';
import { ThemeChangeButton } from '../components/ThemeChangeButton';

import '../../css/app.css';

function handleErrors(response) {
    
    console.log(response)
    console.log(response.ok)

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}

export class App extends React.Component{
    constructor (props){
        super(props);
        this.state = {
                        totalScore: 0,
                        wickets: 0,
                        overs: 0,
                        targetScore: 0,
                        batAScore: 0,
                        batBScore: 0,
                        button_style: 'btn-outline-light',
                        container_style: "container-light",
                        title_style: "title-light",
                        notTheme: 'Light'
                    };
        this.handleBatAScoreUpdate = this.handleBatAScoreUpdate.bind(this);
        this.handleBatBScoreUpdate = this.handleBatBScoreUpdate.bind(this);
        this.handleOversUpdate = this.handleOversUpdate.bind(this);
        this.handleWicket = this.handleWicket.bind(this);
        this.handleNextInnings = this.handleNextInnings.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.handleScoreUpdate = this.handleScoreUpdate.bind(this);
        this.handleBatAWicket = this.handleBatAWicket.bind(this);
        this.handleBatBWicket = this.handleBatBWicket.bind(this);
        this.handleUpdateScoreboard = this.handleUpdateScoreboard.bind(this);
        this.getScoresJson = this.getScoresJson.bind(this);
        this.setScoresJson = this.setScoresJson.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);
    }

    handleBatAScoreUpdate (delta){
        let newRuns = this.state.batAScore + delta;
        let updateVals = delta;
        if(newRuns < 0) {
            updateVals = 0 - this.state.batAScore;
            newRuns = 0;
        }
        this.setState({batAScore: newRuns});
        this.handleScoreUpdate(updateVals);
    }

    handleBatBScoreUpdate (delta){
        let newRuns = this.state.batBScore + delta;
        let updateVals = delta;
        if(newRuns < 0) {
            updateVals = 0 - this.state.batBScore;
            newRuns = 0;
        }
        this.setState({batBScore: newRuns});
        this.handleScoreUpdate(updateVals);
    }

    

    handleScoreUpdate (delta) {
        let newTotScore = this.state.totalScore + delta;
        if (newTotScore < 0){
            newTotScore = 0;
        }
        this.setState({totalScore: newTotScore});
        //this.handleUpdateScoreboard();
    }

    handleBatAWicket (){
        const r = window.confirm("Are you sure Bat A is out?"); if(r == true){
            this.setState({batAScore: 0});
            this.handleWicket();
        }
    }

    handleBatBWicket (){
        const r = window.confirm("Are you sure Bat B is out?"); if(r == true){
            this.setState({batBScore: 0});
            this.handleWicket();
        }
    }

    handleWicket () {
        let newWickets = this.state.wickets + 1;
        if (newWickets > 9){
            newWickets = 9;
        }
        this.setState({wickets: newWickets});
        //this.handleUpdateScoreboard();
    }

    handleOversUpdate (delta){
        let newOvers = this.state.overs + delta;
        if (newOvers < 0){
            newOvers = 0;
        }
        this.setState({overs: newOvers});
        //this.handleUpdateScoreboard();
    }

    handleNextInnings (){
      const r = window.confirm("Are you sure you want to start the next innings?"); if(r == true){
        let newTargetScore = this.state.totalScore + 1;
        this.setState(
            {
                totalScore: 0,
                wickets: 0,
                overs: 0,
                targetScore: newTargetScore,
                batAScore: 0,
                batBScore: 0
            });
        }
    }

    handleThemeChange (){
        let new_but_style = this.state.button_style;
        let new_not_theme = this.state.notTheme;
        let new_container = this.state.container_style;
        let new_title_style = this.state.title_style;
        if (new_but_style == 'btn-outline-light'){
            new_but_style = 'btn-outline-dark';
            new_container = "container-dark";
            new_title_style = "title-dark";
            new_not_theme = 'Dark';
        }else{
            new_but_style = 'btn-outline-light';
            new_container = "container-light";
            new_title_style = "title-light";
            new_not_theme = 'Light';
        }
        this.setState({
            button_style: new_but_style,
            notTheme: new_not_theme,
            container_style: new_container,
            title_style: new_title_style
        });
    }

    handleResetClick (){
        const r = window.confirm("Are you sure you want to reset?"); if(r == true){
            this.setState(
              {
                  totalScore: 0,
                  wickets: 0,
                  overs: 0,
                  targetScore: 0,
                  batAScore: 0,
                  batBScore: 0
              });
        }
        //this.handleUpdateScoreboard();        
    }

    getScoresJson(){
      console.log('{"scores": {"scorestr1": "'+this.state.batAScore+','+this.state.totalScore+','+this.state.batBScore+
      '", "scorestr2": "'+this.state.wickets+','+this.state.overs+','+this.state.targetScore+'"}}');
      return '{"scores": {"scorestr1": "'+this.state.batAScore+','+this.state.totalScore+','+this.state.batBScore+
              '", "scorestr2": "'+this.state.wickets+','+this.state.overs+','+this.state.targetScore+'"}}';
    }

    setScoresJson(data){
      console.log('Setting scores as retrieved from rest API')
      console.log(data)
      var [batA, tot, batB] = data["scores"]["scorestr1"].split(',')
      var [wick, ovs, targ] = data["scores"]["scorestr2"].split(',')
      batA = parseInt(batA)
      tot = parseInt(tot)
      batB = parseInt(batB)
      wick = parseInt(wick)
      ovs = parseInt(ovs)
      if (targ === "-"){
        targ = 0
      }else{
        targ = parseInt(targ)
      }
      this.setState(
        {
            totalScore: tot,
            wickets: wick,
            overs: ovs,
            targetScore: targ,
            batAScore: batA,
            batBScore: batB
        });
    }

    handleUpdateScoreboard(){
      //Handle init here
      try {
          fetch('/api/update', 
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                    "access-control-allow-origin" : "*",
                    "Content-type": "application/json; charset=UTF-8"
                    },
                    body: this.getScoresJson()
                })
          .then(handleErrors)
          .then((res) => {
            console.log(res.json)
            if(res.status != 200){
            return res
            }
          }).then(console.log("Updated scores."));
        }catch(e){
            const r = window.confirm("Error encountered "+e.text+"\nPlease try refreshing the browser and updating again"); if(r == true){
            /*this.setState(
              {
                  totalScore: 0,
                  wickets: 0,
                  overs: 0,
                  targetScore: 0,
                  batAScore: 0,
                  batBScore: 0
              });*/
            }
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
      if (prevState !== this.state) {
        this.handleUpdateScoreboard();
      }
    }

    componentDidMount(){
      //Handle init here
        try {
            fetch('/api/score', 
                    {
                        method: 'GET',
                        mode: 'cors',
                        headers: {
                        "access-control-allow-origin" : "*",
                        "Content-type": "application/json; charset=UTF-8"
                        }
                    })
            .then(handleErrors)
            .then((res) => {
                if(res.status != 200){
                    return res
                }
                return res.json()
            }).then(
                (data) => {
                console.log("Initialised arduino.")
                return this.setScoresJson(data.response)
            });
        }catch(e){
            const r = window.confirm("Error encountered "+e.text+"\nPlease try refreshing the browser and updating again"); if(r == true){
                /*this.setState(
                  {
                      totalScore: 0,
                      wickets: 0,
                      overs: 0,
                      targetScore: 0,
                      batAScore: 0,
                      batBScore: 0
                  });*/
            }
        }
    }

    render(){
        return (
            <div className={"app-container "+ this.state.container_style }>
              <div className="row">
                <div className="col-sm-4 theme-changer">
                    <ThemeChangeButton onButtonClick={this.handleThemeChange} but_style={this.state.button_style} value={this.state.notTheme}/>
                </div>
              </div>
              <div className="row">
                <div className="col-sm scoreboard-header">
                      ICKLETON CC SCOREBOARD
                </div>
              </div>

              <div className="row">
                <div className="col-sm-4 batter-a">
                  <BatterNumber title="Bat A" score={this.state.batAScore} title_style={this.state.title_style} but_style={this.state.button_style} scoreUpdate={this.handleBatAScoreUpdate} handleWicket={this.handleBatAWicket}/>
                </div>
                <div className="col-sm-4 total-score">
                  <TotalScore number={this.state.totalScore} title_style={this.state.title_style} but_style={this.state.button_style} handleClick={this.handleScoreUpdate} />
                </div>
                <div className="col-sm-4 batter-b">
                  <BatterNumber title="Bat B" score={this.state.batBScore} title_style={this.state.title_style} but_style={this.state.button_style} scoreUpdate={this.handleBatBScoreUpdate} handleWicket={this.handleBatBWicket}/>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-4 overs-sect">
                  <OversNum number={this.state.overs} title_style={this.state.title_style} but_style={this.state.button_style} handleClick={this.handleOversUpdate} />                        
                </div>
                <div className="col-sm-4 wickets-sect">
                  <Wickets title_style={this.state.title_style} value={this.state.wickets} />
                </div>                
                <div className="col-sm-4 target-score">
                  <TargetScore title_style={this.state.title_style} value={this.state.targetScore} />
                </div>
              </div>

              <div className="row">
                <div className="col-sm-4 next-innings-button">
                  <NextInningsButton value="Next Innings" but_style={this.state.button_style} onButtonClick={this.handleNextInnings}/>
                </div>
                <div className="col-sm-4 reset-button">
                  <ResetButton value="Reset" but_style={this.state.button_style} onButtonClick={this.handleResetClick}/>
                </div>
                <div className="col-sm-4 icc_image">
                </div>
                
              </div>
            </div>
        );
    }
}

App.defaultProps = {
    wickets: 0,
    overs: 0,
    totalScore: 0,
    targetScore: 0,
    button_style: 'btn-outline-light',
    notTheme: 'Light'
}
