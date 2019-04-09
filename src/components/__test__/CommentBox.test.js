import React from 'react'
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
     wrapped = mount(
        <Root>
        <CommentBox/>
        </Root>
     );
});

afterEach(() => {
    wrapped.unmount();
})

it('has a text area and two button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

// TEXT area Grouping 
describe('the text area', () => {
     // ONLY WILL RUN BEFORE THESE 2 Block of IT and not outside
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment'}
        });
        wrapped.update();
    });

  
    it('has a textarea that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    });
    
    it('has textarea emptied after form gets submitted', ()=> {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    });
});

