import React from "react";

import Metrics from "components/Metrics";
import {Avatar} from "antd";
import {Link} from "react-router-dom";

const userImageList = [
  {
    id: 1,
    image: 'https://i.pinimg.com/736x/78/90/e1/7890e13d8985d3a5360e3e62831575fd.jpg',
    link: '/message'
  },
  {
    id: 2,
    image: 'https://i1.wp.com/danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-ha-noi-6.jpg?fit=624%2C780&ssl=1',
    link: '/message'
  },
  {
    id: 3,
    image: 'https://hinhanhdep.vn/wp-content/uploads/2019/07/d63b8e62f5221c7c4533.jpg',
    link: '/message'
  },
  {
    id: 4,
    image: 'https://image-us.eva.vn/upload/2-2019/images/2019-06-25/loat-hot-girl-xinh-dep-nuc-tieng-du-thi-thpt-quoc-gia-nam-2019-1-1561430194-291-width660height825.jpg',
    name: 'Mila Alba',
    rating: '5.0',
    deals: '27 Deals',
    link: '/message'
  },
]

const NewCustomers = ({title}) => {
  return (
    <Metrics title={title}>
      <div className="gx-customers">
        <ul className="gx-list-inline gx-customers-list gx-mb-0">
          {userImageList.map((user, index) =>
            <li className="gx-mb-2" key={index}>
              <Link to={user.link}>
              <Avatar src={user.image}/>
              </Link>
            </li>
          )
          }
        </ul>
      </div>
    </Metrics>
  );
}


export default NewCustomers;
