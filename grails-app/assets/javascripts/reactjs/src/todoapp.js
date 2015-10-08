var TodoApp = React.createClass({
    getInitialState: function() {
        return {current:'home'}
    },
    showTodoBox: function() {
        this.setState({current:'todo'});
        React.render(
            <TodoBox url="/api/todo"/>,
            document.getElementById('content')
        );
    },
    showTagBox: function() {
        this.setState({current:'tag'});
        React.render(
            <TagBox url="/api/tag"/>,
            document.getElementById('content')
        );
    },
    showTodoListBox: function() {
        this.setState({current:'todoList'});
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
