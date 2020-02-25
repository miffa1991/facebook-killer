import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
    <ul className={`${s.sidebar} ${s['navbar-nav']}`}>
      <li className={`${s['nav-item']} ${s.active}`}>
        <NavLink to="/profile">
          <div className={s.fos} id="foo"> Home </div>
        </NavLink>
      </li>
      <li className={`${s['nav-item']} ${s.active}`}>
        <NavLink to="/users">
          <div className={s.fos} id="foo"> Users </div>
        </NavLink>
      </li>
      <li className={s['nav-item']}>
        <NavLink to="/dialogs">
          <div className={s.fos} id="foo3"> Messages </div>
        </NavLink>
      </li>
      <li className="dropdown-divider"></li>
      <li className={s['nav-item']}>
        <NavLink to="/login">
          <div className={s.fos} id="foo8"> Login</div>
        </NavLink>
      </li>
      <li className={s['nav-item']}>
        <NavLink to="setting.html">
          <div className={s.fos} id="foo9"> Setting</div>
        </NavLink>
      </li>
      <li className={s['nav-item']}>
        <NavLink to="feedback.html">
          <div className={s.fos} id="foo10"> Send Feedback </div>
        </NavLink>
      </li>
    </ul>
  )
}

export default Sidebar;