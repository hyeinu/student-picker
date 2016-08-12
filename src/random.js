import React from 'react';

//<Random students={this.state.students}/>

const Random = React.createClass({
  getInitialState(){
    return {randomname: ''}
  },
  randomize(){
    let randomStudent = this.props.students[Math.floor(Math.random()*this.props.students.length)];
    this.setState({randomname: randomStudent.name})
  },
  render: function(){
    return (
      <div className="col-md-4">
        <button className="btn btn-lg btn-info btn-block" onClick={this.randomize}>Random Student</button>
         <h3 className="text-center">{this.state.randomname}</h3>
      </div>
    )
  }
})

export default Random;
