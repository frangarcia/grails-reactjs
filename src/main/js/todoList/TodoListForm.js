import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import TodoListError from './TodoListError';

var TodoListForm = React.createClass({
    getInitialState: function() {
        var todoList = this.props.todoList || {};
        return {show:false, todoList:todoList};
    },
    componentDidMount: function(prevProps, prevState) {
    },
    showCreateTodoList: function() {
        this.setState({show:true});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var name = this.refs.name.getValue().trim();
        if (!name) {
            React.render(
                <TodoError/>,
                document.getElementById('modal')
            );
            return;
        }
        var newTodoList = new app.models.TodoList()
        var newTodoListDetails = {
            name:name
        }
        var _this = this;
        newTodoList.save(newTodoListDetails, {
            success: function(todoList) {
                _this.setState({show:false});
                _this.props.onTodoListSubmit();
            },
            error: function() {
                React.render(
                    <TodoError errorMessage="This is an error"/>,
                    document.getElementById('modal')
                );
                return;
            }
        });
        this.setState({show:false, tag:null});
        return;
    },
    render: function() {
        var input
        if (this.props.todoList) {
            input = <ReactBootstrap.FormControl type="text" label="Name" className="form-control" ref="name" value={this.props.todoList.get("name")} onChange={this.onChange}/>
        } else {
            input = <ReactBootstrap.FormControl type="text" label="Name" className="form-control" ref="name"/>
        }
        var divStyle = {
            display: this.state.show ? '' : 'none'
        };
        return (
            <div>
                <ReactBootstrap.Button type="button" bsStyle="primary" onClick={this.showCreateTodoList}>Create todo list</ReactBootstrap.Button>
                <div style={divStyle}>
                    <h1>{this.props.tag ? 'Edit' : 'Create'} Todo List</h1>
                    <form role="form" onSubmit={this.props.todoList ? this.handleEditSubmit : this.handleSubmit}>
                        <div className="form-group">
                            {input}
                        </div>
                        <ReactBootstrap.Button type="button" bsStyle="warning" onClick={this.cancelForm}>Cancel</ReactBootstrap.Button>&nbsp;
                        <ReactBootstrap.Button type="submit" bsStyle="primary">{this.props.todoList ? 'Edit' : 'Create'}</ReactBootstrap.Button>
                    </form>
                </div>
            </div>
        );
    }
});

export default TodoListForm;
