import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../../../common/Preloader/Preloader';
import PropfileStatusContainer from './ProfileStatus';

const ProfileInfo = (props) => {

  if (!props.profilePage) {
    return <Preloader/>
  }

return (
  <div className="row">
    <div className="col-md-12 px-0">
      <div className={s['profile-area-dashboard']}>
        <div className={s['shapes-bg-big']}></div>
        <div className={s['my-dash-profile']}>
          <img src={props.profilePage.photos.large} alt="" />
          <div className={s['add-dp']} id="OpenImgUpload">
            <input type="file" id="file" />
            <label for="file"><i className={`${s.fas} ${s['fa-camera']}`}></i></label>
          </div>
        </div>
        <div className={s['profile-dashbd-dt']}>
          <div className={s['item-title-dashbd']}>
            <h4> {props.profilePage.fullName} </h4>
            <h5><PropfileStatusContainer status={'Hello'} /></h5>
            {/* <p><span><i className={`${s.fas} ${s['fa-map-marker-alt']}`}></i></span> Paris </p> */}
          </div>
          <div className={s['dashboard-main-dt']}>
            <ul>
              <li>
                <div className={s['lisitng-dtl']}>
                  <ins>15</ins>
                  <span>Listings</span>
                </div>
              </li>
              <li>
                <div className={s['lisitng-dtl']}>
                  <ins>150</ins>
                  <span>Followers</span>
                </div>
              </li>
              <li>
                <div className={s['lisitng-dtl']}>
                  <ins>265</ins>
                  <span>Following</span>
                </div>
              </li>
            </ul>
          </div>
          <button className={s['setting-btn']}>Setting</button>
        </div>
      </div>
    </div>
  </div>
)
}

export default ProfileInfo;