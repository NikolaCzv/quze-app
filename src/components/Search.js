import React from "react";
import { Menu, Input} from "semantic-ui-react";

class Search extends React.Component {

    render(){
        return(
            <Menu>
            <Menu.Item>
              <Input className='icon' icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu>
        );
    }
}

export default Search;