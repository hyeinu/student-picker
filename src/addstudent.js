import React from 'react';

//<AddStudent addStudent={this.addStudent}/>

const AddStudent = React.createClass({
  getInitialState: function(){
      return {
        text: ''
      }
    },
    addStudent: function(){
      let students = this.state.text.split(',')
      this.props.addStudent(students)
      this.setState({text: ""})
    },
    onInputChange: function(event){
      this.setState({text: event.target.value})
    },
    render: function(){
      return(
        <div>
        <input type="text" value={this.state.text} onChange={this.onInputChange}/>
        <button className="btn btn-info" onClick={this.addStudent}>Add</button>
        </div>
      )
    }
})

export default AddStudent;
