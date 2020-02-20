import React from 'react';
import s from './User.module.css';
import userPhoto from './../../../../../assets/img/user.jpeg';

const User = (props) => {

  return (
    <div className="col-lg-3 col-sm-12">
      <div className={s['my-listing-dt-all-follow']}>
        <div className={s['my-lisiting-picy']}>
          <a href="user_detail_view.html"> <img src={props.avatar != null ? props.avatar : userPhoto } alt="" /></a>
        </div>
        <a href="user_detail_view.html"><h4>{props.name}</h4></a>
        <p> <i className="fas fa-map-marker-alt"></i>{'props.location.country'} </p>
        <div className={s['dashboard-main-dt-follow']}>
          <ul>
            <li>
              <div className={s['lisitng-dt2']}>
                <ins>15</ins>
                <span>Listings</span>
              </div>
            </li>
            <li>
              <div className={s['lisitng-dt2']}>
                <ins>150</ins>
                <span>Followers</span>
              </div>
            </li>
            <li>
              <div className={s['lisitng-dt2']}>
                <ins>265</ins>
                <span>Following</span>
              </div>
            </li>
          </ul>
        </div>
        {props.followed ? <button className={s['folow-btn']} onClick={() => { props.unfollow(props.id) } }>Follow</button> : <button className={s['folow-btn']} onClick={() => { props.follow(props.id) } } >Unfollow</button>}
      </div>
    </div>
  )
}

export default User;