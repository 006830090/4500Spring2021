import React, { Component } from 'react';
import '../style/homeStyle.css';
import 'rsuite/dist/styles/rsuite-default.css';
import { Sidenav, Toggle, Dropdown, Icon, Nav } from 'rsuite';

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          expanded: true,

        };
        this.handleToggle = this.handleToggle.bind(this);
      }
      
      handleToggle() {
        this.setState({
          expanded: !this.state.expanded
        });
      }

    render() { 
        const { expanded } = this.state;
        const { items, onItemSelect, mainCats, selectedItem } = this.props;

        return ( 
            
            <div className="sideNav container">
            <Toggle onChange={this.handleToggle} checked={expanded} />
            <hr />
            <Sidenav
              expanded={expanded}
              defaultOpenKeys={[]}
              onSelect={this.handleSelect}
            >
            
            <Sidenav.Body>
                <Nav>

                    {mainCats.map( genre => (
                        genre.count === 1 ? (
                            <React.Fragment>
                            {items.map( itemed => (
                                genre._id === itemed.cat._id ?
                                <Nav.Item  
                                    onClick={() => onItemSelect(itemed)} 
                                    eventKey={itemed.cat._id} icon={<Icon icon={genre.symbol} />}
                                >
                                    {genre.name}
                                </Nav.Item> : null
                            ))}
                            </React.Fragment>                  
                        ) : (
                            <Dropdown
                                placement="rightStart"
                                eventKey={genre._id}
                                title={genre.name}
                                icon={<Icon icon={genre.symbol} />}
                            >
                                {items.map( item => (
                                    genre._id === item.cat._id ?
                                    <Dropdown.Item onClick={() => onItemSelect(item)} eventKey={item._id}>{item.name}</Dropdown.Item>  : null
                                ))}
                                           
                            </Dropdown>
                        )
                    ))}

                </Nav>
              </Sidenav.Body>
            </Sidenav>
          </div>
         );
    }
}
  
export default SideNav;
 