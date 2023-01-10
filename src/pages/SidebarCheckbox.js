import React from "react";
import { TabContainer } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';

class SidebarCheckbox extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onFilterChange(e);
  }

  render() {
    return (
      <div>
        <Tab.Container>
          <Row>
            <Col sm={4}>

              <ListGroup className="sidebar">

                <header className="sBarCat">
                  {'Categories'}
                </header>

                {this.props.categories.map(category => (

                  <ListGroup.Item className="filterList" key={category}>

                      <input
                        onChange={this.handleChange}
                        type="checkbox"
                        value={category} />

                      {category}

                  </ListGroup.Item>
                ))}

                <ListGroup>

                  <header className="sBarCat">
                    {'Components'}
                  </header>

                  <ListGroup.Item >
                    <input type="checkbox" onChange={this.handleChange}/> {'System'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" onChange={this.handleChange}/> {'CPU'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" onChange={this.handleChange}/> {'Memory'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" onChange={this.handleChange}/> {'Storage'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" onChange={this.handleChange}/> {'GPU'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" onChange={this.handleChange}/> {'AOC Storage'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" onChange={this.handleChange}/> {'AOC Networking'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" onChange={this.handleChange}/> {'SIOM/AIOM'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" onChange={this.handleChange}/> {'Accessories'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" onChange={this.handleChange}/> {'Add-On Part'}
                  </ListGroup.Item>
                </ListGroup>

                <ListGroup>
                  <header className="sBarCat">
                    {'Issue Type'}
                  </header>

                  <ListGroup.Item >
                    <input type="checkbox" onChange={this.handleChange}/> {'Product Compatibility'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" onChange={this.handleChange}/> {'Product information'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" onChange={this.handleChange}/> {'Product Recommendation'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" onChange={this.handleChange}/> {'RAID'}
                  </ListGroup.Item>
                </ListGroup>

                {/* {this.props.categories.map(category => (

                  <ListGroup.Item className="filterList" key={category}>
                    <label>

                      <input
                        onChange={this.handleChange}
                        type="checkbox"
                        value={category} />

                      {category}

                    </label>
                  </ListGroup.Item>
                ))} */}

              </ListGroup>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  };
}

export default SidebarCheckbox;