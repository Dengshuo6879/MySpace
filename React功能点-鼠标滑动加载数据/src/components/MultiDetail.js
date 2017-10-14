/**
 * Created by Dengshuo on 2017/8/24.
 */
import React from 'react';
import {Row, Col, Icon} from 'antd';

export default class MultiDetail extends React.Component {
  state={addOpacity:false};
  componentDidMount(){
    this.setState({addOpacity:true})
  }
  displayDetails = () => {
    let info=this.props.item;
    return <div className={this.state.addOpacity?"itemAddOpacity":"itemOpacity"}>
      <div style={{
        float: 'left',
        backgroundColor: '#e4393c',
        width: 60,
        height: 130,
        position: 'relative'
      }}>
        {this.props.id===0?<span style={{
          display: 'inline-block',
          position: 'absolute',
          width: 20,
          height: 20,
          backgroundColor: '#e4293c',
          transform: 'rotate(45deg)',
          top: 50,
          left: -8
        }}></span>:null}
        <h2 style={{
          color: '#fff',
          width: 25,
          margin: '0 auto',
          marginTop: 35,
        }}>{info.cityName}</h2>
      </div>
      <div style={{
        float: 'left',
        width: 270,
        height: 130,
        border: '1px solid #ddd',
        borderLeft: 0,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        padding: 10
      }}>
        <h1>{info.schoolName}</h1>
        <h3 style={{marginTop: 8, color: '#aaa'}}><Icon type="environment-o" style={{marginRight: 5,marginTop:5,verticalAlign:'top'}}/>
          <span style={{display:'inline-block',width:225}}>{info.recruitAddr}</span>
        </h3>
        <h3 style={{marginTop: 8, color: '#aaa'}}><Icon type='message' style={{marginRight: 5,marginTop:6,verticalAlign:'top'}}/>
          <span style={{display:'inline-block',width:225}}>{info.scheduleName}</span>
          </h3>
      </div>
    </div>
  };

  render() {
    return <Col span={9}>{this.displayDetails()}</Col>
  }
}
