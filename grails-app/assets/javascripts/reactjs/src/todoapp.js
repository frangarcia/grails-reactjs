var TodoApp = React.createClass({
    showTodoBox: function() {
        React.render(
            <TodoBox url="/api/todo"/>,
            document.getElementById('content')
        );
    },
    showTagBox: function() {
        React.render(
            <TagBox url="/api/tag"/>,
            document.getElementById('content')
        );
    },
    showTodoListBox: function() {
        React.render(
            <TodoListBox url="/api/todoList"/>,
            document.getElementById('content')
        );
    },
    render: function() {
        return (
            <div>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <span className="navbar-brand">Grails-ReactJS TODO App</span>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><a onClick={this.showTodoBox}>Todos</a></li>
                        <li><a onClick={this.showTagBox}>Tags</a></li>
                        <li><a onClick={this.showTodoListBox}>Todo Lists</a></li>
                    </ul>
                </div>
            </div>
        )
    }
})

React.render(
    <TodoApp/>,
    document.getElementById('navigation')
);
