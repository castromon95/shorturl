import React from 'react';
import {Layout} from "antd";
import Loader from '../../helpers/Feedback/Loader';
import ModalContainer from "../../helpers/Feedback/Modal";
import RoutesContainer from "./RoutesContainer";

class AppContainer extends React.Component {
  render() {
    return (
      <Layout>
        <Loader/>
        <ModalContainer/>
        <Layout>
          <Layout.Content>
            <RoutesContainer/>
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

export default AppContainer;