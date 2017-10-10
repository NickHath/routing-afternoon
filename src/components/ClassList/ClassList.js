import React, { Component } from 'react';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    }

  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then((response) => {
        students: response.data
      })

  }


  render() {
    let students= this.state.students.map((student,index) =><h3 key={index}>{student.first_name},{student.last_name}</h3>);

    return (
      <div className="box" >
        <h1></h1>
        <h2>ClassList:</h2>
          {students}
      </div >
    )
  }

}