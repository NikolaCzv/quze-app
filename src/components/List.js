import React from "react";
import { Grid, Image, Card, Button} from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    margin-left: 90px;
    height: 100vh;
    overflow: scroll;
`


class List extends React.Component {

    renderCourses = () => {
        return this.props.courses.map((course, index) => {

            const styles = {
                'width': '100%',
                'height': '225px',
            }

            return (
                <Grid.Column key={index} >
                <Card>
                <Image src={course.imgUrl} style={styles} />
                <Card.Content>
                    <h4>{course.title}</h4>
                  <Card.Meta>
                    <span>Rating: {course.providerRatings}</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <Button size='mini' color='blue'> Details </Button>
                </Card.Content>
              </Card>
              </Grid.Column>
            )
        })
    }

    render(){
        console.log(this.props.courses)
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