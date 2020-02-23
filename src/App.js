import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';




const App = (props) => {
  return (
    <div className="App">
      <HeaderContainer />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
