import React from "react";
import {
    Grid,
    Image,
    Button,
    Divider,
    Rating
} from "semantic-ui-react";
import noimage from "../asset/noimage.jpg";
import styled from "styled-components";

const styles = {
    'width': '70%',
    'height': '550px',
    'margin-left': '150px',
    'margin-top': '150px',
    'margin-bottom': '150px'
};

const Wrapper = styled.div`
    margin-left: 40px;
    margin-top: 20px;
`;

const CourseView = props => {
    const { course } = props

    return(
            <Grid>
                <Grid.Column width={5}>
                    <Wrapper>
                        <h1>{course.title}</h1>
                        {course.providerRatings ?
                        <h3>Rating:
                            <Rating
                            defaultRating={course.providerRatings}
                            maxRating={5}
                            icon="star"
                            disabled/></h3>
                        :
                        <h3>Not Rated</h3>
                        }
                        <h4>{course.shortDescription}</h4>
                        <h4>Author: {course.author}</h4>
                        <p>Level: {course.level}</p>
                        <p>Category: {course.quzeCategory}</p>
                        <p>Program Type: {course.programType}</p>
                        <Divider hidden />
                        <Button color="orange" onClick={props.handleVisitBtn}>Explore This Course</Button>
                    </Wrapper>
                </Grid.Column>
                <Grid.Column width={11}>
                {course.imgUrl ?
                <Image src={course.imgUrl} style={styles}/>
                :
                <Image src={noimage} style={styles}/>
                }
                </Grid.Column>
            </Grid>
    )
}

export default CourseView;