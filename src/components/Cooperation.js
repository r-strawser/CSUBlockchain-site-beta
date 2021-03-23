import React, { Component } from "react";
import { Card, Row, Col} from 'antd';

export default class Cooperation extends Component {
		render() {
				return (
					<section id="cooperations" style={{ background: 'white' }}>
						<div className="row" >
							<div className="twelve columns" >
							<h1>Partners</h1>
								<Row>
									<Col xs={12} sm={8} md={8} lg={8}>
										<Card
											hoverable={false}
											style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
											bordered={false}
											cover={<img alt="example" src="images\Logos\Encode-Club\PNGs\official-society_01.png" />}
										>
										</Card>
									</Col>
									<Col xs={12} sm={8} md={8} lg={8}>
										<Card
											hoverable={false}
											style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
											bordered={false}
											cover={<img alt="example" src="images\Logos\BDU\BDU-logo.png" />}
										>
										</Card>
									</Col>
									<Col xs={12} sm={8} md={8} lg={8}>
										<Card
											hoverable={false}
											style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
											bordered={false}
											cover={<img alt="example" src="images\Logos\CSU\template-seal.jpg" />}
										>
										</Card>
									</Col>
								</Row>
							</div>
						</div>
					</section>
				)
		}
	}