import React from "react";
import { Grid } from "semantic-ui-react";
import styled from "styled-components";
import CourseCard from "../components/CourseCard";
import history from "../utils/history"

const Wrapper = styled.div`
    display: flex;
    margin-left: 90px;
    height: 100vh;
    overflow: scroll;
`

class List extends React.Component {

    renderCourses = () => {
        return this.props.courses.map(course => {
            return <CourseCard 
                    key={course.courseId}
                    course={course}
                    />
        });
    }

    render(){
        console.log(history)
        return(
            <Wrapper>
                <Grid centered columns={4}>
                    {this.renderCourses()}
                </Grid>
            </Wrapper>
        );
    }
}

export default List;