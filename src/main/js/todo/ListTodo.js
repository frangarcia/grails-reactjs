import React from 'react';
import TodoForm from './TodoForm';
import TableHeaderRow from '../common/TableHeaderRow';
import TableBody from '../common/TableBody';
import * as ReactBootstrap from 'react-bootstrap';

var ListTodo = React.createClass({
    mixins: [app.backboneMixin],
    getBackboneCollections: function () {
        return [this.props.collection];
    },
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
        this.props.collection.fetch();
    },
    componentWillUnMount: function() {
        this.props.collection.forEach(function (model) {
            model.save();
        });
    },
    handleTodoSubmit: function(todo) {
        this.setState({refresh:true, todo:null});
        this.props.collection.fetch();
    },
    handleEditTodoClick: function(todo) {
        console.log("handleEditTodoClick"+todo);
        this.setState({todo:todo});
    },
    handleDeleteTodoClick: function(todo) {
        var _this = this;
        todo.destroy({
            success: function(model, response) {
                console.log("Todo "+todo+" deleted successfully");
            },
            error: function(model, response) {
                console.log("ERROR deleting todo "+todo);
                _this.props.collection.fetch();
            }
        });
    },
    handleCancelForm: function() {
        console.log("cancelling form");
        this.setState({todo:null});
    },
    render: function() {
        var _this = this;
        var todos = this.props.collection.models.map(function(todo) {
            var editTodoHandler = function() {
                _this.handleEditTodoClick(todo);
            }
            var deleteTodoHandler = function() {
                _this.handleDeleteTodoClick(todo);
            }
            var actionButtons = function() {
                return (
                    <span>
                        <ReactBootstrap.Button type="button" bsStyle="primary" onClick={editTodoHandler}>Edit</ReactBootstrap.Button>&nbsp;
                        <ReactBootstrap.Button type="button" bsStyle="warning" onClick={deleteTodoHandler}>Delete</ReactBootstrap.Button>
                    </span>
                )
            }
            return (
                <TableRow key={todo.get("id")} data={[todo.get("id"), todo.get("title"), todo.get("url"), todo.get("todoList").name, actionButtons()]}/>
            );
        });
        return (
            <div>
                <TodoForm onTodoSubmit={this.handleTodoSubmit} tags={app.tags} todoLists={app.todoLists} todo={this.state.todo} cancelForm={this.handleCancelForm}/>
                <div className="todoList">
                    <h1>List of todos</h1>
                    <ReactBootstrap.Table striped bordered condensed hover>
                        <TableHeaderRow data={["ID","Title","URL","List",""]}/>
                        <TableBody>
                            {todos}
                        </TableBody>
                    </ReactBootstrap.Table>
                </div>
            </div>
        )
    }
});

export default ListTodo;
