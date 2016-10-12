import React from 'react';
import ListTodoList from './ListTodoList'

var TodoListBox = React.createClass({
    getInitialState: function() {
        console.log("getInitialState for TodoListBox");
        return {todoLists:[]};
    },
    render: function() {
        return (
            <div>
                <ListTodoList collection={app.todoLists}/>
            </div>
        );
    }
});

export default TodoListBox;
