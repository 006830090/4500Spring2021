import React, { Component } from 'react';
import '../style/homeStyle.css';
import 'rsuite/dist/styles/rsuite-default.css';
import { Sidenav, Toggle, Dropdown, Icon, Nav } from 'rsuite';

class SideNav extends Component {
    constructor() {
        super();
        this.state = {
          expanded: true,
          activeKey: '1'
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
      }
      handleToggle() {
        this.setState({
          expanded: !this.state.expanded
        });
      }
      handleSelect(eventKey) {
        this.setState({
          activeKey: eventKey
        });
      }


    render() { 
        const { expanded } = this.state;
        return ( 
            <div className="sideNav container">
            <Toggle onChange={this.handleToggle} checked={expanded} />
            <hr />
            <Sidenav
              expanded={expanded}
              defaultOpenKeys={[]}
              activeKey={this.state.activeKey}
              onSelect={this.handleSelect}
            >
              <Sidenav.Body>
                <Nav>
                  
                  <Nav.Item eventKey="1" icon={<Icon icon="universal-access" />}>
                    On Sale
                  </Nav.Item>

                  <Dropdown
                    placement="rightStart"
                    eventKey="3"
                    title="Drill Bits"
                    icon={<Icon icon="target" />}
                  >
                    <Dropdown.Item eventKey="2-1">Wood Drilling</Dropdown.Item>
                    <Dropdown.Item eventKey="2-2">Metal Drilling</Dropdown.Item>
                    <Dropdown.Item eventKey="2-3">Concrete Drilling</Dropdown.Item>
                  </Dropdown>


                  <Nav.Item eventKey="3" icon={<Icon icon="data-increase" />}>
                    Saw Blades
                  </Nav.Item>

                  <Nav.Item eventKey="4" icon={<Icon icon="expand-o" />}>
                    Safety Items
                  </Nav.Item>

                  <Dropdown
                    placement="rightStart"
                    eventKey="5"
                    title="Electrical"
                    icon={<Icon icon="creative" />}
                  >
                    <Dropdown.Item eventKey="5-1">Cords & Lights</Dropdown.Item>
                    <Dropdown.Item eventKey="5-2">Holesaws & Misc.</Dropdown.Item>              
                  </Dropdown>

                  <Dropdown
                    placement="rightStart"
                    eventKey="6"
                    title="Abrasive"
                    icon={<Icon icon="cog" />}
                  >
                    <Dropdown.Item eventKey="6-1">Cutting & Grinding</Dropdown.Item>
                    <Dropdown.Item eventKey="6-2">Sanding Products</Dropdown.Item>              
                  </Dropdown>

                  <Nav.Item eventKey="7" icon={<Icon icon="diamond" />}>
                    Diamond Products
                  </Nav.Item>

                  <Nav.Item eventKey="8" icon={<Icon icon="tint" />}>
                    Chemicals
                  </Nav.Item>

                  <Dropdown
                    placement="rightStart"
                    eventKey="9"
                    title="Hand Tools"
                    icon={<Icon icon="wrench" />}
                  >
                    <Dropdown.Item eventKey="9-1">Power Tools</Dropdown.Item>
                    <Dropdown.Item eventKey="9-2">Wrenches</Dropdown.Item>
                    <Dropdown.Item eventKey="9-3">Sockets</Dropdown.Item>   
                    <Dropdown.Item eventKey="9-4">Extractors & Threaders</Dropdown.Item>   
                    <Dropdown.Item eventKey="9-5">Pliers & Clamps</Dropdown.Item>   
                    <Dropdown.Item eventKey="9-6">Williams Tools</Dropdown.Item>                 
                  </Dropdown>

                  <Dropdown
                    placement="rightStart"
                    eventKey="10"
                    title="Shop Tools"
                    icon={<Icon icon="magic2" />}
                  >
                    <Dropdown.Item eventKey="10-1">Jacks & Hydraulic</Dropdown.Item>
                    <Dropdown.Item eventKey="10-2">Pneumatic Tools</Dropdown.Item>
                    <Dropdown.Item eventKey="10-3">Miscellaneous</Dropdown.Item>                 
                  </Dropdown>

                  <Dropdown
                    placement="rightStart"
                    eventKey="11"
                    title="Expendables"
                    icon={<Icon icon="refresh2" />}
                  >
                    <Dropdown.Item eventKey="11-1">Tarps, Straps & Ties</Dropdown.Item>
                    <Dropdown.Item eventKey="11-2">Screw & Nut Drivers</Dropdown.Item>
                    <Dropdown.Item eventKey="11-3">Tapes</Dropdown.Item>                 
                  </Dropdown>


                </Nav>
              </Sidenav.Body>
            </Sidenav>
          </div>
         );
    }
}
 
export default SideNav;
 