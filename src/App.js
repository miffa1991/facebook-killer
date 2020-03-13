import React, { Component } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { initializeApp } from './../src/redux/app-reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Preloader from './components/common/Preloader/Preloader';



class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
	if(!this.props.initialized){
	return <Preloader />
	}
		return (
			<div className="App">
				<HeaderContainer />
				<Content />
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});

export default compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);
