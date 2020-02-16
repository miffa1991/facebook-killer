import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';




const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Content dialogItem={props.state.dialogItem} newMessageText={props.state.newMessageText} newMessage={props.newMessage} updateNewPostText={props.updateNewPostText} />
      <Footer />
    </div>
  );
}

export default App;
