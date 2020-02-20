import React from 'react';
import User from './User/User';
import s from './Users.module.css';
const Users = (props) => {
  let UsersElement = props.users.map(u => <User key={u.id} id={u.id} followed={u.followed} name={u.name} avatar={u.avatar} location={u.location}  follow={props.follow} unfollow={props.unfollow} />);
 
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
        <div className={s['my-all-lisitngs']}>
          <div className="row">
            {UsersElement}
          </div>
        </div>
        <div className={s['view-spinner']}>
          <div className={s['spinner-border']} >
            <span className={s['sr-only']}>Loading...</span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Users;