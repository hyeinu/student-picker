import React from 'react';
import _ from 'lodash';

//<Random students={this.state.students}/>

const RandomTeam = React.createClass({
  render: function(){
    let teamArr = this.props.team.map(teamMember =>{
      return (<li key={teamMember.id}>{teamMember.name}</li>);
    })
    return(
      <div>
      <h3>Team{this.props.teamNum}</h3>
        <ul>
          {teamArr}
        </ul>
      </div>
    );
  }
})

const TeamList = React.createClass({
  getInitialState(){
    return {
      teamsize: 2,
      randomTeam: []
    }
  },
  randomTeam(){
    let shuffle = _.shuffle(this.props.students)
    let randomTeams = _.chunk(shuffle, this.state.teamsize)
    this.setState({randomTeam: randomTeams})
  },
  onInputChange: function(event){
    this.setState({teamsize: event.target.value})
  },
  render: function(){
    let studentTeams = this.state.randomTeam.map((team, index) =>{
      return <RandomTeam team={team} key={index} teamNum={index + 1} />
    })
    return (
      <div className="col-md-5">
        <button className="btn btn-lg btn-info btn-block" onClick={this.randomTeam}>Create Teams</button>
        <div className="text-center">
        <input type="number" value={this.state.teamsize} onChange={this.onInputChange}/>
        </div>
        {studentTeams}
      </div>
    )
  }
})

export default TeamList;
