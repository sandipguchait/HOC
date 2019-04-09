import React from 'react'
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../Root';
import App from '../components/App';


beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetched #1'}, {name: 'Fetched #2'}]
  });
})

afterEach(() => {
    moxios.uninstall();
})

it('can fetch a list of comments and display them', (done) => {
    // attempt to render he entire app 
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    );

    // find the fetchcomments button and click it 
    wrapped.find('.fetch-comments').simulate('click');

    // expoect to find a list of comments!
    // since it is axios call so have to five a little delay to fetch
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    });
});