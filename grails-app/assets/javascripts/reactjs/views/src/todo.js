var TodoBox = React.createClass({
    mixins: [app.backboneMixin],
    getBackboneCollections: function () {
        return [this.props.collection];
    },
    getInitialState: function() {
        return {todos:[]};
    },
    componentDidMount: function(prevProps, prevState) {
        this.props.collection.fetch();
    },
    componentWillUnMount: function() {
        this.props.collection.forEach(function (model) {
            model.save();
        });
    },
    handleTodoSubmit: function(todo) {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: todo,
            success: function(data) {
                this.loadTodosFromServer();
            }.bind(this),
            error: function(xhr, status, err) {
                this.loadTodosFromServer();
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    handleTodoEditClick: function() {
        console.log('handleTodoEditClick fired');
    },
    render: function() {
        return (
            <div>
                <TodoForm onTodoSubmit={this.handleTodoSubmit} url="api/todo" todo={this.state.todo}/>
                <ListTodo data={this.props.collection.models} onEditTodoClick={this.handleTodoEditClick}/>
            </div>
        );
    }
});

var ListTodo = React.createClass({
    getInitialState: function() {
        return {editTodo:false};
    },
    render: function() {
        var _this = this;
        var todos = this.props.data.map(function(todo) {
            var editTodo = function() {
                _this.setState({editTodo:true, todo:todo});
                _this.props.onEditTodoClick();
            }
            return (
                <TableRow data={[todo.get("id"), todo.get("title"), todo.get("url"), todo.get("list"), '']} onClick={editTodo}/>
            );
        }.bind(this));
        var divStyle = {
            display: this.state.editTodo ? '' : 'none'
        };
        return (
            <div className="todoList">
                <h1>List of todos</h1>
                <ReactBootstrap.Table striped bordered condensed hover>
                    <TableHeaderRow data={["ID","Title","URL","List",""]}/>
                    <TableBody>
                        {todos}
                    </TableBody>
                </ReactBootstrap.Table>
            </div>
        )
    }
});

var TodoForm = React.createClass({
    getInitialState: function() {
        var todo = this.props.todo || {};
        return {show:true, todo:todo};
    },
    showCreateTodo: function() {
        this.setState({show:true});
        console.log("Create todo must be shown");
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var title = this.refs.title.getValue().trim();
        var url = this.refs.url.getValue().trim();
        var content = this.refs.content.getValue().trim();
        if (!title || !url || !content) {
            React.render(
                <TodoError/>,
                document.getElementById('content')
            );
            return;
        }
        this.props.onTodoSubmit({title: title, content: content, url:url});
        this.setState({show:false, title:'', url:'', content:''});
        return;
    },
    render: function() {
        var divStyle = {
            display: this.state.show ? '' : 'none'
        };
        return (
            <div>
                <ReactBootstrap.Button type="button" bsStyle="primary" onClick={this.showCreateTodo}>Create todo</ReactBootstrap.Button>
                <div style={divStyle}>
                    <h1>Create Todo</h1>
                    <form role="form" onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <ReactBootstrap.Input type="text" label="Title" class="form-control" ref="title" value={this.state.todo.title}/>
                        </div>
                        <div class="form-group">
                            <ReactBootstrap.Input type="textarea" label="Content" class="form-control" rows="6" ref="content" value={this.state.todo.content}/>
                        </div>
                        <div class="form-group">
                            <ReactBootstrap.Input type="text" label="Url" class="form-control" ref="url" value={this.state.todo.url}/>
                        </div>
                        <div class="form-group">
                            <ReactBootstrap.Input type="select" label="List" class="form-control" ref="todoList">
                                <option value="">Choose list</option>
                                <option value="{{todoList.id}}"></option>
                            </ReactBootstrap.Input>
                        </div>
                        <div class="form-group">
                            <ReactBootstrap.Input type="select" label="Tags" class="form-control" ref="tags">
                                <option value="">Choose tag</option>
                                <option value="{{todoList.id}}"></option>
                            </ReactBootstrap.Input>
                        </div>
                        <ReactBootstrap.Button type="submit" bsStyle="primary">Create</ReactBootstrap.Button>
                    </form>
                </div>
            </div>
        );
    }
});

var TodoError = React.createClass({
    render: function() {
        return (
            <p>
                ERROR
            </p>
        )
    }
});

