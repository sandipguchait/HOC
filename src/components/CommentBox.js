import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class CommentBox extends Component {

    state = {
        comment: ''
    }
    //component just got rendered
    componentDidMount() {
        this.shouldNavigateAway()
    }

    //our compoenent got updated
    componentDidUpdate(){
        this.shouldNavigateAway()
    }

    shouldNavigateAway(){
         if(!this.props.auth) {
            this.props.history.push('/');
        }
    }

    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveComment(this.state.comment)
        this.setState({ comment: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4> Add a Comment </h4>
                    <textarea value={this.state.comment} onChange={this.handleChange}/>
                    <div>
                    <button type="submit">Submit Comment</button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        );
    }
}

const mapStateToprops = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToprops, actions )(CommentBox);