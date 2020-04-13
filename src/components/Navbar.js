import React from "react";
import { Menu, Input, Select} from "semantic-ui-react";

class Navbar extends React.Component {

  state = {
    options: [
      {text: "All", value: "All"},
      {text: "Begginer", value: "Begginer"},
      {text: "Intermediate", value: "Intermediate"},
      {text: "Advanced", value: "Advanced"}
    ]
  }

  handleOnChange = (event) => {
    console.log(event)
  }

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
              <Select 
                placeholder='Filter by...'
                options={this.state.options} 
                onChange={this.handleOnChange}
              />
            </Menu.Item>
          </Menu>
        );
    }
}

export default Navbar;