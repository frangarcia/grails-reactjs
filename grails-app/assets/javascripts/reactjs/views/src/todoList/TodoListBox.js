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