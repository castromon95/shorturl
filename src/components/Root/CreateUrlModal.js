import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Button, Card, Modal, Row, Col} from "antd";
import 'antd/es/card/style/css';
import 'antd/es/modal/style/css';
import 'antd/es/button/style/css';
import 'antd/es/row/style/css';
import 'antd/es/col/style/css';
import {CreateTextField} from "../../helpers/Input/InputCreator";
import {required, url} from "../../helpers/Input/validations";

const CreateUrlModal = ({modalType, modalProps, onSubmit, handleSubmit}) => {
  return (
    <Modal style={{ top: 20 }}
           footer={null}
           closable={false}
           className={'content-wrapper'}
           visible={modalType !== null}
           width={720}
           {...modalProps}>
      <Card title={'Create short URL'}>
        <Field name="reducer[url]"
               component={CreateTextField}
               label={'Complete URL'}
               validate={[required, url]}
               hasFeedback />
        <Row gutter={16} className={'mt-2'}>
          <Col span={12}>
            <Button onClick={modalProps.onOk} type={'danger'} className={'w-100'}>Close</Button>
          </Col>
          <Col span={12}>
            <Button onClick={handleSubmit(onSubmit)} type={'primary'} className={'w-100'}>Create</Button>
          </Col>
        </Row>
      </Card>
    </Modal>
  )
};

export default reduxForm({form: 'create_url_form'})(CreateUrlModal);