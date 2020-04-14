import React from 'react';
import './App.css';
import { Divider } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import HomePage from "./containers/HomePage";

class App extends React.Component {
  state = {
    courses: [],
    searchCourse: '',
    filter: "all",
    clicked: null
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

  handleOnChange = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  filterCourses = (courses) => {
    if(this.state.filter === "all"){
      return courses
    } else if (this.state.filter === "beginner"){
      return courses.filter(course => course.level === "Beginner")
    } else if (this.state.filter === "intermediate"){
      return courses.filter(course => course.level === "Intermediate")
    } else if (this.state.filter === "advanced"){
      return courses.filter(course => course.level === "Advanced")
    } else {
      return courses
    }
  }

  handleView = (id) => {
    this.props.history.push({
      pathname: `/course/${id}`,
      state: {clicked: id }})
  }

  render(){
    const courses = this.state.courses.filter(course => course.title.toLowerCase().includes(this.state.searchCourse))

    return (
      <div className="App" >
        <Navbar 
          courses={courses}
          handleSearch={this.handleSearch}
          filter={this.state.filter}
          handleOnChange={this.handleOnChange}
        />
        <Divider hidden/>
        <HomePage 
          courses={this.filterCourses(courses)}
          handleView={this.handleView}
        />
      </div>
    );
  }
}

export default App;
