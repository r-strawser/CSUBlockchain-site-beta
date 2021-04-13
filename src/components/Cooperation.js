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
											cover={<a href="https://www.encode.club/"><img alt="example" src="images\Logos\Encode-Club\PNGs\official-society_01.png" /></a>}
										>
										</Card>
									</Col>
									<Col xs={12} sm={8} md={8} lg={8}>
										<Card
											hoverable={false}
											style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
											bordered={false}
											cover={<a href="https://www.meetup.com/Blockchain-Developers-Canada/"><img alt="example" src="images\Logos\BDU\BDU-logo.png" /></a>}
										>
										</Card>
									</Col>
									<Col xs={12} sm={8} md={8} lg={8}>
										<Card
											hoverable={false}
											style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
											bordered={false}
											cover={<a href="https://blockchainedu.org/"><img alt="example" src="images\Logos\BEN\blockchain-education-network.png" /></a>}
										>
										</Card>
									</Col>
									<Col xs={12} sm={8} md={8} lg={8}>
										<Card
											hoverable={false}
											style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
											bordered={false}
											cover={<a href="https://www.csuohio.edu/"><img alt="example" src="images\Logos\CSU\template-seal.jpg" /></a>}
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