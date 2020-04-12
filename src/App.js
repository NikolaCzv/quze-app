import React from 'react';
import './App.css';
import { Divider } from "semantic-ui-react";
import Search from "./components/Search";
import List from "./components/List";

class App extends React.Component {
  state = {
    courses: []
  }

  componentDidMount(){
    fetch("https://quze-intern-test.s3.us-east-2.amazonaws.com/course-data.json")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        courses: [...data]
      })
    })
  }

  render(){
    return (
      <div className="App">
        <Search />
        <Divider hidden/>
        <Divider hidden/>
        <List courses={this.state.courses}/>
      </div>
    );
  }
}

export default App;
