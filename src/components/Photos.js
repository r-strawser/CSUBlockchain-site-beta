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
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images\Logos\Encode-Club\PNGs\official-society_01.png" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Cornell"
                    description="Engineering phddddd testing the length"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images\Logos\Encode-Club\PNGs\official-society_01b.png" />}
                  >
                  <Meta style={{ fontSize: '15px' }}
                    title="Upenn"
                    description="CIS"
                  />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images\Logos\Encode-Club\PNGs\official-society_01.png" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="UMich"
                    description="Good"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images\Logos\Encode-Club\PNGs\official-society_01b.png" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="MIT"
                    description="Best"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images\Logos\Encode-Club\PNGs\official-society_01.png" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Caltech"
                    description="Second"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images\Logos\Encode-Club\PNGs\official-society_01b.png" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Caltech"
                    description="Second"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images\Logos\Encode-Club\PNGs\official-society_01.png" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Caltech"
                    description="Second"
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