import React, { Component } from "react";
import { Card, Row, Col} from 'antd';

const { Meta } = Card;

export default class photos extends Component {
  render() {
      return (
        <section id="photos" style={{ background: 'white' }}>
          <div className="row" >
            <div className="twelve columns" >
            <h1>Team</h1>
              <Row>
                <Col sm={4} md={4} lg={4}></Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card 
                    hoverable={true}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images\Headshots\profile-pic-ryan.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Ryan Strawser"
                    description="President"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>                  <Card
                    hoverable={true}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images\Headshots\profile-pic-shadi.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px' }}
                    title="Shadi Zogheib"
                    description="Vice President"
                  />
                  </Card>
                </Col>
              </Row>
              <Row>
              <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={true}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images\Headshots\profile-pic-megan.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Megan Keleman"
                    description="Marketing Advisor"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={true}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images\Headshots\profile-pic-drew.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Drew Klausing"
                    description="Marketing"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={true}
                    style={{ width: '45%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}
                    bordered={false}
                    cover={<img alt="example" src="images\Headshots\profile-pic-adam.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Adam Clark"
                    description="Business Development"
                  />
                  </Card>
                </Col>
              
              </Row>
            </div>
          </div>
          <hr/>
        </section>
      )
  }
}