import React from 'react';
// import { NavLink } from 'react-router-dom';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s['sticky-footer']} >
      <div className="container my-auto">
        <div className={`${s.copyright} ${s['text-center']} ${s['my-auto']}`}>
          <div className={s['footer-info']}>
            <a href="#">About </a> |
							<a href="#">Faq’s </a> |
							<a href="#">Privacy</a> |
							<a href="#"> Advertise</a>  |
							<a href="#">Term &amp; Conditions </a> |
							<a href="#">Sitemap  </a>|
							<a href="#">Tags  </a>|
							<a href="#">Blog</a>
          </div>
          <div className={s['copy-right']}>
            © Copyright 2019 by Gambol. All Rights Reserved.
						</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;