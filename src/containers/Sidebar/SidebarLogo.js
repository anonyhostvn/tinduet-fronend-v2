import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {onNavStyleChange, toggleCollapsedSideNav} from "appRedux/actions/Setting";
import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";


class SidebarLogo extends Component {

  render() {
    const {width, themeType, navCollapsed} = this.props;
    let {navStyle} = this.props;
    if (width < TAB_SIZE && navStyle === NAV_STYLE_FIXED) {
      navStyle = NAV_STYLE_DRAWER;
    }
    return (
      <div className="gx-layout-sider-header">

        {(navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) ? <div className="gx-linebar">

          <i
            className={`gx-icon-btn icon icon-${navStyle === NAV_STYLE_MINI_SIDEBAR ? 'menu-unfold' : 'menu-fold'} ${themeType !== THEME_TYPE_LITE ? 'gx-text-white' : ''}`}
            onClick={() => {
              if (navStyle === NAV_STYLE_DRAWER) {
                this.props.toggleCollapsedSideNav(!navCollapsed);
              } else if (navStyle === NAV_STYLE_FIXED) {
                this.props.onNavStyleChange(NAV_STYLE_MINI_SIDEBAR)
              } else if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
                this.props.toggleCollapsedSideNav(!navCollapsed);
              } else {
                this.props.onNavStyleChange(NAV_STYLE_FIXED)
              }
            }}
          />
        </div> : null}

        <Link to="/" className="gx-site-logo">
          {/*{navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR && width >= TAB_SIZE ?*/}
          {/*  <img alt="" src={require("../../assets/images/logo.png")}/> :*/}
          {/*  themeType === THEME_TYPE_LITE ?*/}
          {/*    <img alt="" src={require("../../assets/images/logo.png")}/> :*/}
          {/*    <img alt="" src={require("../../assets/images/logo.png")}/>}*/}

          <svg xmlns="http://www.w3.org/2000/svg" width="127" height="26" viewBox="0 0 127 26">
            <defs>
              <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stop-color="#FF7854"/>
                <stop offset="100%" stop-color="#FD267D"/>
              </linearGradient>
              <linearGradient id="b" x1="100%" x2="0%" y1="-13.237%" y2="113.874%">
                <stop offset="0%" stop-color="#FF7854"/>
                <stop offset="100%" stop-color="#FD267D"/>
              </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <path fill="url(#a)"
                    d="M6.603 10.395C11.53 8.697 12.368 4.275 11.74.207c0-.146.125-.25.25-.188 4.717 2.284 10.02 7.293 10.02 14.84 0 5.785-4.486 10.9-11.005 10.9C4.045 25.76 0 20.792 0 14.86c0-3.46 2.453-7.022 5.094-8.532.126-.084.293 0 .293.147.063.776.273 2.746 1.132 3.9.02.02.062.02.083.02z"
                    transform="translate(.1 .128)"/>
              <path fill="#424242"
                    d="M36.008 21.094l.37-.426 1.107 3.535-.144.135c-.83.78-2.08 1.175-3.715 1.175h-.06c-1.47 0-2.617-.4-3.412-1.188-.812-.806-1.223-1.986-1.223-3.507v-9.58H26.1v-3.9h2.83V2.666h4.36V7.34h3.46v3.898h-3.48v8.657c0 .4.094 1.698 1.32 1.698.617 0 1.205-.254 1.418-.5zm2.96 4.02V7.36h4.36v17.755h-4.36zM41.125.13c1.445 0 2.62 1.175 2.62 2.62s-1.175 2.62-2.62 2.62-2.62-1.175-2.62-2.62c0-1.42 1.2-2.62 2.62-2.62zM55.53 6.94c3.77 0 5.847 2.063 5.847 5.807v12.368h-4.36v-11.34h.014c-.088-2.013-1.06-2.914-3.115-2.914-1.835 0-3.33 1.11-4.088 2.097v12.158h-4.36V7.36h4.36v1.874C51.09 8.04 53.1 6.94 55.53 6.94zm20.144 2.27V.86h4.36v24.274h-4.36v-1.842c-1.388 1.433-3.234 2.24-5.178 2.24-4.752 0-7.945-3.732-7.945-9.286 0-5.567 3.194-9.307 7.946-9.307 1.954 0 3.8.818 5.178 2.27zm0 3.74c-.863-1.215-2.574-2.09-4.11-2.09-2.695 0-4.506 2.165-4.506 5.388 0 3.21 1.81 5.366 4.507 5.366 1.57 0 3.28-.856 4.11-2.046V12.95zm14.338-6.01c5.146 0 8.74 3.966 8.74 9.643v1.195H85.575c.436 2.496 2.397 4.088 5.087 4.088 1.704 0 3.57-.722 4.643-1.795l.266-.265 2.063 2.982-.192.186c-1.715 1.65-4.256 2.56-7.156 2.56-5.467 0-9.286-3.826-9.286-9.306.022-5.295 3.897-9.286 9.014-9.286zm-4.468 7.568H94.5c-.247-2.676-2.46-3.9-4.488-3.9-3.062 0-4.22 2.31-4.468 3.9zm23.753-7.546h.314v4.387l-.375-.076a5.763 5.763 0 00-1.112-.1c-1.406 0-3.358.984-4.088 2.045v11.874h-4.36V7.36h4.38v1.987c1.444-1.506 3.352-2.385 5.242-2.385z"/>
              <path fill="url(#b)"
                    d="M126.718 17.5v-2.496h-5.654v-6.16h-2.748v6.16h-5.686V17.5h5.686v6.412h2.748V17.5"/>
            </g>
          </svg>

        </Link>

      </div>
    );
  }
}

const mapStateToProps = ({settings}) => {
  const {navStyle, themeType, width, navCollapsed} = settings;
  return {navStyle, themeType, width, navCollapsed}
};

export default connect(mapStateToProps, {
  onNavStyleChange,
  toggleCollapsedSideNav
})(SidebarLogo);
