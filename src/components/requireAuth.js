import React from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends React.Component {

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
        render(){
            return <ChildComponent/>
        }
    }

    const mapStateToprops = (state) => {
        return {
            auth: state.auth
        }
    } 
    
    return connect(mapStateToprops)(ComposedComponent);
}