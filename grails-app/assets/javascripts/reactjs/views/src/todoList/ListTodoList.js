var ListTodoList = React.createClass({
    getInitialState: function() {
        return {editTodoList:false};
    },
    render: function() {
        var _this = this;
        var todoLists = this.props.data.map(function(todoList) {
            return (
                <TableRow data={[todoList.get("id"), todoList.get("name"), '']} key={todoList.get("id")}/>
            );
        });
        var divStyle = {
            display: this.state.editTodoList ? '' : 'none'
        };
        return (
            <div className="todoListList">
                <h1>List of todoList</h1>
                <ReactBootstrap.Table striped bordered condensed hover>
                    <TableHeaderRow data={["ID","Namesss","adios"]}/>
                    <TableBody>
                        {todoLists}
                    </TableBody>
                </ReactBootstrap.Table>
            </div>
        )
    }
});