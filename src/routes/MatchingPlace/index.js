import React, {useEffect, useState} from 'react';
import ProfileTag from "../components/ProfileTag";
import img from "./mockData/example.webp";
import img1 from "./mockData/example1.webp";
import img2 from "./mockData/example2.webp";
import img3 from './mockData/girl_2_a.webp';
import img4 from './mockData/girl_2_b.webp';
import img5 from './mockData/girl_2_c.webp';
import img6 from './mockData/img_girl_3_a.webp';
import img7 from './mockData/img_girl_3_b.webp';
import img8 from './mockData/img_girl_3_c.webp';
import {MatchingPlaceWrapper} from "./matchingPlace.style";
import NewCustomers from "../../components/dashboard/CRM/NewCustomers";
import {Col, Row} from 'antd';
import RecentActivity from "../../components/dashboard/CRM/RecentActivity";
import {recentActivity} from "./mockData/data";
import Widget from "../../components/Widget";
import CryptoNews from "../../components/dashboard/Crypto/CryptoNews";


const listInfo = [
  {
    listImg: [img, img1, img2],
    userName: 'Trang',
    bio: 'You dont know how many time I swipe left to find you'
  },
  {
    listImg: [img3, img4, img5],
    userName: 'Ngọc',
    bio: 'Có ai bắn pubg không ạ ?'
  },
  {
    listImg: [img6, img7, img8],
    userName: 'Phương Dung',
    bio: 'Thích thì rẽ phải'
  }
];

const MatchingPlace = () => {
  const [index, setIndex] = useState(0);
  const {listImg, userName, bio} = listInfo[index];

  const likeAction = () => {
    setIndex((index + 1) % listInfo.length);
  };

  const dislikeAction = () => {
    setIndex((index + 1) % listInfo.length);
  };

  const handleKeyPress = e => {
    switch (e.key) {
      case 'ArrowLeft':
        dislikeAction();
        break;
      case 'ArrowRight':
        likeAction();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
  });

  return (
    <Row>
      <Col span={8}>
        <NewCustomers title={'Matched User'}/>
        <CryptoNews/>
      </Col>
      <Col span={8}>
        <MatchingPlaceWrapper className={'wrapper'} onKeyDown={handleKeyPress}>
          <ProfileTag {...{listImg, userName, bio, dislikeAction, likeAction}}/>
        </MatchingPlaceWrapper>
      </Col>
      <Col span={8}>
        <Widget>
          <RecentActivity recentList={recentActivity} shape="circle"/>
        </Widget>
      </Col>
    </Row>
  )
};

export default MatchingPlace;
