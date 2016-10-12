import ListTodoList from './ListTodoList'

var TodoListBox = React.createClass({
    getInitialState: function() {
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
