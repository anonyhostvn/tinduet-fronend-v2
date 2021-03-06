import React, {Component} from "react";
import {connect} from "react-redux";
import {Avatar, Popover} from "antd";
import {userSignOut} from "appRedux/actions/Auth";

class UserProfile extends Component {

  render() {
    const userMenuOptions = (
      <ul className="gx-user-popover">
        {/*<li>My Account</li>*/}
        {/*<li>Connections</li>*/}
        <li onClick={() => this.props.userSignOut()}>Logout
        </li>
      </ul>
    );

    return (

      <div className="gx-flex-row gx-align-items-center gx-mb-4 gx-avatar-row">
        <Popover placement="bottomRight" content={userMenuOptions} trigger="click">
          <Avatar src='https://png.pngtree.com/png-clipart/20190906/original/pngtree-520-couple-avatar-girl-avatar-little-dinosaur-cartoon-cute-png-image_4563357.jpg'
                  className="gx-size-40 gx-pointer gx-mr-3" alt=""/>
          <span className="gx-avatar-name">{localStorage.getItem('name')} <i
            className="icon icon-chevron-down gx-fs-xxs gx-ml-2"/></span>
        </Popover>
      </div>

    )

  }
}

export default connect(null, {userSignOut})(UserProfile);
