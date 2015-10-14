var ListTodoList = React.createClass({
    mixins: [app.backboneMixin],
    getBackboneCollections: function () {
        return [this.props.collection];
    },
    getInitialState: function() {
        return {editTodoList:false};
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
    render: function() {
        var _this = this;
        var todoLists = this.props.collection.models.map(function(todoList) {
            return (
                <TableRow data={[todoList.get("id"), todoList.get("name"), '']} key={todoList.get("id")}/>
            );
        });
        var divStyle = {
            display: this.state.editTodoList ? '' : 'none'
        };
        return (
            <div className="todoListList">
                <TodoListForm onTodoListSubmit={this.handleTodoListSubmit}/>
                <h1>List of todoList</h1>
                <ReactBootstrap.Table striped bordered condensed hover>
                    <TableHeaderRow data={["ID","Name",""]}/>
                    <TableBody>
                        {todoLists}
                    </TableBody>
                </ReactBootstrap.Table>
            </div>
        )
    }
});