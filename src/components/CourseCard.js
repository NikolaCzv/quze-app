import React from "react";
import noImage from "../asset/noimage.jpg";
import {
    Grid,
    Image,
    Card,
    Button,
    Rating
} from "semantic-ui-react";

const divStyles = {
    'width': '100%',
    'height': '80px',
}

const CourseCard = props => {
    const { course } = props

    const styles = {
        'width': '100%',
        'height': '225px',
    };

    return(
            <Grid.Column>
                <Card>
                {course.imgUrl ? 
                    <Image src={course.imgUrl} style={styles} />
                :
                    <Image src={noImage} style={styles} />
                }
                <div style={divStyles}>
                    <h4>{course.title}</h4>
                    {course.providerRatings ? 
                    <span>Rating:
                        <Rating
                        defaultRating={course.providerRatings}
                        maxRating={5}
                        disabled
                        icon="star"
                        size="mini"/></span>
                    :
                    <span>Not Rated</span>
                    }
                </div>
                <Card.Content extra>
                    <Button 
                        size='mini'
                        color='blue'
                        onClick={() => props.handleView(course.courseId)}
                        > More Details</Button>
                </Card.Content>
            </Card>
          </Grid.Column>
   );
}

export default CourseCard;