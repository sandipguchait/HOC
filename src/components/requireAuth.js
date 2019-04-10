import React from 'react';

export default (ChildComponent) => {
    class ComposedComponent extends React.Component {
        render(){
            return <ChildComponent/>
        }
    }
    return ComposedComponent;
}