import React from "react";
import { Grid } from "semantic-ui-react";
import styled from "styled-components";
import CourseCard from "../components/CourseCard";

const Wrapper = styled.div`
    display: flex;
    margin-left: 90px;
    height: 100vh;
    overflow: scroll;
`

class HomePage extends React.Component {

    renderCourses = () => {
        return this.props.courses.map(course => {
            return <CourseCard 
                    key={course.courseId}
                    course={course}
                    handleView={this.props.handleView}
                    />
        });
    }

    render(){
        return(
            <Wrapper>
                {this.props.courses.length >= 4 ? 
                        <Grid centered columns={4}>
                            {this.renderCourses()}
                        </Grid>
                :
                <Grid centered columns={2}>
                    {this.renderCourses()}
                </Grid>
                }
            </Wrapper>
        );
    }
}

export default HomePage;