import postReducer, { newPost, deletePost } from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
	postItem: [
		{ id: 1, name: 'Rock William', lastMessage: 'Hi what are you doing?', date: 'Today, 02.00PM' },
		{ id: 2, name: 'Stasik William', lastMessage: 'Hi', date: 'Today, 03.00PM' },
		{ id: 3, name: 'Lola Lola', lastMessage: 'Hi what are you do?', date: 'Today, 04.00PM' }
	],
	profilePage: null,
	pageIdUser: 6084,
	status: ''
};

it('length of posts should be incremented', () => {
	// 1. test data
	let action = newPost("it-kamasutra.com");

	// 2. action
	let newState = postReducer(state, action);

	// 3. expectation
	expect(newState.postItem.length).toBe(4);

});

it('message of new post should be correct', () => {
	// 1. test data
	let action = newPost("it-kamasutra.com");

	// 2. action
	let newState = postReducer(state, action);

	// 3. expectation
	expect(newState.postItem[3].lastMessage).toBe("it-kamasutra.com");
});

it('after deleting length of messages should be decrement', () => {
	// 1. test data
	let action = deletePost(1);

	// 2. action
	let newState = postReducer(state, action);

	// 3. expectation
	expect(newState.postItem.length).toBe(2);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
	// 1. test data
	let action = deletePost(1000);

	// 2. action
	let newState = postReducer(state, action);

	// 3. expectation
	expect(newState.postItem.length).toBe(3);
});


