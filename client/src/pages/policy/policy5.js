import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './policy.css';
    
class policy5Page extends Component {
    render() {
        return (
            <div className="dataSecurity">
                <Container>
                    <Row className="mt-5">
                        <Col md={3}></Col>
                        <Col md={6} className="title">CỘNG ĐỒNG HỖ TRỢ</Col>
                    </Row>
                    <Row className="mt-4 mb-5">
                        <Col md={4} className="leftContent">
                            <div className="tag"><Link to={'/policy1'}>Thông tin chúng tôi thu thập</Link></div>
                            <div className="tag"><Link to={'/policy2'}>Mục đích sử dụng thông tin</Link></div>
                            <div className="tag"><Link to={'/policy3'}>Mục đích chia sẻ thông tin</Link></div>
                            <div className="tag"><Link to={'/policy4'}>Thông tin chi tiết</Link></div>
                            <div className="tag"><Link to={'/policy5'}>Cộng đồng hỗ trợ</Link></div>
                            <div className="tag"><Link to={'/policy6'}>Những sự lựa chọn của bạn</Link></div>
                            <div className="tag"><Link to={'/policy7'}>Quyền dữ liệu</Link></div>
                        </Col>
                        <Col md={8}>
                            <div className="contentBox">
                                Chúng tôi cung cấp dịch vụ hỗ trợ khách hàng qua email, tin nhắn SMS và các hình thức tương tác khác. Để hỗ trợ 
                                khách hàng, chúng tôi sẽ yêu cầu khách hàng cung cấp địa chỉ email và số điện thoại di động. Ngoài ra, 
                                chúng tôi không yêu cầu bất kỳ dữ liệu cá nhân nào khác thì mới cung cấp dịch vụ hỗ trợ khách hàng. 
                                Chúng tôi chỉ sử dụng thông tin nhận được khi khách hàng yêu cầu hỗ trợ, trong đó bao gồm địa chỉ email để hỗ trợ 
                                khách hàng và chúng tôi sẽ không chuyển hoặc chia sẻ thông tin này với bất kỳ bên thứ ba nào khác.<br /><br />
                                Bạn cũng có thể gửi câu hỏi qua tính năng “Trò chuyện ngay” (Chat) hoặc “Liên hệ với chúng tôi” (trang Liên Hệ) 
                                của chúng tôi. Diễn đàn của trang tác phẩm cho phép bạn tham gia vào cộng đồng của chúng tôi; và khi làm như vậy, 
                                chúng tôi lưu trữ thông tin như ID người dùng, danh sách liên lạc và trạng thái bình luận của bạn. Ngoài ra, 
                                các dịch vụ tương tự trong tương lai có thể yêu cầu chúng tôi lưu trữ ID người dùng và mật khẩu của bạn.
                            <div>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default policy5Page;