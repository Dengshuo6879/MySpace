/**
 * Created by Dengshuo on 2017/8/24.
 */
import {Row, Col,Modal} from 'antd';
import Items from './Items';

export default class AllInfo extends React.Component {
  state = {sortData: [], newDates: [],transferDates:[],visible:false,index:'',i:'',j:'',z:'',x:''};

  shortItems = () => {
    const Data = [{
      "objectVersionNumber": null,
      "createdBy": null,
      "creationDate": null,
      "lastUpdatedBy": null,
      "lastUpdateDate": null,
      "scheduleId": 1,
      "recruitingSeason": "201701",
      "scheduleCode": "201701_001",
      "scheduleName": "广州2月17日综合招聘会",
      "cityCode": "1904",
      "schoolId": -1,
      "scheduleDate": "2017-02-17",
      "recruitAddr": "广州番禺大学城外环西路北亭广场就业服务中心一楼(室内)",
      "lecturerUserId": 11926,
      "traceDepartmentId": 100220,
      "unitName": "应用管理服务中心",
      "coporatePersons": null,
      "startTime": "2017-02-17 09:30:00",
      "endTime": "2017-02-17 16:00:00",
      "status": "PUBLISHED",
      "qrCode": null,
      "scheduleContacts": null,
      "remarks": null,
      "addrName": "广州",
      "cityName": "广州",
      "schoolName": "其他",
      "userName": "孙帆",
      "focusFlag": null,
      "endFlag": null,
      "scheduleTime": null,
      "createdName": "ADMIN",
      "scheduleDateFrom": null,
      "scheduleDateTo": null
    }, {
      "objectVersionNumber": null,
      "createdBy": null,
      "creationDate": null,
      "lastUpdatedBy": null,
      "lastUpdateDate": null,
      "scheduleId": 3,
      "recruitingSeason": "201701",
      "scheduleCode": "201701_003",
      "scheduleName": "芜湖2月27日专场招聘会",
      "cityCode": "1115",
      "schoolId": 2855,
      "scheduleDate": "2017-02-27",
      "recruitAddr": "文津校区 西三202",
      "lecturerUserId": 11684,
      "traceDepartmentId": 110906,
      "unitName": "技术服务中心",
      "coporatePersons": null,
      "startTime": "2017-02-27 17:00:00",
      "endTime": "2017-02-27 21:00:00",
      "status": "PUBLISHED",
      "qrCode": null,
      "scheduleContacts": null,
      "remarks": null,
      "addrName": "芜湖",
      "cityName": "芜湖",
      "schoolName": "安徽信息工程学院",
      "userName": "王浩鑫",
      "focusFlag": null,
      "endFlag": null,
      "scheduleTime": null,
      "createdName": "李阳阳",
      "scheduleDateFrom": null,
      "scheduleDateTo": null
    }, {
      "objectVersionNumber": null,
      "createdBy": null,
      "creationDate": null,
      "lastUpdatedBy": null,
      "lastUpdateDate": null,
      "scheduleId": 15,
      "recruitingSeason": "201701",
      "scheduleCode": "201701_015",
      "scheduleName": "测试",
      "cityCode": "-1",
      "schoolId": -1,
      "scheduleDate": "2017-02-28",
      "recruitAddr": "测试",
      "lecturerUserId": 11666,
      "traceDepartmentId": 110558,
      "unitName": "技术发展部",
      "coporatePersons": "a",
      "startTime": "2017-02-28 19:00:00",
      "endTime": "2017-02-28 21:00:00",
      "status": "CANCELED",
      "qrCode": null,
      "scheduleContacts": "test",
      "remarks": null,
      "addrName": "中国",
      "cityName": "中国",
      "schoolName": "其他",
      "userName": "雷前",
      "focusFlag": null,
      "endFlag": null,
      "scheduleTime": null,
      "createdName": "雷前",
      "scheduleDateFrom": null,
      "scheduleDateTo": null
    }, {
      "objectVersionNumber": null,
      "createdBy": null,
      "creationDate": null,
      "lastUpdatedBy": null,
      "lastUpdateDate": null,
      "scheduleId": 17,
      "recruitingSeason": "201701",
      "scheduleCode": "201701_017",
      "scheduleName": "填写错误",
      "cityCode": "0201",
      "schoolId": 666,
      "scheduleDate": "2017-02-28",
      "recruitAddr": "上海",
      "lecturerUserId": null,
      "traceDepartmentId": 100020,
      "unitName": "技术部",
      "coporatePersons": null,
      "startTime": "2017-02-28 19:00:00",
      "endTime": "2017-02-28 21:00:00",
      "status": "CANCELED",
      "qrCode": null,
      "scheduleContacts": null,
      "remarks": null,
      "addrName": "上海",
      "cityName": "上海",
      "schoolName": "复旦大学",
      "userName": null,
      "focusFlag": null,
      "endFlag": null,
      "scheduleTime": null,
      "createdName": "何军肖",
      "scheduleDateFrom": null,
      "scheduleDateTo": null
    }, {
      "objectVersionNumber": null,
      "createdBy": null,
      "creationDate": null,
      "lastUpdatedBy": null,
      "lastUpdateDate": null,
      "scheduleId": 16,
      "recruitingSeason": "201701",
      "scheduleCode": "201701_016",
      "scheduleName": "的饭卡里手机发",
      "cityCode": "0201",
      "schoolId": 666,
      "scheduleDate": "2017-02-28",
      "recruitAddr": "犯得上发射点",
      "lecturerUserId": null,
      "traceDepartmentId": 100020,
      "unitName": "技术部",
      "coporatePersons": null,
      "startTime": "2017-02-28 19:00:00",
      "endTime": "2017-02-28 21:00:00",
      "status": "CANCELED",
      "qrCode": null,
      "scheduleContacts": null,
      "remarks": null,
      "addrName": "上海",
      "cityName": "上海",
      "schoolName": "复旦大学",
      "userName": null,
      "focusFlag": null,
      "endFlag": null,
      "scheduleTime": null,
      "createdName": "何军肖",
      "scheduleDateFrom": null,
      "scheduleDateTo": null
    }, {
      "objectVersionNumber": null,
      "createdBy": null,
      "creationDate": null,
      "lastUpdatedBy": null,
      "lastUpdateDate": null,
      "scheduleId": 6,
      "recruitingSeason": "201701",
      "scheduleCode": "201701_006",
      "scheduleName": "武汉中国地质大学3月1日周三专场招聘会",
      "cityCode": "1709",
      "schoolId": 1570,
      "scheduleDate": "2017-03-01",
      "recruitAddr": "地质大学北区北一楼报告厅",
      "lecturerUserId": null,
      "traceDepartmentId": 100020,
      "unitName": "技术部",
      "coporatePersons": null,
      "startTime": "2017-03-01 14:00:00",
      "endTime": "2017-03-01 16:00:00",
      "status": "CANCELED",
      "qrCode": null,
      "scheduleContacts": null,
      "remarks": null,
      "addrName": "武汉",
      "cityName": "武汉",
      "schoolName": "中国地质大学(武汉)",
      "userName": null,
      "focusFlag": null,
      "endFlag": null,
      "scheduleTime": null,
      "createdName": "何军肖",
      "scheduleDateFrom": null,
      "scheduleDateTo": null
    }, {
      "objectVersionNumber": null,
      "createdBy": null,
      "creationDate": null,
      "lastUpdatedBy": null,
      "lastUpdateDate": null,
      "scheduleId": 11,
      "recruitingSeason": "201701",
      "scheduleCode": "201701_011",
      "scheduleName": "福州大学3月1号周三专场宣讲会",
      "cityCode": "1501",
      "schoolId": 1143,
      "scheduleDate": "2017-03-01",
      "recruitAddr": "福州大学旗山校区大学生素质拓展中心119室",
      "lecturerUserId": null,
      "traceDepartmentId": 112449,
      "unitName": "研发中心",
      "coporatePersons": null,
      "startTime": "2017-03-01 18:30:00",
      "endTime": "2017-03-01 21:00:00",
      "status": "PUBLISHED",
      "qrCode": null,
      "scheduleContacts": "宣讲会第一联系人陈同学13043550865",
      "remarks": null,
      "addrName": "福州",
      "cityName": "福州",
      "schoolName": "福州大学",
      "userName": null,
      "focusFlag": null,
      "endFlag": null,
      "scheduleTime": null,
      "createdName": "何军肖",
      "scheduleDateFrom": null,
      "scheduleDateTo": null
    }, {
      "objectVersionNumber": null,
      "createdBy": null,
      "creationDate": null,
      "lastUpdatedBy": null,
      "lastUpdateDate": null,
      "scheduleId": 8,
      "recruitingSeason": "201701",
      "scheduleCode": "201701_008",
      "scheduleName": "湖南大学3月1号周三专场宣讲",
      "cityCode": "1613",
      "schoolId": 1690,
      "scheduleDate": "2017-03-01",
      "recruitAddr": "福林舍105室",
      "lecturerUserId": null,
      "traceDepartmentId": 110955,
      "unitName": "移动技术中心",
      "coporatePersons": null,
      "startTime": "2017-03-01 15:00:00",
      "endTime": "2017-03-01 17:00:00",
      "status": "PUBLISHED",
      "qrCode": null,
      "scheduleContacts": null,
      "remarks": null,
      "addrName": "长沙",
      "cityName": "长沙",
      "schoolName": "湖南大学",
      "userName": null,
      "focusFlag": null,
      "endFlag": null,
      "scheduleTime": null,
      "createdName": "何军肖",
      "scheduleDateFrom": null,
      "scheduleDateTo": null
    }, {
      "objectVersionNumber": null,
      "createdBy": null,
      "creationDate": null,
      "lastUpdatedBy": null,
      "lastUpdateDate": null,
      "scheduleId": 2,
      "recruitingSeason": "201701",
      "scheduleCode": "201701_002",
      "scheduleName": "湖南师范大学3月1日专场招聘",
      "cityCode": "1613",
      "schoolId": 1700,
      "scheduleDate": "2017-03-01",
      "recruitAddr": "于数学与计算机学院209室",
      "lecturerUserId": 23348,
      "traceDepartmentId": 112751,
      "unitName": "中台技术中心",
      "coporatePersons": null,
      "startTime": "2017-03-01 18:30:00",
      "endTime": "2017-03-01 21:00:00",
      "status": "PUBLISHED",
      "qrCode": null,
      "scheduleContacts": "宣讲会第一联系人：张老师：18274842267笔试面试于3月2号早8：30于数学与计算机学院409室",
      "remarks": null,
      "addrName": "长沙",
      "cityName": "长沙",
      "schoolName": "湖南师范大学",
      "userName": null,
      "focusFlag": null,
      "endFlag": null,
      "scheduleTime": null,
      "createdName": "ADMIN",
      "scheduleDateFrom": null,
      "scheduleDateTo": null
    }, {
      "objectVersionNumber": null,
      "createdBy": null,
      "creationDate": null,
      "lastUpdatedBy": null,
      "lastUpdateDate": null,
      "scheduleId": 85,
      "recruitingSeason": "201701",
      "scheduleCode": "201701_085",
      "scheduleName": "湖北大学春招",
      "cityCode": "1709",
      "schoolId": 1576,
      "scheduleDate": "2017-03-01",
      "recruitAddr": "商学院3楼MBA教室",
      "lecturerUserId": 14956,
      "traceDepartmentId": 100220,
      "unitName": "应用管理服务中心",
      "coporatePersons": null,
      "startTime": "2017-03-01 14:30:00",
      "endTime": "2017-03-01 17:00:00",
      "status": "PUBLISHED",
      "qrCode": null,
      "scheduleContacts": "肖老师18627809636",
      "remarks": null,
      "addrName": "武汉",
      "cityName": "武汉",
      "schoolName": "湖北大学",
      "userName": "潘卉",
      "focusFlag": null,
      "endFlag": null,
      "scheduleTime": null,
      "createdName": "昌恒勇",
      "scheduleDateFrom": null,
      "scheduleDateTo": null
    }, {
      "objectVersionNumber": null,
      "createdBy": null,
      "creationDate": null,
      "lastUpdatedBy": null,
      "lastUpdateDate": null,
      "scheduleId": 85,
      "recruitingSeason": "201701",
      "scheduleCode": "201701_085",
      "scheduleName": "湖北大学春招",
      "cityCode": "1709",
      "schoolId": 1576,
      "scheduleDate": "2017-09-15",
      "recruitAddr": "商学院3楼MBA教室",
      "lecturerUserId": 14956,
      "traceDepartmentId": 100220,
      "unitName": "应用管理服务中心",
      "coporatePersons": null,
      "startTime": "2017-03-01 14:30:00",
      "endTime": "2017-03-01 17:00:00",
      "status": "PUBLISHED",
      "qrCode": null,
      "scheduleContacts": "肖老师18627809636",
      "remarks": null,
      "addrName": "武汉",
      "cityName": "武汉",
      "schoolName": "湖北大学",
      "userName": "潘卉",
      "focusFlag": null,
      "endFlag": null,
      "scheduleTime": null,
      "createdName": "昌恒勇",
      "scheduleDateFrom": null,
      "scheduleDateTo": null
    }, {
      "objectVersionNumber": null,
      "createdBy": null,
      "creationDate": null,
      "lastUpdatedBy": null,
      "lastUpdateDate": null,
      "scheduleId": 85,
      "recruitingSeason": "201701",
      "scheduleCode": "201701_085",
      "scheduleName": "湖北大学春招",
      "cityCode": "1709",
      "schoolId": 1576,
      "scheduleDate": "2017-09-15",
      "recruitAddr": "商学院3楼MBA教室",
      "lecturerUserId": 14956,
      "traceDepartmentId": 100220,
      "unitName": "应用管理服务中心",
      "coporatePersons": null,
      "startTime": "2017-03-01 14:30:00",
      "endTime": "2017-03-01 17:00:00",
      "status": "PUBLISHED",
      "qrCode": null,
      "scheduleContacts": "肖老师18627809636",
      "remarks": null,
      "addrName": "武汉",
      "cityName": "武汉",
      "schoolName": "湖北大学",
      "userName": "潘卉",
      "focusFlag": null,
      "endFlag": null,
      "scheduleTime": null,
      "createdName": "昌恒勇",
      "scheduleDateFrom": null,
      "scheduleDateTo": null
    },
    //////////
      {
        "objectVersionNumber": null,
        "createdBy": null,
        "creationDate": null,
        "lastUpdatedBy": null,
        "lastUpdateDate": null,
        "scheduleId": 6,
        "recruitingSeason": "201701",
        "scheduleCode": "201701_006",
        "scheduleName": "武汉中国地质大学3月1日周三专场招聘会",
        "cityCode": "1709",
        "schoolId": 1570,
        "scheduleDate": "2017-09-17",
        "recruitAddr": "地质大学北区北一楼报告厅",
        "lecturerUserId": null,
        "traceDepartmentId": 100020,
        "unitName": "技术部",
        "coporatePersons": null,
        "startTime": "2017-03-01 14:00:00",
        "endTime": "2017-03-01 16:00:00",
        "status": "CANCELED",
        "qrCode": null,
        "scheduleContacts": null,
        "remarks": null,
        "addrName": "武汉",
        "cityName": "武汉",
        "schoolName": "中国地质大学(武汉)",
        "userName": null,
        "focusFlag": null,
        "endFlag": null,
        "scheduleTime": null,
        "createdName": "何军肖",
        "scheduleDateFrom": null,
        "scheduleDateTo": null
      }, {
        "objectVersionNumber": null,
        "createdBy": null,
        "creationDate": null,
        "lastUpdatedBy": null,
        "lastUpdateDate": null,
        "scheduleId": 11,
        "recruitingSeason": "201701",
        "scheduleCode": "201701_011",
        "scheduleName": "福州大学3月1号周三专场宣讲会",
        "cityCode": "1501",
        "schoolId": 1143,
        "scheduleDate": "2017-10-11",
        "recruitAddr": "福州大学旗山校区大学生素质拓展中心119室",
        "lecturerUserId": null,
        "traceDepartmentId": 112449,
        "unitName": "研发中心",
        "coporatePersons": null,
        "startTime": "2017-03-01 18:30:00",
        "endTime": "2017-03-01 21:00:00",
        "status": "PUBLISHED",
        "qrCode": null,
        "scheduleContacts": "宣讲会第一联系人陈同学13043550865",
        "remarks": null,
        "addrName": "福州",
        "cityName": "福州",
        "schoolName": "福州大学",
        "userName": null,
        "focusFlag": null,
        "endFlag": null,
        "scheduleTime": null,
        "createdName": "何军肖",
        "scheduleDateFrom": null,
        "scheduleDateTo": null
      }, {
        "objectVersionNumber": null,
        "createdBy": null,
        "creationDate": null,
        "lastUpdatedBy": null,
        "lastUpdateDate": null,
        "scheduleId": 85,
        "recruitingSeason": "201701",
        "scheduleCode": "201701_085",
        "scheduleName": "湖北大学春招",
        "cityCode": "1709",
        "schoolId": 1576,
        "scheduleDate": "2017-10-11",
        "recruitAddr": "商学院3楼MBA教室",
        "lecturerUserId": 14956,
        "traceDepartmentId": 100220,
        "unitName": "应用管理服务中心",
        "coporatePersons": null,
        "startTime": "2017-03-01 14:30:00",
        "endTime": "2017-03-01 17:00:00",
        "status": "PUBLISHED",
        "qrCode": null,
        "scheduleContacts": "肖老师18627809636",
        "remarks": null,
        "addrName": "武汉",
        "cityName": "武汉",
        "schoolName": "湖北大学",
        "userName": "潘卉",
        "focusFlag": null,
        "endFlag": null,
        "scheduleTime": null,
        "createdName": "昌恒勇",
        "scheduleDateFrom": null,
        "scheduleDateTo": null
      },{
        "objectVersionNumber": null,
        "createdBy": null,
        "creationDate": null,
        "lastUpdatedBy": null,
        "lastUpdateDate": null,
        "scheduleId": 8,
        "recruitingSeason": "201701",
        "scheduleCode": "201701_008",
        "scheduleName": "湖南大学3月1号周三专场宣讲",
        "cityCode": "1613",
        "schoolId": 1690,
        "scheduleDate": "2017-10-11",
        "recruitAddr": "福林舍105室",
        "lecturerUserId": null,
        "traceDepartmentId": 110955,
        "unitName": "移动技术中心",
        "coporatePersons": null,
        "startTime": "2017-03-01 15:00:00",
        "endTime": "2017-03-01 17:00:00",
        "status": "PUBLISHED",
        "qrCode": null,
        "scheduleContacts": null,
        "remarks": null,
        "addrName": "长沙",
        "cityName": "长沙",
        "schoolName": "湖南大学",
        "userName": null,
        "focusFlag": null,
        "endFlag": null,
        "scheduleTime": null,
        "createdName": "何军肖",
        "scheduleDateFrom": null,
        "scheduleDateTo": null
      }, {
        "objectVersionNumber": null,
        "createdBy": null,
        "creationDate": null,
        "lastUpdatedBy": null,
        "lastUpdateDate": null,
        "scheduleId": 2,
        "recruitingSeason": "201701",
        "scheduleCode": "201701_002",
        "scheduleName": "湖南师范大学3月1日专场招聘",
        "cityCode": "1613",
        "schoolId": 1700,
        "scheduleDate": "2017-10-13",
        "recruitAddr": "于数学与计算机学院209室",
        "lecturerUserId": 23348,
        "traceDepartmentId": 112751,
        "unitName": "中台技术中心",
        "coporatePersons": null,
        "startTime": "2017-03-01 18:30:00",
        "endTime": "2017-03-01 21:00:00",
        "status": "PUBLISHED",
        "qrCode": null,
        "scheduleContacts": "宣讲会第一联系人：张老师：18274842267笔试面试于3月2号早8：30于数学与计算机学院409室",
        "remarks": null,
        "addrName": "长沙",
        "cityName": "长沙",
        "schoolName": "湖南师范大学",
        "userName": null,
        "focusFlag": null,
        "endFlag": null,
        "scheduleTime": null,
        "createdName": "ADMIN",
        "scheduleDateFrom": null,
        "scheduleDateTo": null
      }, {
        "objectVersionNumber": null,
        "createdBy": null,
        "creationDate": null,
        "lastUpdatedBy": null,
        "lastUpdateDate": null,
        "scheduleId": 85,
        "recruitingSeason": "201701",
        "scheduleCode": "201701_085",
        "scheduleName": "湖北大学春招",
        "cityCode": "1709",
        "schoolId": 1576,
        "scheduleDate": "2017-10-27",
        "recruitAddr": "商学院3楼MBA教室",
        "lecturerUserId": 14956,
        "traceDepartmentId": 100220,
        "unitName": "应用管理服务中心",
        "coporatePersons": null,
        "startTime": "2017-03-01 14:30:00",
        "endTime": "2017-03-01 17:00:00",
        "status": "PUBLISHED",
        "qrCode": null,
        "scheduleContacts": "肖老师18627809636",
        "remarks": null,
        "addrName": "武汉",
        "cityName": "武汉",
        "schoolName": "湖北大学",
        "userName": "潘卉",
        "focusFlag": null,
        "endFlag": null,
        "scheduleTime": null,
        "createdName": "昌恒勇",
        "scheduleDateFrom": null,
        "scheduleDateTo": null
      }, {
        "objectVersionNumber": null,
        "createdBy": null,
        "creationDate": null,
        "lastUpdatedBy": null,
        "lastUpdateDate": null,
        "scheduleId": 85,
        "recruitingSeason": "201701",
        "scheduleCode": "201701_085",
        "scheduleName": "湖北大学春招",
        "cityCode": "1709",
        "schoolId": 1576,
        "scheduleDate": "2017-10-27",
        "recruitAddr": "商学院3楼MBA教室",
        "lecturerUserId": 14956,
        "traceDepartmentId": 100220,
        "unitName": "应用管理服务中心",
        "coporatePersons": null,
        "startTime": "2017-03-01 14:30:00",
        "endTime": "2017-03-01 17:00:00",
        "status": "PUBLISHED",
        "qrCode": null,
        "scheduleContacts": "肖老师18627809636",
        "remarks": null,
        "addrName": "武汉",
        "cityName": "武汉",
        "schoolName": "湖北大学",
        "userName": "潘卉",
        "focusFlag": null,
        "endFlag": null,
        "scheduleTime": null,
        "createdName": "昌恒勇",
        "scheduleDateFrom": null,
        "scheduleDateTo": null
      }, {
        "objectVersionNumber": null,
        "createdBy": null,
        "creationDate": null,
        "lastUpdatedBy": null,
        "lastUpdateDate": null,
        "scheduleId": 85,
        "recruitingSeason": "201701",
        "scheduleCode": "201701_085",
        "scheduleName": "湖北大学春招",
        "cityCode": "1709",
        "schoolId": 1576,
        "scheduleDate": "2017-10-27",
        "recruitAddr": "商学院3楼MBA教室",
        "lecturerUserId": 14956,
        "traceDepartmentId": 100220,
        "unitName": "应用管理服务中心",
        "coporatePersons": null,
        "startTime": "2017-03-01 14:30:00",
        "endTime": "2017-03-01 17:00:00",
        "status": "PUBLISHED",
        "qrCode": null,
        "scheduleContacts": "肖老师18627809636",
        "remarks": null,
        "addrName": "武汉",
        "cityName": "武汉",
        "schoolName": "湖北大学",
        "userName": "潘卉",
        "focusFlag": null,
        "endFlag": null,
        "scheduleTime": null,
        "createdName": "昌恒勇",
        "scheduleDateFrom": null,
        "scheduleDateTo": null
      },{
        "objectVersionNumber": null,
        "createdBy": null,
        "creationDate": null,
        "lastUpdatedBy": null,
        "lastUpdateDate": null,
        "scheduleId": 8,
        "recruitingSeason": "201701",
        "scheduleCode": "201701_008",
        "scheduleName": "湖南大学3月1号周三专场宣讲",
        "cityCode": "1613",
        "schoolId": 1690,
        "scheduleDate": "2017-10-28",
        "recruitAddr": "福林舍105室",
        "lecturerUserId": null,
        "traceDepartmentId": 110955,
        "unitName": "移动技术中心",
        "coporatePersons": null,
        "startTime": "2017-03-01 15:00:00",
        "endTime": "2017-03-01 17:00:00",
        "status": "PUBLISHED",
        "qrCode": null,
        "scheduleContacts": null,
        "remarks": null,
        "addrName": "长沙",
        "cityName": "长沙",
        "schoolName": "湖南大学",
        "userName": null,
        "focusFlag": null,
        "endFlag": null,
        "scheduleTime": null,
        "createdName": "何军肖",
        "scheduleDateFrom": null,
        "scheduleDateTo": null
      }];
    let scheduleDates = [];
    Data.map((item) => {
      scheduleDates.push(item.scheduleDate);
    })
    scheduleDates = this.unique(scheduleDates);
    //对scheduleDates进行排序
    let newDates = [];
    scheduleDates.map((items, index) => {
      newDates.push([]);
      newDates[index].push(items.split("-").join(""));
    })
    //创建二维数组，保存每个日期下的所有数据
    let sortData = [];
    newDates.map((items, index) => {
      sortData.push([]);
      Data.map((data) => {
        if (items[0] === data.scheduleDate.split("-").join("")) {
          sortData[index].push(data);
        }
      })
    })
    this.setState({sortData});

    //只取当前日期之后的日期
    let currentDate = this.getNowFormatDate();
    let indexs = [];
    newDates.map((items, index) => {
      if (parseInt(items[0]) > parseInt(currentDate)) {
        indexs.push(index);
      }
    })
    this.setState({transferDates:[...sortData].splice(indexs[0],3),index:indexs[0],i:indexs,j:indexs,z:indexs,x:indexs})
  }
  //数组去重
  unique = (arr) => {
    let newArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) == -1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  //获取当前时间
  getNowFormatDate = () => {
    let date = new Date();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    let currentdate = date.getFullYear() + month + strDate;
    return currentdate;
  }

  componentDidMount() {
    this.shortItems();
    this.setState({visible:true})
  }
  handleOK=()=>{
    this.setState({visible:false});
  }

  handleWheel = (e) => {
    let sortData=this.state.sortData;
    let index=this.state.index;
    let i=parseInt(this.state.i);
    let j=parseInt(this.state.j);
    let z=parseInt(this.state.z);
    let x=parseInt(this.state.x);
    let scrollTop = document.body.scrollTop;
    let clientHeight=document.body.clientHeight;
    let deltaY = e.deltaY;
    if (scrollTop === 0 && deltaY ===-100) {
      let sortDataCopy=[...sortData];
      j=z;
      let transferDates = sortDataCopy.splice(i, x-1);
      i--;
      x++;
      if(i<0){
        i=0;
        x=index+4;
      }
      this.setState({i,j,x,transferDates});
      console.log(i,x);
    }else if(scrollTop+clientHeight>=document.body.scrollHeight&&deltaY===100){
      let sortDataCopy=[...sortData];
      i=z;
      let transferDates=sortDataCopy.splice(index,j-1);
      j++;
      if(j>sortData.length-index){
        j=sortData.length-index+1;
      }
      this.setState({i,j,transferDates});
      console.log(index,j-1)
    }
  }

  render() {
    return <div style={{marignTop: 50}} onWheel={this.handleWheel} ref="bodyNode">
      <Modal
        title="Title"
        visible={this.state.visible}
        onOk={this.handleOK}
        onCancel={this.handleOK}
      >
        <h3>鼠标上滑加载历史，下滑加载更多</h3>
      </Modal>
      <Row>
        <Col span={18} offset={6}>
          <Items sortData={this.state.transferDates}/>
        </Col>
      </Row>
    </div>
  }
}
