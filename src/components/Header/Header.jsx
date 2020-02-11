import React from 'react';
// import { NavLink } from 'react-router-dom';
 import logo from './../../logo.svg';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-light sticky-top nav-menu">
      <div className="row full-width">
        <div className="col-md-2 col-xs-12 p-left p-right">
          <div className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle">
            <div className="menu-bar-icon">
            </div>
          </div>
          <div className="logo">
            <a href="index_1.html">	</a>
            <img src={logo} alt="logo"></img>
          </div>
        </div>
        <div className="col-md-5 col-xs-12 p-left p-right">
          <div className="searching">
            <form>
              <button type="submit">

              </button>
              <input type="text" name="search" placeholder="Search Places, Events, House, Shop, Bike, Car, Mobile etc..."></input>
            </form>
          </div>
        </div>
        <div className="col-md-5 col-xs-12 p-left p-right">
          <div className="add-listing">
            <a href="upload_listing.html">
              Add Listing
            </a>
          </div>
          <div className="home">
            <ul>
              <li className="active">
                <a href="index_1.html">
                  <span className="circle"></span>
                </a>
              </li>
              <li className="popup dropdown">
                <span>3</span>
                <div className="dropdown-menu msg-noti-dropdown">
                  <ul>
                    <li className="notfication-details">
                      <div className="media">
                        <div className="media-left">
                          <a href="#"></a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading color-primary">John Doe</h4>
                          <p>Hello John, How are you?</p>
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
                          <p>Hello John,What are doing?</p>
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
                          <p>What you thing about my listing.</p>
                          <p className="comment-date">10 min ago</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-btn-mn">
                        <button onclick="window.location.href = '#';">View All Messages</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="popup dropdown">
                <span>3</span>
                <div className="dropdown-menu msg-noti-dropdown">
                  <ul>
                    <li className="notfication-details">
                      <div className="media">
                        <div className="media-left">
                          <a href="#"><img src="images/messages/msg-1.png" alt=""></img></a>
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
                        <button onclick="window.location.href = '#';">View All Notifications</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="dropdown login">
            <div className="account-dt dropdown-toggle-no-caret" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="main">
              <i className="fas fa-user-circle"></i>
              <span>John Deo</span>
            </div>
            <div className="dropdown-menu dropdown-menu-right account-dropdown">
              <ul>
                <li>
                  <a href="my_dashboard.html#dashboard">My Profile</a>
                </li>
                <li>
                  <a href="messages.html">Messages</a>
                </li>
                <li>
                  <a href="signin.html">Sign in</a>
                </li>
                <li>
                  <a href="payment.html">Payment</a>
                </li>
                <li>
                  <a href="help.html">Help</a>
                </li>
                <li>
                  <a href="setting.html#overview">Setting</a>
                </li>
                <li>
                  <a href="signin.html">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;