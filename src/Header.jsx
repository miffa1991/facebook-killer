import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light sticky-top nav-menu">
      <div className="row full-width">
        <div className="col-md-2 col-xs-12 p-left p-right">
          <div className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle">
            <div className="menu-bar-icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="18" height="14" class="header-icon" viewBox="0 0 18 14">
					  <path d="M17.000,-0.000 C17.552,-0.000 18.000,0.448 18.000,1.000 C18.000,1.552 17.552,2.000 17.000,2.000 L1.000,2.000 C0.448,2.000 -0.000,1.552 -0.000,1.000 C-0.000,0.448 0.448,-0.000 1.000,-0.000 L17.000,-0.000 ZM17.000,6.000 C17.552,6.000 18.000,6.447 18.000,7.000 C18.000,7.552 17.552,8.000 17.000,8.000 L1.000,8.000 C0.448,8.000 -0.000,7.552 -0.000,7.000 C-0.000,6.447 0.448,6.000 1.000,6.000 L17.000,6.000 ZM17.000,12.000 C17.552,12.000 18.000,12.448 18.000,13.000 C18.000,13.552 17.552,14.000 17.000,14.000 L1.000,14.000 C0.448,14.000 -0.000,13.552 -0.000,13.000 C-0.000,12.448 0.448,12.000 1.000,12.000 L17.000,12.000 Z"></path>
					</svg>
          </div>
        </div>
        <div className="logo">
          <a href="index_1.html">
            <img src="images/header/logo.svg" alt="logo">
				</a>
			</div>
        </div>
        <!-- Navbar -->
			<div className="col-md-5 col-xs-12 p-left p-right">
          <div className="searching">
            <form>
              <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="19" height="18" className="header-icon" viewBox="0 0 19 18">
						  <path d="M14.720,12.516 L18.658,16.455 C18.993,16.790 18.993,17.332 18.658,17.667 C18.324,18.001 17.781,18.001 17.447,17.667 L13.508,13.728 C12.189,14.783 10.516,15.414 8.695,15.414 C4.436,15.414 0.984,11.962 0.984,7.703 C0.984,3.445 4.436,-0.007 8.695,-0.007 C12.954,-0.007 16.406,3.445 16.406,7.703 C16.406,9.524 15.775,11.197 14.720,12.516 L14.720,12.516 ZM8.695,13.701 C12.007,13.701 14.692,11.016 14.692,7.703 C14.692,4.391 12.007,1.706 8.695,1.706 C5.383,1.706 2.698,4.391 2.698,7.703 C2.698,11.016 5.383,13.701 8.695,13.701 Z"></path>
						</svg>
					</button>
            <input type="text" name="search" placeholder="Search Places, Events, House, Shop, Bike, Car, Mobile etc...">
					</form>
          </div>
        </div>
        <div className="col-md-5 col-xs-12 p-left p-right">
          <div className="add-listing">
            <a href="upload_listing.html">
              <img src="images/svg/plus-icon.svg" alt="">
                Add Listing
                </a>
				 </div>
            <div className="home">
              <ul>
                <li className="active">
                  <a href="index_1.html">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="17" height="18" className="header-icon" viewBox="0 0 17 18">
								  <path d="M11.895,16.310 L13.595,16.310 C14.534,16.310 15.296,15.551 15.296,14.615 L15.296,7.330 C15.296,6.790 15.037,6.282 14.600,5.963 L9.498,2.237 C8.900,1.800 8.087,1.800 7.489,2.237 L2.387,5.963 C1.950,6.282 1.692,6.790 1.692,7.330 L1.692,14.615 C1.692,15.551 2.453,16.310 3.392,16.310 L5.093,16.310 L5.093,9.528 C5.093,9.060 5.473,8.680 5.943,8.680 L11.044,8.680 C11.514,8.680 11.895,9.060 11.895,9.528 L11.895,16.310 ZM10.194,16.310 L10.194,10.376 L6.793,10.376 L6.793,16.310 L10.194,16.310 ZM1.383,4.595 L6.484,0.869 C7.680,-0.005 9.307,-0.005 10.503,0.869 L15.605,4.595 C16.479,5.233 16.996,6.250 16.996,7.330 L16.996,14.615 C16.996,16.487 15.473,18.006 13.595,18.006 L3.392,18.006 C1.514,18.006 -0.009,16.487 -0.009,14.615 L-0.009,7.330 C-0.009,6.250 0.508,5.233 1.383,4.595 Z"></path>
								</svg>
                  <span className="circle"></span>
							</a>
						</li>
              <li className="popup dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="19" height="18" className="header-icon dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" viewBox="0 0 19 18" role="main">
							  <path d="M0.954,16.559 L1.817,14.200 C1.667,13.932 1.535,13.654 1.420,13.368 C1.077,12.510 0.898,11.587 0.898,10.640 C0.898,9.192 1.317,7.806 2.087,6.634 C2.355,6.227 2.890,6.122 3.282,6.399 C3.675,6.676 3.776,7.230 3.509,7.636 C2.931,8.515 2.618,9.552 2.618,10.640 C2.618,11.352 2.752,12.043 3.009,12.685 C3.138,13.009 3.298,13.318 3.486,13.609 C3.641,13.848 3.674,14.150 3.575,14.420 L3.238,15.341 L4.128,14.992 C4.388,14.890 4.680,14.924 4.911,15.085 C5.192,15.279 5.490,15.445 5.802,15.579 C6.422,15.845 7.089,15.984 7.777,15.984 C8.728,15.984 9.640,15.718 10.436,15.221 C10.842,14.967 11.371,15.103 11.616,15.524 C11.861,15.945 11.730,16.493 11.324,16.746 C10.261,17.410 9.043,17.766 7.777,17.766 C6.862,17.766 5.971,17.580 5.143,17.225 C4.867,17.106 4.599,16.969 4.340,16.814 L2.062,17.708 C1.369,17.980 0.691,17.277 0.954,16.559 ZM14.279,13.720 C13.452,14.075 12.561,14.261 11.646,14.261 C7.847,14.261 4.767,11.071 4.767,7.135 C4.767,3.200 7.847,0.009 11.646,0.009 C15.445,0.009 18.525,3.200 18.525,7.135 C18.525,8.082 18.346,9.005 18.003,9.863 C17.888,10.149 17.755,10.427 17.606,10.695 L18.469,13.054 C18.732,13.772 18.053,14.475 17.360,14.203 L15.083,13.309 C14.824,13.464 14.556,13.601 14.279,13.720 ZM15.847,10.915 C15.749,10.645 15.782,10.343 15.937,10.104 C16.125,9.813 16.285,9.504 16.414,9.181 C16.671,8.538 16.805,7.847 16.805,7.135 C16.805,4.184 14.495,1.791 11.646,1.791 C8.797,1.791 6.487,4.184 6.487,7.135 C6.487,10.087 8.797,12.479 11.646,12.479 C12.334,12.479 13.001,12.340 13.621,12.074 C13.933,11.940 14.231,11.774 14.512,11.580 C14.743,11.419 15.035,11.385 15.295,11.487 L16.185,11.836 L15.847,10.915 Z"></path>
							</svg>
              <span>3</span>
              <div className="dropdown-menu msg-noti-dropdown">
                <ul>
                  <li className="notfication-details">
                    <div className="media">
                      <div className="media-left">
                        <a href="#"><img src="images/messages/msg-1.png" alt=""></a>
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
                          <a href="#"><img src="images/messages/msg-2.png" alt=""></a>
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
                            <a href="#"><img src="images/messages/msg-3.png" alt=""></a>
										</div>
                            <div className="media-body">
                              <h4 className="media-heading color-primary">John Doe</h4>
                              <p>What you thing about my listing.</p>
                              <p className="comment-date">10 min ago</p>
                            </div>
                          </div>
								</li><!--notification-info -->
								<li>
                          <div className="dropdown-btn-mn">
                            <button onclick="window.location.href = '#';">View All Messages</button>
                          </div>
                        </li>
							</ul>
							</div>
                  </li>
                  <li className="popup dropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="18" height="18" className="header-icon dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" viewBox="0 0 18 18" role="main">
							  <path d="M12.071,15.136 C11.864,16.751 10.451,18.000 8.738,18.000 C7.025,18.000 5.611,16.751 5.404,15.136 L2.052,15.136 C1.124,15.136 0.372,14.404 0.372,13.500 C0.372,13.137 0.496,12.785 0.724,12.498 L2.019,10.868 L2.019,6.545 C2.019,2.930 5.027,-0.000 8.738,-0.000 C12.448,-0.000 15.456,2.930 15.456,6.545 L15.456,10.868 L16.752,12.498 C17.319,13.213 17.185,14.240 16.452,14.794 C16.157,15.016 15.796,15.136 15.423,15.136 L12.071,15.136 ZM10.364,15.136 L7.111,15.136 C7.297,15.842 7.955,16.363 8.738,16.363 C9.520,16.363 10.178,15.842 10.364,15.136 ZM3.699,6.545 L3.699,11.148 C3.699,11.329 3.637,11.505 3.523,11.648 L2.052,13.500 L15.423,13.500 L13.952,11.648 C13.838,11.505 13.776,11.329 13.776,11.148 L13.776,6.545 C13.776,3.834 11.521,1.636 8.738,1.636 C5.955,1.636 3.699,3.834 3.699,6.545 Z"></path>
							</svg>
                  <span>3</span>
                  <div className="dropdown-menu msg-noti-dropdown">
                    <ul>
                      <li className="notfication-details">
                        <div className="media">
                          <div className="media-left">
                            <a href="#"><img src="images/messages/msg-1.png" alt=""></a>
											</div>
                            <div className="media-body">
                              <h4 className="media-heading color-primary">John Doe</h4>
                              <p>comment on your listing</p>
                              <p className="comment-date">10 min ago</p>
                            </div>
                          </div>
									</li><!--notification-info -->
									<li className="notfication-details">
                          <div className="media">
                            <div className="media-left">
                              <a href="#"><img src="images/messages/msg-2.png" alt=""></a>
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
                                <a href="#"><img src="images/messages/msg-3.png" alt=""></a>
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
    </nav>
            )
}

export default Header;