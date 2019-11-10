import React from 'react';
import {connect} from 'react-redux'
import {Button, Card, Row, Col, Alert, Result, Tag} from "antd";
import 'antd/es/alert/style/css';
import 'antd/es/button/style/css';
import 'antd/es/card/style/css';
import 'antd/es/row/style/css';
import 'antd/es/col/style/css';
import 'antd/es/result/style/css';
import {CREATE_URL_MODAL, SEE_TOP_URLS_MODAL} from "../../helpers/Feedback/Modal/types";
import modalShow from "../../actions/base/modal/modalShow";
import reducers__index from "../../actions/controllers/reducers/reducers__index";
import cool from '../../resources/img/cool.svg.png'
import reducers__create from "../../actions/controllers/reducers/reducers__create";
import reducers__dismiss from "../../actions/controllers/reducers/reducers__dismiss";

class Root extends React.Component {

  openUrlModal = () => {
    this.props.modalShow({modalType: CREATE_URL_MODAL, modalProps: {onSubmit: this.props.reducers__create}});
  };

  openTopModal = () => {
    this.props.reducers__index().then(() => {
      this.props.modalShow({
        modalType: SEE_TOP_URLS_MODAL,
        modalProps: {entries: this.props.user.entries}
      });
    });
  };

  renderShortUrl = () => {
    const {shortened_url, original_url} = this.props.user;
    if(shortened_url)
      return (
          <Result
              className={'short_url_success mt-2'}
              status="success"
              title={<div>
                <Tag color={'purple'}>Short</Tag>
                <a className={'short_url'} href={shortened_url} target={'_blank'}>{shortened_url}</a>
              </div>}
              subTitle={<div>
                <Tag color={'volcano'}>Original</Tag>
                {original_url}
              </div>}
              extra={[
                <Button className={'dismiss-btn'} key={'dismiss'} onClick={this.props.reducers__dismiss}>Dismiss</Button>,
              ]}
          />
      );
  };

  render() {
    return (
      <Row>
        <Col xs={0} md={12} >
          <div className={'sup'}>
            <div className={'com'}>
              <h1>
                Your free URL shortener
              </h1>
              <img src={cool} className={'w-80'}/>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className={'container'}>
            <Card title={<h2>Welcome!</h2>} className={'content w-80'} size={'default'}>
              <Alert
                  className={'mt-2'}
                  message="Everything for free"
                  description="Please feel encouraged to try all of our functionalities for free (:"
                  type="info"
                  showIcon
                  closable
              />
              {this.renderShortUrl()}
              <Button type={'primary'} className={'w-100 mt-2'} onClick={this.openUrlModal}>Create URL</Button>
              <Button type={'danger'} className={'w-100 mt-2'} onClick={this.openTopModal}>Top 100 URLs</Button>
            </Card>
          </div>
        </Col>
      </Row>
    );
  }
}


const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, {modalShow, reducers__index, reducers__create, reducers__dismiss})(Root);