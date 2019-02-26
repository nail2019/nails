import React, { Component } from 'react';
import './banner.css'
import { Row } from 'react-bootstrap';

class Background extends Component {
    render() {
        return (
            <React.Fragment>
                <Row className="banner">
                    <div className='banner-opacity'>
                    </div>
                    <div className='banner__content'>
                        <p>đăng nhập hoặc đăng ký ngay</p>
                        <button className="btn btn-signup">Đăng ký</button>
                        <button className="btn btn-login">Đăng nhập</button>
                    </div>
                </Row>
            </React.Fragment>
        );
    }
}

export default Background;
