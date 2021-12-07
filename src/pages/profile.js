import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';




class Profile extends React.Component {

    render() {

        return (
            <Container fluid className="m-0 p-0 no-gutters">
                <Row className="m-0 p-0">
                    <Col className="m-0 p-0">

                        <Breadcrumb className="p-2">
                            <Breadcrumb.Item href="/">Profile</Breadcrumb.Item>
                        </Breadcrumb>

                        <Container fluid className="m-0 p-0 no-gutters">
                            <Row className="m-0 p-0">
                                <Col className="m-0 p-0">

                                <div className="card col-lg-8 col-md-4 col-sm-6 py-2 mx-5 mt-4 mb-4">
                                    <div class="card-header">
                                        <h2>My profile</h2>
                                    </div>
                                    <div className="mx-4">
                                        <div class="col-lg-4 col-md-4 py-2 mx-2">
                                            <img class="rounded w-100" src="img/logo-mycoinfolio.png" alt="poster"/>
                                        </div>
                                        <input type="hidden" name="id" value=""/>
                                        <h3 class="card-title mt-3 ml-5"><strong>Username: Admin</strong></h3>
                                        <hr></hr>
                                        <h3 class="card-title ml-5"><strong>Email: Admin@admin.com</strong></h3>
                                        <hr></hr>
                                        <h3 class="card-title ml-5"><strong>Newsletter: Yes</strong></h3>
                                        <hr></hr>
                                    </div>

                                    <div class="col-12 px-5">
                                        <a href="" ><button className="btn btn-secondary mx-2"><i className="fa fa-edit mr-1"></i>Edit</button></a>
                                        <a href="" className="ml-3"><button className="btn btn-secondary mx-2"><i class="fa fa-edit mr-1"></i>Change password</button></a>
                                    </div>
                                    
                                </div>
                                </Col>
                                <div class="card col-lg-5 col-md-4 col-sm-6 py-2 mx-5 mt-4 mb-4">
                                    <div class="card-header">
                                        <h2>My Portfolio</h2>
                                    </div>
                                    <div className="mx-4">

                                        <a href="" ><button className="btn btn-secondary mx-2 mt-2">Portfolio 1</button></a>
                                        <div className="container">
                                            <div className="row align-items-end">
                                                <div className="col-12">
                                                    <h4 className="mt-3">Total portfolio: 36245 $</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <table>
                                            <th className="px-5">Coin</th>
                                            <th className="px-5">Price</th>
                                            <th className="px-5">Quantity</th>
                                        </table>
                                        <hr></hr>
                                        <div className="mx-2 mt-3">
                                        <h3><strong>BTC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35605&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.055</strong></h3>
                                        <hr></hr>
                                        <h3><strong>LTC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;121.05&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.5</strong></h3>
                                        <hr></hr>
                                        <h3><strong>AVAX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;55.14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9</strong></h3>
                                        <hr></hr>
                                        </div>
                                    </div>

                                    <div class="col-12 px-5">
                                        <a href="" ><button className="btn btn-secondary mx-2"><i className="fa fa-edit mr-1"></i>Edit Portfolio</button></a>
                                        <a href="" className="ml-3"><button className="btn btn-secondary mx-2"><i class="fa fa-edit mr-1"></i>Add Coin</button></a>
                                    </div>
                                    
                                </div>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );

    }

}

export default Profile;