import React from "react";
import {
    Dimmer,
    Loader,
    Menu,
    Button
} from "semantic-ui-react";
import CourseView from "../components/CourseView"

class ViewPage extends React.Component{

    state = {
        course: [],
        loading: true
    }

    componentDidMount(){
        fetch("https://quze-intern-test.s3.us-east-2.amazonaws.com/course-data.json")
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                course: data.filter(course => course.courseId === this.props.location.state.clicked)
            })
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.course[0] && prevState.loading){
            this.setState({
                loading: false
            })
        }
    }

    handleVisitBtn = () => {
        window.open(`${this.state.course[0].url}`, '_blank')
    }

    handleBackBtn = () => {
        this.props.history.goBack()
    }

    render(){
        if (this.state.loading){
            return (
            <div>
                <Dimmer active inverted>
                    <Loader size='big'>Loading</Loader>
                </Dimmer>
            </div>
            )
        };

        return(
            <div className='showDiv'>
                <Menu>
                    <Menu.Item>
                        <Button color="blue"
                        onClick={this.handleBackBtn}> Back </Button>
                    </Menu.Item>
                </Menu>
                <CourseView 
                course={this.state.course[0]}
                handleVisitBtn={this.handleVisitBtn}
                />
             </div>
        )
    }

}

export default ViewPage