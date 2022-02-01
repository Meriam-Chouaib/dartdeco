import React from 'react';
import { Card, Col, Row } from 'antd';
import './Footer.scss';

function Footer() {
    return (
      <div className='footer'>

        <Row className="RowCopyright">
          <Col className='copyright'>
               copyright &copy; Chouaib Meriam 
     
          </Col>
        </Row>
      </div>
     
    )
}

export default Footer
