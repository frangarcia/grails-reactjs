var TodoListBox = React.createClass({
    mixins: [app.backboneMixin],
    getBackboneCollections: function () {
        return [this.props.collection];
    },
    getInitialState: function() {
        return {todoLists:[]};
    },
    componentDidMount: function(prevProps, prevState) {
        this.props.collection.fetch();
    },
    componentWillUnMount: function() {
        this.props.collection.forEach(function (model) {
            model.save();
        });
    },
    handleTodoListSubmit: function(todoList) {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: todoList,
            success: function(data) {
                this.loadTodoListsFromServer();
            }.bind(this),
            error: function(xhr, status, err) {
                this.loadTodoListsFromServer();
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        return (
            <div>
                <ListTodoList data={this.props.collection.models}/>
            </div>
        );
    }
});

var ListTodoList = React.createClass({
    getInitialState: function() {
        return {editTodoList:false};
    },
    render: function() {
        var _this = this;
        var todoLists = this.props.data.map(function(todoList) {
            return (
                <TableRow data={[todoList.get("id"), todoList.get("name"), '']}/>
            );
        });
        var divStyle = {
            display: this.state.editTodoList ? '' : 'none'
        };
        return (
            <div className="todoListList">
                <h1>List of todoLists</h1>
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


