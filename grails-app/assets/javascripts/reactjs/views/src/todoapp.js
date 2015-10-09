var TodoApp = React.createClass({
    getInitialState: function() {
        return {current:'home'}
    },
    showHomeBox: function() {
        this.setState({current:'home'});
        React.render(
            <HomeBox/>,
            document.getElementById('content')
        );
    },
    showTodoBox: function() {
        this.setState({current:'todo'});
        React.render(
            <TodoBox collection={app.todos}/>,
            document.getElementById('content')
        );
    },
    showTagBox: function() {
        this.setState({current:'tag'});
        React.render(
            <TagBox collection={app.tags}/>,
            document.getElementById('content')
        );
    },
    showTodoListBox: function() {
        this.setState({current:'todoList'});
        React.render(
            <TodoListBox collection={app.todoLists}/>,
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
                    <span className="navbar-brand"><a onClick={this.showHomeBox}>Grails-ReactJS TODO App</a></span>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className={ this.state.current=='todo' ? 'active' : '' }><a onClick={this.showTodoBox}>Todos</a></li>
                        <li className={ this.state.current=='tag' ? 'active' : '' }><a onClick={this.showTagBox}>Tags</a></li>
                        <li className={ this.state.current=='todoList' ? 'active' : '' }><a onClick={this.showTodoListBox}>Todo Lists</a></li>
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
