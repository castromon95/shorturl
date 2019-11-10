import React from 'react';
import {connect} from 'react-redux';
import modalDismiss from "../../../actions/base/modal/modalDismiss";

const Modal = (props) => {
  
  if (!props.modal.modalType) {
    return null
  }
  
  const dismissModal = () => {
    props.modalDismiss();
  };
  
  const SpecificModal = props.modal.modalType;
  const modalProps = {
    onOk: dismissModal,
    onCancel: dismissModal,
    maskClosable: true,
  };
  
  return <SpecificModal modalProps={modalProps} {...props.modal.modalProps} {...props.modal.componentProps} />;
  
};

function mapStateToProps(state) {
  return {
    modal: state.modal
  }
}

export default (connect(mapStateToProps, {modalDismiss})(Modal));