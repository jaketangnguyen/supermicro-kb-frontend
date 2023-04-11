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
              {/*
                {// category type filter }
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
              */}

                {/* components filter */}
                <header className="sBarCat">
                  {'Components'}
                </header>

                {this.props.components.map(component => (

                  <ListGroup.Item className="filterList" key={component}>

                    <input
                      onChange={this.handleChange}
                      type="checkbox"
                      value={component} />

                    {component}

                  </ListGroup.Item>
                ))}

                {/* issues filter */}
                <header className="sBarCat">
                  {'Issues'}
                </header>

                {this.props.issues.map(issue => (

                  <ListGroup.Item className="filterList" key={issue}>

                    <input
                      onChange={this.handleChange}
                      type="checkbox"
                      value={issue} />

                    {issue}

                  </ListGroup.Item>
                ))}

              </ListGroup>

            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  };
}

export default SidebarCheckbox;