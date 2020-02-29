import React from 'react';
import logo from './../../logo.svg';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  debugger
  return (
    <div className={`${s['navbar']} ${s['navbar-expand-md']} ${s['navbar-light']} ${s['sticky-top']} ${s['nav-menu']}`}>
      <div className="row full-width">
        <div className="col-md-2 col-xs-12 p-left p-right">
          <div className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle">
            <div className="menu-bar-icon">
            </div>
          </div>
          <div className={s.logo} >
            <a href="index_1.html">	
            <img src={logo} alt="logo" /> FaceBookKiller
            </a>
          </div>
        </div>
        <div className="col-md-5 col-xs-12 p-left p-right">
          <div className={s.searching}>
            <div>
              <button type="submit">
              </button>
              <input type="text" name="search" placeholder="Search Places, Events, House, Shop, Bike, Car, Mobile etc..." />
            </div>
          </div>
        </div>
        <div className="col-md-5 col-xs-12 p-left p-right">
          <div className={s['add-listing']}>
            <a href="#">
              Add Listing
            </a>
          </div>
          <div className={s.home}>
            <ul>
              <li className={s.active}>
                <a href="index_1.html">
                  <span className="circle"></span>
                </a>
              </li>
              <li className="popup dropdown">
                <span>3</span>
                <div className={`${s['dropdown-menu']} ${s['msg-noti-dropdown']}`}>
                </div>
              </li>
              <li className="popup dropdown">
                <span>3</span>
                <div className="dropdown-menu msg-noti-dropdown">
                  <ul>
                    <li className="notfication-details">
                      <div className="media">
                        <div className="media-left">
                          <a href="#"><img src="images/messages/msg-1.png" alt=""/></a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading color-primary">John Doe</h4>
                          <p>comment on your listing</p>
                          <p className="comment-date">10 min ago</p>
                        </div>
                      </div>
                    </li>
                    <li className="notfication-details">
                      <div className="media">
                        <div className="media-left">
                          <a href="#"></a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading color-primary">John Doe</h4>
                          <p>saved your listing</p>
                          <p className="comment-date">10 min ago</p>
                        </div>
                      </div>
                    </li>
                    <li className="notfication-details">
                      <div className="media">
                        <div className="media-left">
                          <a href="#">1</a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading color-primary">John Doe</h4>
                          <p>Follow you</p>
                          <p className="comment-date">10 min ago</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-btn-mn">
                        <button >View All Notifications</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className={`${s.dropdown} ${s.login}`} >
            <div className={`${s['account-dt']} ${s['dropdown-toggle-no-caret']}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="main">
              <i className="fas fa-user-circle"></i>
              <span>{props.isAutorizate 
                ? <div> {props.login} <button onClick={props.logout}>logout</button></div>
              : <NavLink to={'/login'}>Login</NavLink>}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;