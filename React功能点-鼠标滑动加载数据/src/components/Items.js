/**
 * Created by Dengshuo on 2017/8/24.
 */
import React from 'react';
import {Row, Col, Icon, Timeline} from 'antd';
import Detail from './Detail';

export default class Items extends React.Component {
  displayItems = () => {
    let sortData = this.props.sortData;
    return sortData.map((items, index) => {
      return <Detail info={items} key={index} style={{position: 'absolute', top: 5}}/>
    })
  }

  render() {
    return <Timeline style={{marginTop: 100, position: 'relative'}}>
      {this.displayItems()}
    </Timeline>
  }
}
