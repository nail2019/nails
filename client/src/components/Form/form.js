import React, { Component } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
// import { Row } from 'react-bootstrap/Form';
class Form1 extends Component {
    render() {
        return (
            <div className="SignIn--Nailer">
                <div className="SignIn--Nailer--form">
                    <h1 className="SignIn--Title">form đăng ký thợ nail</h1>
                    <Form>
                        <Form.Row>
                             <div className="information">vui lòng điền đầy đủ thông tin và chính xác</div>
                        </Form.Row>
                        <Form.Row>
                            <Col sm='6'>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="firstname" placeholder="Tên" />
                                </Form.Group>
                            </Col>
                            <Col sm='6'>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="middlename" placeholder="Họ và tên đệm" />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <div className="name">nơi đăng ký hoạt động</div>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                        <option className="inputfield">Thành phố Hồ Chí Minh</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                        <option>Quận 1</option>
                                        <option>Quận 2</option>
                                        <option>Quận 3</option>
                                        <option>Quận 4</option>
                                        <option>Quận 5</option>
                                        <option>Quận 6</option>
                                        <option>Quận 7</option>
                                        <option>Quận 8</option>
                                        <option>Quận 9</option>
                                        <option>Quận 10</option>
                                        <option>Quận 11</option>
                                        <option>Quận 12</option>
                                        <option>Quận Thủ Đức</option>
                                        <option>Quận Gò Vấp</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                            <Button variant="success" className="btn">Quay lại</Button>
                            <Button variant="success" className="btn1">Tiếp tục</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Form1;