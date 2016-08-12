import React from 'react';
import Names from './names'
import AddStudent from './addstudent'

//<NamesList students={this.state.students}/>

const NameList = React.createClass({
  render: function(){
    let studentsArr = this.props.students.map(student =>{
      return <Names name={student.name} id={student.id} key={student.id} updateStudent={this.props.updateStudent} removeStudent={this.props.removeStudent} />
    })
    return (
      <div className="col-md-3">
        <AddStudent addStudent={this.props.addStudent}/>
        <p></p>
        {studentsArr}
      </div>
    )
  }
})

export default NameList;
