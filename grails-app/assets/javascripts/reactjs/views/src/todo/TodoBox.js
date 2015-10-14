var TodoBox = React.createClass({
    getInitialState: function() {
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