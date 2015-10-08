var TagBox = React.createClass({
    getInitialState: function() {
        return {tag:{}};
    },
    loadTagsFromServer: function() {
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
    handleTagSubmit: function(tag) {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: tag,
            success: function(data) {
                this.loadTagsFromServer();
            }.bind(this),
            error: function(xhr, status, err) {
                this.loadTagsFromServer();
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data:[], date:new Date()};
    },
    componentWillMount: function() {
        this.loadTagsFromServer();
    },
    render: function() {
        return (
            <div>
                <ListTag data={this.state.data}/>
            </div>
        );
    }
});

var ListTag = React.createClass({
    getInitialState: function() {
        return {editTag:false};
    },
    render: function() {
        var _this = this;
        var tags = this.props.data.map(function(tag) {
            return (
                <TableRow data={[tag.id, tag.name, '']}/>
            );
        });
        var divStyle = {
            display: this.state.editTag ? '' : 'none'
        };
        return (
            <div className="tagList">
                <h1>List of tags</h1>
                <ReactBootstrap.Table striped bordered condensed hover>
                    <TableHeaderRow data={["ID","Name",""]}/>
                    <TableBody>
                        {tags}
                    </TableBody>
                </ReactBootstrap.Table>
            </div>
        )
    }
});

var TagError = React.createClass({
    render: function() {
        return (
            <p>
                ERROR
            </p>
        )
    }
});

