import React from 'react';
import {Tag, Card, Modal, Collapse, Tooltip, Icon, Button} from "antd";
import 'antd/es/tag/style/css';
import 'antd/es/card/style/css';
import 'antd/es/modal/style/css';
import 'antd/es/collapse/style/css';
import 'antd/es/tooltip/style/css';
import 'antd/es/icon/style/css';
import 'antd/es/button/style/css';

const SeeTopUrlsModal = ({modalType, modalProps, entries}) => {

  const renderColor = (count) => {
    if (count > 4) {
      return 'green';
    } else if (count > 2) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  const renderUrl = (url, index) => {
    const length = window.innerWidth > 400 ? 60 : 20;
    return <span>{url.substring(0, length)}{url.length < length ? '' : '...'}{url.length < length ? '' : renderTooltip(url)}</span>
  }

  const renderTooltip = (url) => {
    return <Tooltip placement="top" title={url}><Icon className={'icon'} type={'info-circle'}/></Tooltip>;
  }

  const renderList = () => {
    return entries.map( (entry, index) =>
      <Collapse.Panel
          header={<div><Tag color="geekblue"><b>#{index + 1} </b></Tag><Tag color={renderColor(entry.count)}>{`${entry.count} visits`}</Tag>
            {renderUrl(entry.url, index)}
          </div>}
          key={index}
      >
        <span>
          <Tag color="magenta"><b>Our url: </b></Tag>
          <a href={entry.short_url} target={'_blank'}>{entry.short_url}</a>
          <Button type={'primary'} className={'fr'} onClick={() => window.open(entry.short_url,'_blank')}>Visit page</Button>
        </span>
        <p className={'text-justify mt-2'}>{entry.title || 'The page does not have title information.'}</p>
      </Collapse.Panel>
    );
  };

  return (
    <Modal style={{ top: 20 }} footer={<Button onClick={modalProps.onOk} type={'danger'}>Close</Button>} closable={false} className={'content-wrapper'} visible={modalType !== null} width={720} {...modalProps}>
      <Card title={<h3>Top 100 URLs</h3>} bodyStyle={{padding: 0}}>
        <div className={'url-list mt-2'}>
          <Collapse accordion>
            {renderList()}
          </Collapse>
        </div>
      </Card>
    </Modal>
  )
};

export default SeeTopUrlsModal;