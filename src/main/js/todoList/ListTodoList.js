import React from 'react';
import TodoListForm from './TodoListForm';
import TableHeaderRow from '../common/TableHeaderRow';
import TableBody from '../common/TableBody';
import TableRow from '../common/TableRow';
import * as ReactBootstrap from 'react-bootstrap';

var ListTodoList = React.createClass({
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
    handleTodoListSubmit: function(todoList) {
        this.setState({refresh:true});
        this.props.collection.fetch();
    },
    handleEditTodoListClick: function(todoList) {
        this.setState({todoList:todoList});
    },
    handleDeleteTodoListClick: function(todoList) {
        var _this = this;
        todoList.destroy({
            success: function(model, response) {
                console.log("TodoList "+todoList+" deleted successfully");
            },
            error: function(model, response) {
                console.log("ERROR deleting todoList "+todoList);
                _this.props.collection.fetch();
            }
        });
    },
    handleCancelForm: function() {
        console.log("cancelling form");
        this.setState({todoList:null});
    },
    render: function() {
        var _this = this;
        var todoLists = this.props.collection.models.map(function(todoList) {
            var editTodoListHandler = function() {
                _this.handleEditTodoListClick(todoList);
            }
            var deleteTodoListHandler = function() {
                _this.handleDeleteTodoListClick(todoList);
            }
            var actionButtons = function() {
                return (
                    <span>
                        <ReactBootstrap.Button type="button" bsStyle="primary" onClick={editTodoListHandler}>Edit</ReactBootstrap.Button>&nbsp;
                        <ReactBootstrap.Button type="button" bsStyle="warning" onClick={deleteTodoListHandler}>Delete</ReactBootstrap.Button>
                    </span>
                )
            }
            return (
                <TableRow key={todoList.get("id")} data={[todoList.get("id"), todoList.get("name"), actionButtons()]}/>
            );
        });
        return (
            <div className="todoListList">
                <TodoListForm onTodoListSubmit={this.handleTodoListSubmit}/>
                <div className="todoListList">
                    <h1>List of todo lists</h1>
                    <ReactBootstrap.Table striped bordered condensed hover>
                        <TableHeaderRow data={["ID","Name",""]}/>
                        <TableBody>
                            {todoLists}
                        </TableBody>
                    </ReactBootstrap.Table>
                </div>
            </div>
        )
    }
});

export default ListTodoList;
