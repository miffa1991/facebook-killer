import React from 'react';
import s from './Content.module.css';
import ContentMain from './ContentMain/ContentMain';
import Sidebar from './Sidebar/Sidebar';




const Content = () => {
  return (
    <div className="full-width">
      <div id="wrapper">
        <Sidebar />
        <ContentMain />
      </div>
    </div>
  )
}


export default Content;