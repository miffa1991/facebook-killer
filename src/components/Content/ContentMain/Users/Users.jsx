import React from 'react';
import User from './User/User';
import s from './Users.module.css';
import userPhoto from './../../../../assets/img/user.jpeg';
import { NavLink } from 'react-router-dom';



const Users = (props) => {
  let pageCount = Math.ceil(props.pageUserCount / props.pageLimit);
  let pages = [];
  for (let i = 1; i < pageCount; i++) {
    pages.push(i);
  }
  //debugger
  return (
    <div className={`${s['video-block']} ${s['section-padding']}`}>
      <div className={s['main-items']}>
        <div className="row justify-content-md-center">
          <div className={`${s.messages} text-center col-md-12`}>
            Find Profiles
            <hr />
          </div>
          <div className="feedback col-md-12">
            <div className={s['search-people']}>
              <input type="search" className={s['search-people-input']} />
              <button className={s['people-search']}>Search</button>
            </div>
          </div>
        </div>
        {/* <button onClick={this.getSettetsUsers}>addUsers</button> */}
        <div className={s['my-all-lisitngs']}>
          <div className="row">
            {props.users.map(u => <div key={u.id} className="col-lg-3 col-sm-12">
              <div className={s['my-listing-dt-all-follow']}>
                <div className={s['my-lisiting-picy']}>
                  <a href="#"> <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" /></a>
                </div>
                <NavLink to={`/profile/${u.id}`} ><h4>{u.name}</h4></NavLink>
                <p> <i className="fas fa-map-marker-alt"></i>{'u.location.country'} </p>
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
                {u.followed ?
                  <button disabled={props.followingInProgress.some(id => id === u.id)} className={s['folow-btn']} 
                  onClick={() => { props.unfollow(u.id) } }>Follow</button> :
                  <button disabled={props.followingInProgress.some(id => id === u.id)} className={s['folow-btn']} 
                    onClick={() => { props.follow(u.id) } }>Unfollow</button>}
              </div>
            </div>)}
          </div>
        </div>
        <div className={s['view-spinner']}>
          <div className={s['spinner-border']} >
            <span className={s['sr-only']}>Loading...</span>
          </div>
        </div>
      </div>
      <div className={s.pagination}>
        {pages.map(p => {
          return <div className={props.pageCurrent == p && s.activePage} onClick={() => { props.changeCurrentPage(p) }} >{p}</div>
        })}
      </div>
    </div>
  )
}

export default Users;