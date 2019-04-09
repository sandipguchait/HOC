import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapped;
//rbeforeEach() run before each line of code with expect()
beforeEach(() => {
      wrapped = shallow(<App/>);
})

it('shows a comment box', () => {
     //writing the expect function for comment box to .toEqual mather
     expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment List', () => {
     expect(wrapped.find(CommentList).length).toEqual(1)
});