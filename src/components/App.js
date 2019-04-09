import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CommentList from './CommentList';
import CommentBox from './CommentBox';


class App extends Component {
  render() {
    return (
      <div>
        <Route path="/post" component={CommentBox} />
        <Route exact path="/" component={CommentList} />
      </div>
    );
  }
}

export default App;
