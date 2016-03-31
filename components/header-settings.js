import React from 'react'
import cx from 'classnames'

const Settings = ({connected = false, avatar}) =>
  <div className={cx('header__settings img img--rounded img--small img--bg-img', {
    'isLoggedIn': connected
  })} style={{
    backgroundImage: `url(/images/${avatar})`
  }}>
    <i className="header__settings__icon icon-settings"></i>
  </div>

export default Settings
