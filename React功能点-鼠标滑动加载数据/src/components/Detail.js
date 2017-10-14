/**
 * Created by Dengshuo on 2017/8/24.
 */
import React from 'react';
// import FirstDetail from './FirstDetail';
import MultiDetail from './MultiDetail';
import {Row, Col, Icon, Timeline} from 'antd';

export default class Detail extends React.Component {
  displayDetail = () => {
    let info = this.props.info;
    return (
      info.map((item, index) => {
        return <MultiDetail item={item} id={index} key={index}/>
      }))

  }
  showDate=()=>{
    let date1=this.props.info[0].scheduleDate;
    let date2=date1.split("-");
    date2.splice(0,1);
    let date3=date2.join(".")
    return date3;
  }

  render() {
    return <Timeline.Item>
      <Row style={{position: 'relative'}}>
        <h3 style={{position:'absolute',top:55,left:-90,color:'#aaa',fontSize:22}}>{this.showDate()}</h3>
        {this.displayDetail()}
      </Row>
    </Timeline.Item>
  }
}
