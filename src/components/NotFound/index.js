import React from 'react';
import {Button, Card, Col, Row} from "antd";
import notFound from '../../resources/img/404.svg';
import {push} from 'connected-react-router';
import {connect} from "react-redux";

const NotFound = ({push}) => {
  
  return (
    <Card bordered={false} style={{backgroundColor: 'transparent'}}>
      <Row gutter={16} type={'flex'}>
        <Col className={'text-center mt-2'} span={24}>
            <img src={notFound} alt=""/>
          </Col>
        <Col className={'text-center mt-2'} span={24}>
            <h2 style={{fontSize: 50, fontWeight: 'bold'}}>404</h2>
            <h4 style={{fontSize: 30}}>We are sorry, the page you are looking for doesn't exist</h4>
          <Button type={'primary'} size={'large'} onClick={() => push('/')}>Go to homepage</Button>
          </Col>
        </Row>
      </Card>
  );
};

export default connect(null, {push})(NotFound);