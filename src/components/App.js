import React, { Component } from 'react';

import CommentList from './CommentList';
import CommentBox from './CommentBox';


class App extends Component {
  render() {
    return (
      <div>
        <CommentBox/>
        <CommentList/>
      </div>
    );
  }
}

export default App;
