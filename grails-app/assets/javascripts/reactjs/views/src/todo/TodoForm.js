var TodoForm = React.createClass({
    getInitialState: function() {
        var todo = this.props.todo || {};
        return {show:false, todo:todo};
    },
    componentDidMount: function(prevProps, prevState) {
        this.props.tags.fetch();
        this.props.todoLists.fetch();
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
        var tags = this.refs.tags.getValue();
        var todoList = this.refs.todoList.getValue();
        if (!title || !url || !content) {
            React.render(
                <TodoError/>,
                document.getElementById('modal')
            );
            return;
        }
        var newTodo = new app.models.Todo()
        var newTodoDetails = {
            title:title,
            content:content,
            url:url,
            tags:tags,
            todoList:todoList
        }
        var _this = this;
        newTodo.save(newTodoDetails, {
            success: function(todo) {
                _this.setState({show:false});
                _this.props.onTodoSubmit();
            },
            error: function() {
                React.render(
                    <TodoError errorMessage="This is an error"/>,
                    document.getElementById('modal')
                );
                return;
            }
        });
        this.setState({show:false, todo:null});
        return;
    },
    render: function() {
        var divStyle = {
            display: this.state.show ? '' : 'none'
        };
        var tags = this.props.tags.map(function(tag) {
            return (
                <option key={tag.get("id")} value={tag.get("id")}>{tag.get("name")}</option>
            );
        });
        var todoLists = this.props.todoLists.map(function(todoList) {
            return (
                <option key={todoList.get("id")} value={todoList.get("id")}>{todoList.get("name")}</option>
            );
        });
        return (
            <div>
                <ReactBootstrap.Button type="button" bsStyle="primary" onClick={this.showCreateTodo}>Create todo</ReactBootstrap.Button>
                <div style={divStyle}>
                    <h1>Create Todo</h1>
                    <form role="form" onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <ReactBootstrap.Input type="text" label="Title" class="form-control" ref="title"/>
                        </div>
                        <div class="form-group">
                            <ReactBootstrap.Input type="textarea" label="Content" class="form-control" rows="6" ref="content"/>
                        </div>
                        <div class="form-group">
                            <ReactBootstrap.Input type="text" label="Url" class="form-control" ref="url"/>
                        </div>
                        <div class="form-group">
                            <ReactBootstrap.Input type="select" label="List" class="form-control" ref="todoList">
                                <option value="">Choose list</option>
                                {todoLists}
                            </ReactBootstrap.Input>
                        </div>
                        <div class="form-group">
                            <ReactBootstrap.Input type="select" label="Tags" class="form-control" ref="tags" multiple>
                                {tags}
                            </ReactBootstrap.Input>
                        </div>
                        <ReactBootstrap.Button type="submit" bsStyle="primary">Create</ReactBootstrap.Button>
                    </form>
                </div>
            </div>
        );
    }
});