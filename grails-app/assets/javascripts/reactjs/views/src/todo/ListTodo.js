var ListTodo = React.createClass({
    mixins: [app.backboneMixin],
    getBackboneCollections: function () {
        return [this.props.collection];
    },
    getInitialState: function() {
        return {editTodo:false};
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
        this.setState({refresh:true});
        this.props.collection.fetch();
    },
    render: function() {
        var _this = this;
        var todos = this.props.collection.models.map(function(todo) {
            var editTodo = function() {
                _this.setState({editTodo:true, todo:todo});
                _this.props.onEditTodoClick();
            }
            return (
                <TableRow key={todo.get("id")} data={[todo.get("id"), todo.get("title"), todo.get("url"), todo.get("todoList").name, '']} onClick={editTodo}/>
            );
        }.bind(this));
        var divStyle = {
            display: this.state.editTodo ? '' : 'none'
        };
        return (
            <div>
                <TodoForm onTodoSubmit={this.handleTodoSubmit} tags={app.tags} todoLists={app.todoLists}/>
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