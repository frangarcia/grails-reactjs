var TodoBox = React.createClass({
    loadTodosFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data:[]};
    },
    componentDidMount: function() {
        this.loadTodosFromServer();
        setInterval(this.loadTodosFromServer, this.props.pollInterval);
    },
    render: function() {
        return (
            <div>
                <a class="btn btn-small btn-success">Create todo</a>
                <ListTodo data={this.state.data} url="/api/todo"/>
            </div>
        );
    }
});

var TodoForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var title = React.findDOMNode(this.refs.title).value.trim();
        var url = React.findDOMNode(this.refs.url).value.trim();
        var content = React.findDOMNode(this.refs.content).value.trim();
        if (!title || !url || !content) {
            return;
        }
        this.props.onTodoSubmit({title: title, content: content, url:url});
        console.log(title+url+content);
        React.findDOMNode(this.refs.title).value = '';
        React.findDOMNode(this.refs.url).value = '';
        React.findDOMNode(this.refs.content).value = '';
        return;
    },
    render: function() {
        return (
            <div>
                <h1>Create Todo</h1>
                <form role="form" onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input class="form-control" ref="title"/>
                    </div>
                    <div class="form-group">
                        <label for="content">Content</label>
                        <textarea class="form-control" rows="6" ref="content"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="url">Url</label>
                        <input class="form-control" ref="url"/>
                    </div>
                    <div class="form-group">
                        <label for="todoList">List</label>
                        <select class="form-control" ref="todoList">
                            <option value="">Choose list</option>
                            <option value="{{todoList.id}}"></option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="tags">Tags</label>
                        <select class="form-control" ref="tags" multiple>
                        </select>
                    </div>
                    <input type="submit" class="btn btn-small btn-primary" value="Create"/>
                </form>
            </div>
        );
    }
});

var TodoRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.title}</td>
                <td>{this.props.url}</td>
                <td>{this.props.list}</td>
                <td></td>
            </tr>
        );
    }
});


var ListTodo = React.createClass({
    handleTodoSubmit: function(todo) {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: todo,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        var todos = this.props.data.map(function(todo) {
            return (
                <TodoRow title={todo.title} url={todo.url} id={todo.id} list={todo.list}/>
            );
        });
        return (
            <div className="todoList">
                <h1>List of todos</h1>
                <table class="table table-striped">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>URL</th>
                        <th>List</th>
                        <th></th>
                    </tr>
                    {todos}
                </table>
                <TodoForm onTodoSubmit={this.handleTodoSubmit}/>
            </div>
        )
    }
});

React.render(
    <TodoBox url="/api/todo" pollInterval={60000} />,
    document.getElementById('content')
);
