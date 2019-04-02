import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './security.css';
import { Link } from 'react-router-dom';
    
class securityPage extends Component {
    render() {
        return (
            <div className="dataSecurity">
                <Container>
                    <Row className="mt-5">
                        <Col md={4}></Col>
                        <Col md={4} className="title">CHÍNH SÁCH BẢO MẬT</Col>
                    </Row>
                    <Row className="mt-4 mb-5">
                        <Col md={4} className="leftContent">
                            <div className="tag"><Link to={'/security1'}>Thông tin chúng tôi thu thập</Link></div>
                            <div className="tag">Mục đích sử dụng thông tin</div>
                            <div className="tag">Mục đích chia sẻ thông tin</div>
                            <div className="tag">Thông tin chi tiết</div>
                            <div className="tag">Cộng đồng hỗ trợ</div>
                            <div className="tag">Những sự lựa chọn của bạn</div>
                            <div className="tag">Quyền dữ liệu</div>
                        </Col>
                        <Col md={8}>
                            <div className="contentBox">
                                Chính sách bảo mật dưới đây mô tả cách chúng  tôi thu thập, lưu trữ, sử dụng, truyền tải, tiết lộ và bảo mật thông tin cá nhân của bạn mà chúng  tôi xác định và thu thập thông qua ứng dụng của chúng tôi (như được mô tả bên dưới).<br /><br />
                                Các thuật ngữ Nail Partner, chúng  tôi bao gồm cả Nail Partner, Inc. và các cộng sự. Chúng  tôi sử dụng các thuật ngữ thành viên,  nhà cung cấp dịch vụ, bạn để định nghĩa bất kỳ ai sử dụng  ứng dụng của chúng  tôi hoặc tham dự các sự kiện liên quan, bao gồm mọi thợ nail hay khách hàng. 
                                Xin hãy đọc hết chính sách bảo mật này để đảm bảo rằng bạn hiểu được cách chúng  tôi áp dụng nó.
                                Chính sách bảo mật này là một phần của các điều khoản sử dụng của chúng tôi. Chính sách bảo mật này bao gồm những vấn đề sau đây:<br /><br />
                                <ol>
                                    <li>Thông tin chúng tôi thu thập</li>
                                    <li>Mục đích sử dụng thông tin</li>
                                    <li>Mục đích chia sẻ thông tin</li>
                                    <li>Thông tin chi tiết</li>
                                    <li>Cộng đồng hỗ trợ</li>
                                    <li>Những sự lựa chọn của bạn</li>
                                    <li>Quyền dữ liệu</li>                      
                                </ol>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default securityPage;