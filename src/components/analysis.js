import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Breadcrumb } from 'react-bootstrap';
import { AnalysisContextProvider } from "./analysisContext";
import Analysis from "./analysisShow";
import '../styles/style.css';



class Index extends React.Component {

    render() {

        return (
            <Container fluid className="m-0 p-0 no-gutters">
                <Row className="m-0 p-0">
                    <Col className="m-0 p-0">

                        <Breadcrumb className="p-2">
                            <Breadcrumb.Item href="/analysis">Analysis</Breadcrumb.Item>
                        </Breadcrumb>

                        <AnalysisContextProvider>
                            <Analysis />
                        </AnalysisContextProvider>


                    </Col>
                </Row>
            </Container>
        );

    }

}

export default Index;