var TodoListBox = React.createClass({
    getInitialState: function() {
        return {todoList:{}};
    },
    loadTodoListsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            data: {max:100, sort:'id', order:'desc'},
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
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
    getInitialState: function() {
        return {data:[], date:new Date()};
    },
    componentWillMount: function() {
        this.loadTodoListsFromServer();
    },
    render: function() {
        return (
            <div>
                <ListTodoList data={this.state.data}/>
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
                <TableRow data={[todoList.id, todoList.name, '']}/>
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


