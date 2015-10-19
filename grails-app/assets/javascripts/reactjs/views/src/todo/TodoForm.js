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
    handleEditSubmit: function(e) {
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
        var newTodo = this.props.todo;
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
        this.setState({show:false});
        return;
    },    
    onChange: function() {
        this.props.todo.set(
            {
                title:this.refs.title.getValue(),
                content:this.refs.content.getValue(),
                url:this.refs.url.getValue()
            }
        );
    },
    cancelForm: function() {
        this.props.cancelForm();
        this.setState({show:false});
    },
    render: function() {
        var _this = this;
        var tags = this.props.tags.map(function(tag) {
            if (_this.props.todo && _this.props.todo.get("tags") && tag.get("id")==_this.props.todo.get("tags").id) {
                return (
                    <option key={tag.get("id")} value={tag.get("id")}>{tag.get("name")}</option>
                );
            } else {
                return (
                    <option key={tag.get("id")} value={tag.get("id")}>{tag.get("name")}</option>
                );
            }
            
        });
        var todoLists = this.props.todoLists.map(function(todoList) {
            if (_this.props.todo && _this.props.todo.get("todoList") && todoList.get("id")==_this.props.todo.get("todoList").id) {
                return (
                    <option key={todoList.get("id")} value={todoList.get("id")} selected>{todoList.get("name")}</option>
                );
            } else {
                return (
                    <option key={todoList.get("id")} value={todoList.get("id")}>{todoList.get("name")}</option>
                );
            }
            
        });
        var inputTitle, inputContent, inputUrl, inputTodoList
        if (this.props.todo) {
            inputTitle = <ReactBootstrap.Input type="text" label="Title" className="form-control" ref="title" value={this.props.todo.get("title")} onChange={this.onChange}/>
            inputContent = <ReactBootstrap.Input type="textarea" label="Content" className="form-control" ref="content" value={this.props.todo.get("content")} onChange={this.onChange}/>
            inputUrl = <ReactBootstrap.Input type="text" label="Url" className="form-control" ref="url" value={this.props.todo.get("url")} onChange={this.onChange}/>
        } else {
            inputTitle = <ReactBootstrap.Input type="text" label="Title" className="form-control" ref="title"/>
            inputContent = <ReactBootstrap.Input type="textarea" label="Content" className="form-control" ref="content"/>
            inputUrl = <ReactBootstrap.Input type="text" label="Url" className="form-control" ref="url"/>
        }

        var divStyle = {
            display: this.state.show || this.props.todo ? '' : 'none'
        };
        return (
            <div>
                <ReactBootstrap.Button type="button" bsStyle="primary" onClick={this.showCreateTodo}>Create todo</ReactBootstrap.Button>
                <div style={divStyle}>
                    <h1>Create Todo</h1>
                    <form role="form" onSubmit={this.props.todo ? this.handleEditSubmit : this.handleSubmit}>
                        <div className="form-group">
                            {inputTitle}
                        </div>
                        <div className="form-group">
                            {inputContent}
                        </div>
                        <div className="form-group">
                            {inputUrl}
                        </div>
                        <div className="form-group">
                            <ReactBootstrap.Input type="select" label="List" className="form-control" ref="todoList">
                                <option value="">Choose list</option>
                                {todoLists}
                            </ReactBootstrap.Input>
                        </div>
                        <div className="form-group">
                            <ReactBootstrap.Input type="select" label="Tags" className="form-control" ref="tags" multiple>
                                {tags}
                            </ReactBootstrap.Input>
                        </div>
                        <ReactBootstrap.Button type="button" bsStyle="warning" onClick={this.cancelForm}>Cancel</ReactBootstrap.Button>&nbsp;
                        <ReactBootstrap.Button type="submit" bsStyle="primary">{this.props.todo ? 'Edit' : 'Create'}</ReactBootstrap.Button>
                    </form>
                </div>
            </div>
        );
    }
});