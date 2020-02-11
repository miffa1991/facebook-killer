import React from 'react';
import logo from './../../logo.svg';
import s from './Content.module.css';

const Content = () => {
  return (
    <div className="full-width">
      <div id="wrapper">
        <ul className="sidebar navbar-nav">
          <li className="nav-item active">
            <a href="index_1.html">
              <div className="fos" id="foo"> Home </div>
            </a>
          </li>
          <li className="nav-item">
            <a href="listing.html">
              <div className="fos" id="foo1"> Listing </div>
            </a>
          </li>
          <li className="nav-item">
            <a href="find_profiles.html">
              <div className="fos" id="foo2"> Find Profiles </div>
            </a>
          </li>
          <li className="nav-item">
            <a href="messages.html">
              <div className="fos" id="foo3"> Messages </div>
            </a>
          </li >
          <li className="dropdown-divider"></li>
          <li className="nav-item">
            <a href="my_dashboard.html#saved">
              <div className="fos" id="foo4"> Saved </div>
            </a>
          </li >
          <li className="nav-item">
            <a href="listing.html">
              <div className="fos" id="foo5"> Most Viewed </div>
            </a></li >
          <li className="nav-item">
            <a href="my_dashboard.html#following">
              <div className="fos" id="foo6"> Following</div>
            </a>
          </li >
          <li className="nav-item">
            <a href="payment.html">
              <div className="fos" id="foo7"> Payment </div>
            </a>
          </li >
          <li className="dropdown-divider"></li>
          <li className="nav-item">
            <a href="help.html">
              <div className="fos" id="foo8"> Help</div>
            </a>
          </li >
          <li className="nav-item">
            <a href="setting.html">
              <div className="fos" id="foo9"> Setting</div>
            </a>
          </li >
          <li className="nav-item">
            <a href="feedback.html">
              <div className="fos" id="foo10"> Send Feedback </div>
            </a>
          </li >

        </ul >
        <div id="content-wrapper">
          <div className="container-fluid pb-0">
            <div className="row">
              <div className="col-md-12">
                <div className="advertisment-banner">
                  <div className="row">
                    <div className="col-xl-8 col-lg-8 col-sm-12">
                      <div className="banner-heading">
                        <h3>World's Largest ClassNameifieds and Listing Portal.</h3>
                        <h5>Post Unlimited ClassNameifieds Listing Free of Cost From Anywhere.</h5>
                        <a href="upload_listing.html" className="add-btn-bnnr">Add Lisiting</a>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-sm-12">
                      <div className="ill-img">
                        <img src="images/svg/undraw_01.svg" alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row" id="myBtnContainer">
              <div className="col-xl-10 col-lg-10 col-md-8 col-sm-12 px-0">
                <ul className="category-links">
                  <li className="nav-item"> <a href="index_1.html" className="nav-link active"> All </a></li>
                  <li className="nav-item"> <a href="index_2.html" className="nav-link"> Places &amp; Events </a></li>
                  <li className="nav-item"> <a href="index_3.html" className="nav-link">Real Estate </a></li>
                  <li className="nav-item"> <a href="index_4.html" className="nav-link">Cars &amp; Bikes </a></li>
                  <li className="nav-item"> <a href="index_5.html" className="nav-link">Electronic </a></li>
                  <li className="nav-item"> <a href="index_6.html" className="nav-link">Others </a></li>
                </ul>
              </div>
              <div className="text-right radar col-xl-2 col-lg-2 col-md-4 col-sm-12 p-right px-0">
                <a href="#"><img src="images/svg/radar-icon.svg" ></img>Map Lisitng</a>
              </div>
            </div>
            <div className="video-block section-padding">
              <div className="row">
                <div className="tabby">
                  <div className="htitle col-md-12">
                    <h5>Latest Listing</h5>
                    <a href="#">Show More</a>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-xl-3 col-sm-6">
                    <div className="box">
                      <div className="box-img">
                        <a href="event_listing_detail_view.html" target="_blank" className="over-bg"></a>
                        <img src="images/homepage/latest/01_img.jpg" className="img" alt="" title=""></img>
                        <div className="box-heading1">
                          <a href="event_listing_detail_view.html">Global Festival </a>
                          <div className="box-heading2"> India </div>
                        </div>
                        <div className="favorite">
                          <i className="far fa-heart"></i>
                        </div>
                      </div>
                      <div className="box-radius">
                        <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                      </div>
                      <div className="box-heading3">
                        <a href="user_detail_view.html#activity">By John Doe</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                    <div className="box">
                      <div className="box-img">
                        <a href="realestate_sell_listing_detail_view.html" className="over-bg"></a>
                        <img src="images/homepage/realestate/ig-1.jpg" className="img" alt="" title=""></img>
                        <div className="box-heading1">
                          <a href="realestate_sell_listing_detail_view.html">House for Sale </a>
                          <div className="box-heading2">New York City </div>
                        </div>
                        <div className="favorite">
                          <i className="far fa-heart"></i>
                        </div>
                      </div>
                      <div className="box-radius">
                        <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                      </div>
                      <div className="box-heading3">
                        <a href="user_detail_view.html#activity">By Jassica William</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                    <div className="box">
                      <div className="box-img">
                        <a href="cinema_listing_detail_view.html" className="over-bg"></a>
                        <img src="images/homepage/place/9_img.jpg" className="img" alt="" title=""></img>
                        <div className="box-heading1">
                          <a href="cinema_listing_detail_view.html"> Pixel Cinema </a>
                          <div className="box-heading2">Austrilia </div>
                        </div>
                        <div className="favorite">
                          <i className="far fa-heart"></i>
                        </div>
                      </div>
                      <div className="box-radius">
                        <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                      </div>
                      <div className="box-heading3">
                        <a href="user_detail_view.html#activity"> By Rock Smith</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                    <div className="box">
                      <div className="box-img">
                        <a href="cafe_listing_detail_view.html" className="over-bg"></a>
                        <img src="images/homepage/latest/03_img.jpg" className="img" alt="" title=""></img>
                        <div className="box-heading1">
                          <a href="cafe_listing_detail_view.html">Coffee House </a>
                          <div className="box-heading2">
                            London </div>
                        </div>
                        <div className="favorite">
                          <i className="far fa-heart"></i>
                        </div>
                      </div>
                      <div className="box-radius">
                        <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                      </div>
                      <div className="box-heading3">
                        <a href="user_detail_view.html#activity">By John Doe</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                    <div className="box">
                      <div className="box-img">
                        <a href="restaurant_listing_detail_view.html" className="over-bg"></a>
                        <img src="images/homepage/place/ig-11.jpg" className="img" alt="" title=""></img>
                        <div className="box-heading1">
                          <a href="restaurant_listing_detail_view.html">Resturent Name</a>
                          <div className="box-heading2">
                            Unitied State of America </div>
                        </div>
                        <div className="favorite">
                          <i className="far fa-heart"></i>
                        </div>
                      </div>
                      <div className="box-radius">
                        <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                      </div>
                      <div className="box-heading3">
                        <a href="user_detail_view.html#activity">By Jassica William</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                    <div className="box">
                      <div className="box-img">
                        <a href="cafe_listing_detail_view.html" className="over-bg"></a>
                        <img src="images/homepage/place/8_img.jpg" className="img" alt="" title=""></img>
                        <div className="box-heading1">
                          <a href="cafe_listing_detail_view.html">Coffee House </a>
                          <div className="box-heading2">
                            South Africa </div>
                        </div>
                        <div className="favorite">
                          <i className="far fa-heart"></i>
                        </div>
                      </div>
                      <div className="box-radius">
                        <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                      </div>
                      <div className="box-heading3">
                        <a href="user_detail_view.html#activity">By Jassica William </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                    <div className="box">
                      <div className="box-img">
                        <a href="shop_listing_detail_view.html" className="over-bg"></a>
                        <img src="images/homepage/realestate/ig-33.jpg" className="img" alt="" title=""></img>
                        <div className="box-heading1">
                          <a href="shop_listing_detail_view.html">Shop for Rent</a>
                          <div className="box-heading2">
                            New York city </div>
                        </div>
                        <div className="favorite">
                          <i className="far fa-heart"></i>
                        </div>
                      </div>
                      <div className="box-radius">
                        <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                      </div>
                      <div className="box-heading3">
                        <a href="user_detail_view.html#activity">By john Doe </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                    <div className="box">
                      <div className="box-img">
                        <a href="historical_listing_detail_view.html" className="over-bg"></a>
                        <img src="images/homepage/place/ig-41.jpg" className="img" alt="" title=""></img>
                        <div className="box-heading1">
                          <a href="historical_listing_detail_view.html">Historical Place</a>
                          <div className="box-heading2">
                            New York city </div>
                        </div>
                        <div className="favorite">
                          <i className="far fa-heart"></i>
                        </div>
                      </div>
                      <div className="box-radius">
                        <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                      </div>
                      <div className="box-heading3">
                        <a href="user_detail_view.html#activity">By john Doe</a>
                      </div>
                    </div>
                  </div >
                </div >
              </div >
            </div >


            <div className="video-block section-padding">
              <div className="row">
                <div className="tabby">
                  <div className="htitle col-md-12">
                    <h5>Recommended</h5>
                    <a href="#">Show More</a>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-xl-3 col-sm-6">
                    <div className="box">
                      <div className="box-img">
                        <a href="event_listing_detail_view.html" className="over-bg"></a>
                        <img src="images/homepage/recomanded/04_img.jpg" className="img" alt="" title=""></img>
                        <div className="box-heading1">
                          <a href="event_listing_detail_view.html">Music Event </a>
                          <div className="box-heading2">
                            Maxico City
                                </div>
                        </div>
                        <div className="favorite">
                          <i className="far fa-heart"></i>
                        </div>
                      </div>
                      <div className="box-radius">
                        <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                      </div>
                      <div className="box-heading3">
                        <a href="user_detail_view.html#activity">By john Doe </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                    <div className="box">
                      <div className="box-img">
                        <a href="shop_listing_detail_view.html" className="over-bg"></a>
                        <img src="images/homepage/realestate/ig-35.jpg" className="img" alt="" title=""></img>
                        <div className="box-heading1">
                          <a href="shop_listing_detail_view.html">Shop for Sale </a>
                          <div className="box-heading2">
                            New York city </div>
                        </div>
                        <div className="favorite">
                          <i className="far fa-heart"></i>
                        </div>
                      </div>
                      <div className="box-radius">
                        <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                      </div>
                      <div className="box-heading3">
                        <a href="user_detail_view.html#activity">By john Doe</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 ">
                    <div className="box">
                      <div className="box-img">
                        <a href="restaurant_listing_detail_view.html" className="over-bg"></a>
                        <img src="images/homepage/recomanded/05_img.jpg" className="img" alt="" title=""></img>
                        <div className="box-heading1">
                          <a href="restaurant_listing_detail_view.html">Basant Restaurant</a>
                          <div className="box-heading2">
                            New York city </div>
                        </div>
                        <div className="favorite">
                          <i className="far fa-heart"></i>
                        </div>
                      </div>
                      <div className="box-radius">
                        <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                      </div>
                      <div className="box-heading3">
                        <a href="user_detail_view.html#activity">By john Doe</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                    <div className="box">
                      <div className="box-img">
                        <a href="cafe_listing_detail_view.html" className="over-bg"></a>
                        <img src="images/homepage/place/ig-1.jpg" className="img" alt="" title=""></img>
                        <div className="box-heading1">
                          <a href="cafe_listing_detail_view.html">Coffee Cafe</a>
                          <div className="box-heading2">
                            New York city </div>
                        </div>
                        <div className="favorite">
                          <i className="far fa-heart"></i>
                        </div>
                      </div>
                      <div className="box-radius">
                        <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                      </div>
                      <div className="box-heading3">
                        <a href="user_detail_view.html#activity">By john Doe</a>
                      </div>
                    </div>
                  </div >
                  <div className="col-xl-3 col-sm-6">
                    <div className="box">
                      <div className="box-img">
                        <a href="shop_listing_detail_view.html" className="over-bg"></a>
                        <img src="images/homepage/realestate/ig-39.jpg" className="img" alt="" title=""></img>
                        <div className="box-heading1">
                          <a href="shop_listing_detail_view.html">Shop for Rent</a>
                          <div className="box-heading2">
                            New York city </div>
                        </div>
                        <div className="favorite">
                          <i className="far fa-heart"></i>
                        </div>
                      </div>
                      <div className="box-radius">
                        <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                      </div>
                      <div className="box-heading3">
                        <a href="user_detail_view.html#activity">By john Doe </a>
                      </div>
                    </div>
                  </div >
                  <div className="col-xl-3 col-sm-6">
                    <div className="box">
                      <div className="box-img">
                        <a href="historical_listing_detail_view.html" className="over-bg"></a>
                        <img src="images/homepage/place/ig-43.jpg" className="img" alt="" title=""></img>
                        <div className="box-heading1">
                          <a href="historical_listing_detail_view.html">Historical Place</a>
                          <div className="box-heading2">
                            New York city</div>
                        </div>
                        <div className="favorite">
                          <i className="far fa-heart"></i>
                        </div>
                      </div>
                      <div className="box-radius">
                        <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                      </div>
                      <div className="box-heading3">
                        <a href="user_detail_view.html#activity">By john Doe</a>
                      </div>
                    </div>
                  </div >
                  <div className="col-xl-3 col-sm-6">
                    <div className="box">
                      <div className="box-img">
                        <a href="event_listing_detail_view.html" className="over-bg"></a>
                        <img src="images/homepage/latest/01_img.jpg" className="img" alt="" title=""></img>
                        <div className="box-heading1">
                          <a href="event_listing_detail_view.html"> Global Festival </a>
                          <div className="box-heading2">
                            India</div>
                        </div>
                        <div className="favorite">
                          <i className="far fa-heart"></i>
                        </div>
                      </div>
                      <div className="box-radius">
                        <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                      </div>
                      <div className="box-heading3">
                        <a href="user_detail_view.html#activity">By John Doe</a>
                      </div>
                    </div>
                  </div >
                  <div className="col-xl-3 col-sm-6">
                    <div className="box">
                      <div className="box-img">
                        <a href="realestate_sell_listing_detail_view.html" className="over-bg"></a>
                        <img src="images/homepage/realestate/ig-1.jpg" className="img" alt="" title=""></img>
                        <div className="box-heading1">
                          <a href="realestate_sell_listing_detail_view.html"> House for Sale </a>
                          <div className="box-heading2">
                            New York City</div>
                        </div>
                        <div className="favorite">
                          <i className="far fa-heart"></i>
                        </div>
                      </div>
                      <div className="box-radius">
                        <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>

                      </div>
                      <div className="box-heading3">
                        <a href="user_detail_view.html#activity">By Jassica William</a>
                      </div>
                    </div>
                  </div >
                </div >
              </div >
            </div >

            <div className="video-block section-padding">
              <div className="row">
                <div className="htitle col-md-12">
                  <h5>Places &amp; Events Listing</h5>
                  <a href="#">Show More</a>
                </div>
                <section id="demos1">
                  <div className="col-md-12">
                    <div className="large-12 columns">
                      <div className="owl-carousel owl-theme owl-loaded owl-drag">
                        <div className="owl-stage-outer"><div className="owl-stage" ><div className="owl-item cloned"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="cafe_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-1.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="cafe_listing_detail_view.html">Coffee Cafe</a>
                                <div className="box-heading2">
                                  Australia </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>

                            <div className="box-radius">
                              <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By John Doe </a>
                            </div>
                          </div>
                        </div></div><div className="owl-item cloned"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="restaurant_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-10.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="restaurant_listing_detail_view.html">Basant Restaurant</a>
                                <div className="box-heading2">
                                  Toronto, Canada</div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>
                            <div className="box-radius">
                              <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Jassica William</a>
                            </div>
                          </div>
                        </div></div><div className="owl-item cloned"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="historical_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-45.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="historical_listing_detail_view.html">Historical Place</a>
                                <div className="box-heading2">
                                  Kathmandu, Nepal </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>

                            <div className="box-radius">
                              <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Zoena Singh</a>
                            </div>
                          </div>
                        </div></div><div className="owl-item cloned"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="cafe_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-4.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="cafe_listing_detail_view.html">Coffee cafe</a>
                                <div className="box-heading2">
                                  Birgunj, Nepal </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>
                            <div className="box-radius">
                              <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Rock Smith </a>
                            </div>
                          </div>
                        </div></div><div className="owl-item cloned"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="event_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-20.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="event_listing_detail_view.html">Event</a>
                                <div className="box-heading2">
                                  Mumbai, India</div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>

                            <div className="box-radius">
                              <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By John Doe </a>
                            </div>
                          </div>
                        </div></div><div className="owl-item cloned"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="cinema_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-28.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="cinema_listing_detail_view.html">PVR Cinema</a>
                                <div className="box-heading2">
                                  Los Angels </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>
                            <div className="box-radius">
                              <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Rock William </a>
                            </div>
                          </div>
                        </div></div><div className="owl-item active"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="event_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-17.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="event_listing_detail_view.html">Global Festival</a>
                                <div className="box-heading2">
                                  Nepal</div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>
                            <div className="box-radius">
                              <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By john Doe</a>
                            </div>
                          </div>
                        </div></div><div className="owl-item active"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="cinema_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-27.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="cinema_listing_detail_view.html">Pixel Cinema</a>
                                <div className="box-heading2">
                                  Canada</div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>
                            <div className="box-radius">
                              <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Jassica William</a>
                            </div>
                          </div>
                        </div></div><div className="owl-item active"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="restaurant_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-4.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="restaurant_listing_detail_view.html">B7 Restaurant</a>
                                <div className="box-heading2">
                                  Sydney </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>

                            <div className="box-radius">
                              <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Rock Smith</a>
                            </div>
                          </div>
                        </div></div> <div className="owl-item active"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="event_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-18.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="event_listing_detail_view.html">Music Night Event</a>
                                <div className="box-heading2">
                                  Ludhiana, India </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>

                            <div className="box-radius">
                              <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By John Doe </a>
                            </div>
                          </div>
                        </div></div > <div className="owl-item"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="historical_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-44.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="historical_listing_detail_view.html">Meusuam Historical</a>
                                <div className="box-heading2">
                                  Delhi, India </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>

                            <div className="box-radius">
                              <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Jassica William </a>
                            </div>
                          </div>
                        </div></div > <div className="owl-item"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="cinema_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-29.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="cinema_listing_detail_view.html">Pixel Cinema</a>
                                <div className="box-heading2">
                                  Dhaka, Bangladesh </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>

                            <div className="box-radius">
                              <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Rock Smith </a>
                            </div>
                          </div>
                        </div></div > <div className="owl-item"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="cafe_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-1.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="cafe_listing_detail_view.html">Coffee Cafe</a>
                                <div className="box-heading2">
                                  Australia </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>

                            <div className="box-radius">
                              <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By John Doe </a>
                            </div>
                          </div>
                        </div></div > <div className="owl-item"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="restaurant_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-10.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="restaurant_listing_detail_view.html">Basant Restaurant</a>
                                <div className="box-heading2">
                                  Toronto, Canada</div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>
                            <div className="box-radius">
                              <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Jassica William</a>
                            </div>
                          </div>
                        </div></div > <div className="owl-item"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="historical_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-45.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="historical_listing_detail_view.html">Historical Place</a>
                                <div className="box-heading2">
                                  Kathmandu, Nepal </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>

                            <div className="box-radius">
                              <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Zoena Singh</a>
                            </div>
                          </div>
                        </div></div > <div className="owl-item"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="cafe_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-4.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="cafe_listing_detail_view.html">Coffee cafe</a>
                                <div className="box-heading2">
                                  Birgunj, Nepal </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>
                            <div className="box-radius">
                              <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Rock Smith </a>
                            </div>
                          </div>
                        </div></div > <div className="owl-item"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="event_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-20.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="event_listing_detail_view.html">Event</a>
                                <div className="box-heading2">
                                  Mumbai, India</div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>

                            <div className="box-radius">
                              <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By John Doe </a>
                            </div>
                          </div>
                        </div></div > <div className="owl-item"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="cinema_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-28.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="cinema_listing_detail_view.html">PVR Cinema</a>
                                <div className="box-heading2">
                                  Los Angels </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>
                            <div className="box-radius">
                              <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Rock William </a>
                            </div>
                          </div>
                        </div></div > <div className="owl-item cloned"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="event_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-17.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="event_listing_detail_view.html">Global Festival</a>
                                <div className="box-heading2">
                                  Nepal</div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>
                            <div className="box-radius">
                              <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By john Doe</a>
                            </div>
                          </div>
                        </div></div > <div className="owl-item cloned"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="cinema_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-27.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="cinema_listing_detail_view.html">Pixel Cinema</a>
                                <div className="box-heading2">
                                  Canada</div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>
                            <div className="box-radius">
                              <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Jassica William</a>
                            </div>
                          </div>
                        </div></div > <div className="owl-item cloned"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="restaurant_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-4.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="restaurant_listing_detail_view.html">B7 Restaurant</a>
                                <div className="box-heading2">
                                  Sydney </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>

                            <div className="box-radius">
                              <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Rock Smith</a>
                            </div>
                          </div>
                        </div></div > <div className="owl-item cloned"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="event_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-18.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="event_listing_detail_view.html">Music Night Event</a>
                                <div className="box-heading2">
                                  Ludhiana, India </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>

                            <div className="box-radius">
                              <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By John Doe </a>
                            </div>
                          </div>
                        </div></div > <div className="owl-item cloned"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="historical_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-44.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="historical_listing_detail_view.html">Meusuam Historical</a>
                                <div className="box-heading2">
                                  Delhi, India </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>

                            <div className="box-radius">
                              <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Jassica William </a>
                            </div>
                          </div>
                        </div></div > <div className="owl-item cloned"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="cinema_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/place/ig-29.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="cinema_listing_detail_view.html">Pixel Cinema</a>
                                <div className="box-heading2">
                                  Dhaka, Bangladesh </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>

                            <div className="box-radius">
                              <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Rock Smith </a>
                            </div>
                          </div>
                        </div></div ></div ></div > <div className="owl-nav"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">←</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">→</span></button></div> <div className="owl-dots"><button role="button" className="owl-dot active"><span></span></button><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button></div></div >
                    </div >
                  </div >
                </section >
              </div >
            </div >

            <div className="video-block section-padding">
              <div className="row">
                <div className="htitle col-md-12">
                  <h5>Real Estate</h5>
                  <a href="#">Show More</a>
                </div>
                <section id="demos">
                  <div className="col-md-12">
                    <div className="large-12 columns">
                      <div className="owl-carousel owl-theme owl-loaded owl-drag">
                        <div className="owl-stage-outer"><div className="owl-stage"><div className="owl-item cloned"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="realestate_rent_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/realestate/ig-10.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="realestate_rent_listing_detail_view.html">Room for Rent</a>
                                <div className="box-heading2">
                                  London </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>
                            <div className="box-radius">
                              <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By John Doe</a>
                            </div>
                          </div>
                        </div></div><div className="owl-item cloned"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="realestate_rent_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/realestate/ig-12.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="realestate_rent_listing_detail_view.html">Office Space for Rent</a>
                                <div className="box-heading2">
                                  Pakistan</div>
                              </div>
                            </div>
                            <div className="box-radius">
                              <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Jassica william </a>
                            </div>
                          </div>
                        </div></div><div className="owl-item cloned"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="realestate_sell_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/realestate/ig-13.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="realestate_sell_listing_detail_view.html">Shop for Sale</a>
                                <div className="box-heading2">
                                  Sydney</div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>
                            <div className="box-radius">
                              <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Rock Smith </a>
                            </div>
                          </div>
                        </div></div><div className="owl-item cloned"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="realestate_sell_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/realestate/ig-2.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="#realestate_sell_listing_detail_view.html">House for Sale</a>
                                <div className="box-heading2">
                                  South Africa </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>
                            <div className="box-radius">
                              <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By John Doe </a>
                            </div>
                          </div>
                        </div></div><div className="owl-item cloned"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="realestate_sell_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/realestate/ig-5.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="realestate_sell_listing_detail_view.html">Apartment for Sale</a>
                                <div className="box-heading2">
                                  California </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>
                            <div className="box-radius">
                              <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Jassica William</a>
                            </div>
                          </div>
                        </div></div><div className="owl-item cloned"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="realestate_rent_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/realestate/ig-1.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="realestate_rent_listing_detail_view.html">Shop for Rent</a>
                                <div className="box-heading2">
                                  London </div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>
                            <div className="box-radius">
                              <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By Rock William </a>
                            </div>
                          </div>
                        </div></div><div className="owl-item active"><div className="item">
                          <div className="box">
                            <div className="box-img">
                              <a href="realestate_sell_listing_detail_view.html" className="over-bg"></a>
                              <img src="images/homepage/realestate/ig-1.jpg" className="img" alt="" title=""></img>
                              <div className="box-heading1">
                                <a href="realestate_sell_listing_detail_view.html">House For Sale</a>
                                <div className="box-heading2">
                                  India</div>
                              </div>
                              <div className="favorite">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>
                            <div className="box-radius">
                              <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                            </div>
                            <div className="box-heading3">
                              <a href="user_detail_view.html#activity">By John Doe </a>
                            </div>
                          </div>
                        </div></div><div className="owl-item active">
                            <div className="item">
                              <div className="box">
                                <div className="box-img">
                                  <a href="realestate_rent_listing_detail_view.html" className="over-bg"></a>
                                  <img src="images/homepage/realestate/ig-2.jpg" className="img" alt="" title=""></img>
                                  <div className="box-heading1">
                                    <a href="realestate_rent_listing_detail_view.html">House for rent</a>
                                    <div className="box-heading2">
                                      Australia </div>
                                  </div>
                                  <div className="favorite">
                                    <i className="far fa-heart"></i>
                                  </div>
                                </div>
                                <div className="box-radius">
                                  <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                                </div>
                                <div className="box-heading3">
                                  <a href="user_detail_view.html#activity">By Jassica William</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="owl-item active">
                            <div className="item">
                              <div className="box">
                                <div className="box-img">
                                  <a href="realestate_sell_listing_detail_view.html" className="over-bg"></a>
                                  <img src="images/homepage/realestate/ig-13.jpg" className="img" alt="" title=""></img>
                                  <div className="box-heading1">
                                    <a href="realestate_sell_listing_detail_view.html">Sale Shop</a>
                                    <div className="box-heading2">
                                      Nepal
                                    </div>
                                  </div>
                                  <div className="favorite">
                                    <i className="far fa-heart"></i>
                                  </div>
                                </div>
                                <div className="box-radius">
                                  <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                                </div>
                                <div className="box-heading3">
                                  <a href="user_detail_view.html#activity">By Rock Smith </a>
                                </div>
                              </div>
                            </div></div > <div className="owl-item active"><div className="item">
                              <div className="box">
                                <div className="box-img">
                                  <a href="realestate_sell_listing_detail_view.html" className="over-bg"></a>
                                  <img src="images/homepage/realestate/ig-6.jpg" className="img" alt="" title=""></img>
                                  <div className="box-heading1">
                                    <a href="realestate_sell_listing_detail_view.html">Apartment for Rent</a>
                                    <div className="box-heading2">
                                      Bangladesh</div>
                                  </div>
                                  <div className="favorite">
                                    <i className="far fa-heart"></i>
                                  </div>
                                </div>
                                <div className="box-radius">
                                  <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                                </div>
                                <div className="box-heading3">
                                  <a href="user_detail_view.html#activity">By John Doe</a>
                                </div>
                              </div>
                            </div></div > <div className="owl-item"><div className="item">
                              <div className="box">
                                <div className="box-img">
                                  <a href="realestate_rent_listing_detail_view.html" className="over-bg"></a>
                                  <img src="images/homepage/realestate/ig-9.jpg" className="img" alt="" title=""></img>
                                  <div className="box-heading1">
                                    <a href="realestate_rent_listing_detail_view.html">Office for Rent</a>
                                    <div className="box-heading2">
                                      Canada</div>
                                  </div>
                                  <div className="favorite">
                                    <i className="far fa-heart"></i>
                                  </div>
                                </div>
                                <div className="box-radius">
                                  <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                                </div>
                                <div className="box-heading3">
                                  <a href="user_detail_view.html#activity">By Jassica William </a>
                                </div>
                              </div>
                            </div></div > <div className="owl-item"><div className="item">
                              <div className="box">
                                <div className="box-img">
                                  <a href="realestate_sell_listing_detail_view.html" className="over-bg"></a>
                                  <img src="images/homepage/realestate/ig-4.jpg" className="img" alt="" title=""></img>
                                  <div className="box-heading1">
                                    <a href="realestate_sell_listing_detail_view.html">House for Sale</a>
                                    <div className="box-heading2">
                                      Austria</div>
                                  </div>
                                  <div className="favorite">
                                    <i className="far fa-heart"></i>
                                  </div>
                                </div>
                                <div className="box-radius">
                                  <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                                </div>
                                <div className="box-heading3">
                                  <a href="user_detail_view.html#activity">By Rock William</a>
                                </div>
                              </div>
                            </div></div > <div className="owl-item"><div className="item">
                              <div className="box">
                                <div className="box-img">
                                  <a href="realestate_rent_listing_detail_view.html" className="over-bg"></a>
                                  <img src="images/homepage/realestate/ig-10.jpg" className="img" alt="" title=""></img>
                                  <div className="box-heading1">
                                    <a href="realestate_rent_listing_detail_view.html">Room for Rent</a>
                                    <div className="box-heading2">
                                      London </div>
                                  </div>
                                  <div className="favorite">
                                    <i className="far fa-heart"></i>
                                  </div>
                                </div>
                                <div className="box-radius">
                                  <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                                </div>
                                <div className="box-heading3">
                                  <a href="user_detail_view.html#activity">By John Doe</a>
                                </div>
                              </div>
                            </div></div > <div className="owl-item"><div className="item">
                              <div className="box">
                                <div className="box-img">
                                  <a href="realestate_rent_listing_detail_view.html" className="over-bg"></a>
                                  <img src="images/homepage/realestate/ig-12.jpg" className="img" alt="" title=""></img>
                                  <div className="box-heading1">
                                    <a href="realestate_rent_listing_detail_view.html">Office Space for Rent</a>
                                    <div className="box-heading2">
                                      Pakistan</div>
                                  </div>
                                </div>
                                <div className="box-radius">
                                  <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                                </div>
                                <div className="box-heading3">
                                  <a href="user_detail_view.html#activity">By Jassica william </a>
                                </div>
                              </div>
                            </div></div > <div className="owl-item"><div className="item">
                              <div className="box">
                                <div className="box-img">
                                  <a href="realestate_sell_listing_detail_view.html" className="over-bg"></a>
                                  <img src="images/homepage/realestate/ig-13.jpg" className="img" alt="" title=""></img>
                                  <div className="box-heading1">
                                    <a href="realestate_sell_listing_detail_view.html">Shop for Sale</a>
                                    <div className="box-heading2">
                                      Sydney</div>
                                  </div>
                                  <div className="favorite">
                                    <i className="far fa-heart"></i>
                                  </div>
                                </div>
                                <div className="box-radius">
                                  <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                                </div>
                                <div className="box-heading3">
                                  <a href="user_detail_view.html#activity">By Rock Smith </a>
                                </div>
                              </div>
                            </div></div > <div className="owl-item"><div className="item">
                              <div className="box">
                                <div className="box-img">
                                  <a href="realestate_sell_listing_detail_view.html" className="over-bg"></a>
                                  <img src="images/homepage/realestate/ig-2.jpg" className="img" alt="" title=""></img>
                                  <div className="box-heading1">
                                    <a href="#realestate_sell_listing_detail_view.html">House for Sale</a>
                                    <div className="box-heading2">
                                      South Africa </div>
                                  </div>
                                  <div className="favorite">
                                    <i className="far fa-heart"></i>
                                  </div>
                                </div>
                                <div className="box-radius">
                                  <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                                </div>
                                <div className="box-heading3">
                                  <a href="user_detail_view.html#activity">By John Doe </a>
                                </div>
                              </div>
                            </div></div >
                          <div className="owl-item">
                            <div className="item">
                              <div className="box">
                                <div className="box-img">
                                  <a href="realestate_sell_listing_detail_view.html" className="over-bg"></a>
                                  <img src="images/homepage/realestate/ig-5.jpg" className="img" alt="" title=""></img>
                                  <div className="box-heading1">
                                    <a href="realestate_sell_listing_detail_view.html">Apartment for Sale</a>
                                    <div className="box-heading2">
                                      California </div>
                                  </div>
                                  <div className="favorite">
                                    <i className="far fa-heart"></i>
                                  </div>
                                </div>
                                <div className="box-radius">
                                  <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                                </div>
                                <div className="box-heading3">
                                  <a href="user_detail_view.html#activity">By Jassica William</a>
                                </div>
                              </div>
                            </div></div > <div className="owl-item"><div className="item">
                              <div className="box">
                                <div className="box-img">
                                  <a href="realestate_rent_listing_detail_view.html" className="over-bg"></a>
                                  <img src="images/homepage/realestate/ig-1.jpg" className="img" alt="" title=""></img>
                                  <div className="box-heading1">
                                    <a href="realestate_rent_listing_detail_view.html">Shop for Rent</a>
                                    <div className="box-heading2">
                                      London </div>
                                  </div>
                                  <div className="favorite">
                                    <i className="far fa-heart"></i>
                                  </div>
                                </div>
                                <div className="box-radius">
                                  <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                                </div>
                                <div className="box-heading3">
                                  <a href="user_detail_view.html#activity">By Rock William </a>
                                </div>
                              </div>
                            </div></div > <div className="owl-item cloned"><div className="item">
                              <div className="box">
                                <div className="box-img">
                                  <a href="realestate_sell_listing_detail_view.html" className="over-bg"></a>
                                  <img src="images/homepage/realestate/ig-1.jpg" className="img" alt="" title=""></img>
                                  <div className="box-heading1">
                                    <a href="realestate_sell_listing_detail_view.html">House For Sale</a>
                                    <div className="box-heading2">
                                      India</div>
                                  </div>
                                  <div className="favorite">
                                    <i className="far fa-heart"></i>
                                  </div>
                                </div>
                                <div className="box-radius">
                                  <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                                </div>
                                <div className="box-heading3">
                                  <a href="user_detail_view.html#activity">By John Doe </a>
                                </div>
                              </div>
                            </div></div> <div className="owl-item cloned"><div className="item">
                              <div className="box">
                                <div className="box-img">
                                  <a href="realestate_rent_listing_detail_view.html" className="over-bg"></a>
                                  <img src="images/homepage/realestate/ig-2.jpg" className="img" alt="" title=""></img>
                                  <div className="box-heading1">
                                    <a href="realestate_rent_listing_detail_view.html">House for rent</a>
                                    <div className="box-heading2">
                                      Australia </div>
                                  </div>
                                  <div className="favorite">
                                    <i className="far fa-heart"></i>
                                  </div>
                                </div>
                                <div className="box-radius">
                                  <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                                </div>
                                <div className="box-heading3">
                                  <a href="user_detail_view.html#activity">By Jassica William</a>
                                </div>
                              </div>
                            </div></div > <div className="owl-item cloned"><div className="item">
                              <div className="box">
                                <div className="box-img">
                                  <a href="realestate_sell_listing_detail_view.html" className="over-bg"></a>
                                  <img src="images/homepage/realestate/ig-13.jpg" className="img" alt="" title=""></img>
                                  <div className="box-heading1">
                                    <a href="realestate_sell_listing_detail_view.html">Sale Shop</a>
                                    <div className="box-heading2">
                                      Nepal
                                    </div>
                                  </div>
                                  <div className="favorite">
                                    <i className="far fa-heart"></i>
                                  </div>
                                </div>
                                <div className="box-radius">
                                  <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                                </div>
                                <div className="box-heading3">
                                  <a href="user_detail_view.html#activity">By Rock Smith </a>
                                </div>
                              </div>
                            </div></div > <div className="owl-item cloned"><div className="item">
                              <div className="box">
                                <div className="box-img">
                                  <a href="realestate_sell_listing_detail_view.html" className="over-bg"></a>
                                  <img src="images/homepage/realestate/ig-6.jpg" className="img" alt="" title=""></img>
                                  <div className="box-heading1">
                                    <a href="realestate_sell_listing_detail_view.html">Apartment for Rent</a>
                                    <div className="box-heading2">
                                      Bangladesh</div>
                                  </div>
                                  <div className="favorite">
                                    <i className="far fa-heart"></i>
                                  </div>
                                </div>
                                <div className="box-radius">
                                  <img src="images/homepage/latest/01_dp.png" className="img" alt="" title=""></img>
                                </div>
                                <div className="box-heading3">
                                  <a href="user_detail_view.html#activity">By John Doe</a>
                                </div>
                              </div>
                            </div></div > <div className="owl-item cloned"><div className="item">
                              <div className="box">
                                <div className="box-img">
                                  <a href="realestate_rent_listing_detail_view.html" className="over-bg"></a>
                                  <img src="images/homepage/realestate/ig-9.jpg" className="img" alt="" title=""></img>
                                  <div className="box-heading1">
                                    <a href="realestate_rent_listing_detail_view.html">Office for Rent</a>
                                    <div className="box-heading2">
                                      Canada</div>
                                  </div>
                                  <div className="favorite">
                                    <i className="far fa-heart"></i>
                                  </div>
                                </div>
                                <div className="box-radius">
                                  <img src="images/homepage/latest/02_dp.png" className="img" alt="" title=""></img>
                                </div>
                                <div className="box-heading3">
                                  <a href="user_detail_view.html#activity">By Jassica William </a>
                                </div>
                              </div>
                            </div></div > <div className="owl-item cloned"><div className="item">
                              <div className="box">
                                <div className="box-img">
                                  <a href="realestate_sell_listing_detail_view.html" className="over-bg"></a>
                                  <img src="images/homepage/realestate/ig-4.jpg" className="img" alt="" title=""></img>
                                  <div className="box-heading1">
                                    <a href="realestate_sell_listing_detail_view.html">House for Sale</a>
                                    <div className="box-heading2">
                                      Austria</div>
                                  </div>
                                  <div className="favorite">
                                    <i className="far fa-heart"></i>
                                  </div>
                                </div>
                                <div className="box-radius">
                                  <img src="images/homepage/latest/03_dp.png" className="img" alt="" title=""></img>
                                </div>
                                <div className="box-heading3">
                                  <a href="user_detail_view.html#activity">By Rock William</a>
                                </div>
                              </div>
                            </div></div ></div ></div > <div className="owl-nav"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">←</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">→</span></button></div> <div className="owl-dots"><button role="button" className="owl-dot active"><span></span></button><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button></div></div >
                    </div >
                  </div >
                </section >
              </div >
            </div >

            <div className="view-spinner">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>

          </div >
        </div >
      </div >
    </div >
  )
}


export default Content;