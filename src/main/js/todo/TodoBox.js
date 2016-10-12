import React from 'react';
import ListTodo from './ListTodo'

var TodoBox = React.createClass({
    getInitialState: function() {
        console.log("getInitialState for TodoBox");
        return {todos:[]};
    },
    render: function() {
        return (
            <div>
                <ListTodo collection={app.todos}/>
            </div>
        );
    }
});

export default TodoBox;
