import React from 'react';
import './App.css';
import { Divider } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import List from "./containers/List";

class App extends React.Component {
  state = {
    courses: [],
    searchCourse: ''
  }

  componentDidMount(){
    fetch("https://quze-intern-test.s3.us-east-2.amazonaws.com/course-data.json")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        courses: data
      })
    })
  }

  handleSearch = (event) => {
    this.setState({
      searchCourse: event.target.value
    })
  }

  render(){
    const courses = this.state.courses.filter(course => course.title.toLowerCase().includes(this.state.searchCourse))

    return (
      <div className="App">
        <Navbar 
          courses={courses}
          handleSearch={this.handleSearch}
        />
        <Divider hidden/>
        <Divider hidden/>
        <List 
          courses={courses}
        />
      </div>
    );
  }
}

export default App;
