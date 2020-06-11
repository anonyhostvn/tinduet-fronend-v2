import React from "react";
import {Avatar} from "antd";
import per1 from './avatar/per1.webp';
import per2 from './avatar/per2.webp';
import per3 from './avatar/per3.webp';

const userImageList = [
  {
    id: 1,
    image: 'https://i.ytimg.com/vi/xtvFusKbaBU/maxresdefault.jpg',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150x150',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150x150',

  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150x150',
    name: 'Mila Alba',
    rating: '5.0',
    deals: '27 Deals'
  },
]

export const aboutList = [
  {
    id: 1,
    title: 'Works at',
    icon: 'company',
    userList: '',
    desc: ['Tinduet']
  },
  {
    id: 2,
    title: 'Birthday',
    icon: 'birthday-new',
    userList: '',
    desc: ['Oct 25, 1984']
  },
  {
    id: 3,
    title: 'Went to',
    icon: 'graduation',
    userList: '',
    desc: ['UET, VNU']
  },
  {
    id: 4,
    title: 'Lives Hà Nội',
    icon: 'home',
    userList: '',
    desc: ['Cầu Giấy']
  },
  {
    id: 5,
    title: '4 Family Members',
    icon: 'family',
    userList: [<ul className="gx-list-inline gx-mb-0" key={1}>
      {userImageList.map((user, index) =>
        <li className="gx-mb-2" key={index}>
          <Avatar className="gx-size-30" src={user.image}/>
        </li>
      )
      }
    </ul>],
    desc: ''
  },
];

export const eventList = [
  {
    id: 1,
    image: 'https://via.placeholder.com/575x480',
    title: 'Sundance Film Festival.',
    address: 'Downsview Park, Toronto, Ontario',
    date: 'Feb 23, 2019',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/575x480',
    title: 'Underwater Musical Festival.',
    address: 'Street Sacramento, Toronto, Ontario',
    date: 'Feb 24, 2019',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/575x480',
    title: 'Village Feast Fac',
    address: 'Union Street Eureka',
    date: 'Oct 25, 2019',
  }
];

export const contactList = [
  {
    id: 1,
    title: 'Email',
    icon: 'email',
    desc: [<span className="gx-link" key={1}> {localStorage.getItem('email')} </span>]
  },
  {
    id: 3,
    title: 'Phone',
    icon: 'phone',
    desc: ['+84 0981 199 012']
  },
];

export const friendList = [
  {
    id: 1,
    image: per1,
    name: 'HaPhan',
    status: 'online'

  },
  {
    id: 2,
    image: per2,
    name: 'Lê Thu Trang',
    status: 'offline'
  },
  {
    id: 3,
    image: per3,
    name: 'Ngọc Anh',
    status: 'away'

  },
  {
    id: 4,
    image: 'https://images-ssl.gotinder.com/5c7b617691ca0a110024cdff/640x800_75_a4b6e968-56cb-4b12-836d-feefc7e59eca.webp',
    name: 'Lin Lin',
    status: 'away'
  },
];
