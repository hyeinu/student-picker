import React from 'react';

//return <Names student key={student.id} updateStudent={this.props.updateStudent} removeStudent={this.props.delete}/>

const Names = React.createClass({
  getInitialState: function(){
    return{
      edit: false,
      name: this.props.name
    }
  },
  changeName: function(){
    this.setState({edit: false})
    this.props.updateStudent(this.props.id, this.state.name)
  },
  editName: function(){
    this.setState({edit: true})
  },
  onInputChange: function(event){
    this.setState({name: event.target.value})
  },
  render: function(){
    if(this.state.edit){
      return(
        <div>
        <input type="text" value={this.state.name} onChange={this.onInputChange}/>
        <button className="btn btn-primary btn-sm" onClick={this.changeName}>Edit</button>
        </div>
      )
    } else {
      return (
        <div className="row">
        <div className="col-md-6 text-left">
        <h4 onDoubleClick={this.editName}>{this.state.name}&nbsp;</h4>
        </div>
        <div className="col-md-2 text-right">
        <button className="btn btn-danger btn-xs" onClick={this.props.removeStudent.bind(null, this.props.id)}>x</button>
        </div>
        </div>
      )
    }
  }
})

export default Names;
