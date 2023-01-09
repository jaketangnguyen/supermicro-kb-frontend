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

                <ListGroup>
                  <ListGroup.Item >
                    <label>
                      <input type="checkbox" /> {'Questions & Answers'}
                    </label>
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <label>
                      <input type="checkbox" /> {'Articles'}
                    </label>
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <label>
                      <input type="checkbox" /> {'Others'}
                    </label>
                  </ListGroup.Item>
                </ListGroup>

                <ListGroup>

                  <header className="sBarCat">
                    {'Components'}
                  </header>
                  
                  <ListGroup.Item >
                    <input type="checkbox" /> {'System'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" /> {'CPU'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" /> {'Memory'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" /> {'AOC'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" /> {'GPU'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" /> {'Network'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" /> {'Storage Controller'}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <input type="checkbox" /> {'category'}
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