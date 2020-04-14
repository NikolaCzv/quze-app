import React from "react";
import { Menu, Input } from "semantic-ui-react";
import styled from "styled-components";

const CustomButton = styled.select`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;

class Navbar extends React.Component {

    render(){
        return(
            <Menu>
            <Menu.Item>
              <Input 
                className='icon'
                icon='search'
                placeholder='Search...'
                onChange={this.props.handleSearch}/>
            </Menu.Item>
            <Menu.Item position="right">
              <label>Sort by level: </label>
              <CustomButton onChange={this.props.handleOnChange}>
                <option value="all">All</option>
                <option value="beginner">Begginer</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </CustomButton>
            </Menu.Item>
          </Menu>
        );
    }
}

export default Navbar;