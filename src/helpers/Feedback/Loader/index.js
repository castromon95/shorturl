import React from 'react';
import {connect} from 'react-redux';
import './Loader.css';
import mag  from '../../../resources/img/mag.png';

class LoaderContainer extends React.Component {
  
  renderLoader() {
    if (this.props.loading) {
      return (
        <div className="loading-container">
          <div className="loader-container">
            <img alt={'loader'} width={'100%'} className={'pulsate-fwd'} src={mag}/>
          </div>
        </div>
      );
    }
  }
  
  render() {
    return (
      <React.Fragment>
        {this.renderLoader()}
      </React.Fragment>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    loading: state.loading.loading
  };
};

export default connect(mapStateToProps)(LoaderContainer);