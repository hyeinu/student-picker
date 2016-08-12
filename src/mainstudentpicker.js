import React from 'react';
import NamesList from './namelist'
import TeamList from './teamlist'
import Random from './random'

const App = React.createClass({
  render(){
    return(

      <div className="container">
      <div className="row">
      <h1 class="text-center">Student Picker</h1>
      <AddStudent />
      </div>
      <div className="row">
      <NamesList />
      <TeamList />
      <Random />
      </div>


      </div>
    )
  }
})

export default App;
