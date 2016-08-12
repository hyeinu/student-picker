import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import NamesList from './namelist'
import TeamList from './teamlist'
import Random from './random'

const Main = React.createClass({
  getInitialState(){
      try{
        var students = JSON.parse(localStorage.students)
      } catch(err){
        var students = [];
      }
      return {students};
  },
  addStudent: function(names){
    let newStudents = names.map(name =>{
      let student = {}
      student.name = name;
      student.id = uuid();
      return student;
    })
    this.setState({students: this.state.students.concat(newStudents)})
  },
  removeStudent(id){
    this.setState({students: this.state.students.filter(student => {if(student.id !== id){return student}})});
  },
  updateStudent(id, newName){
    this.setState({students: this.state.students.map(student => {
        if(student.id === id){
          let newStudent = {};
           newStudent.name = newName;
           newStudent.id = id;
           return newStudent;
        } else{
          return student;
        }
      })
    })
  },
  componentDidUpdate(){
    localStorage.students = JSON.stringify(this.state.students);
  },
  render(){
    return(
      <div className="container">
        <div className="row">
          <h1 className="text-center">Student Roulette</h1>
        </div>
        <div className="row">
          <NamesList addStudent={this.addStudent} students={this.state.students} updateStudent={this.updateStudent} removeStudent={this.removeStudent}/>
          <TeamList students={this.state.students}/>
          <Random students={this.state.students} />
        </div>
      </div>
    )
  }
})

ReactDOM.render(
  <Main />, document.getElementById('root')
)
