var TagBox = React.createClass({
    mixins: [app.backboneMixin],
    getBackboneCollections: function () {
        return [this.props.collection];
    },
    getInitialState: function() {
        return {tags:[]};
    },
    componentDidMount: function(prevProps, prevState) {
        this.props.collection.fetch();
    },
    componentWillUnMount: function() {
        this.props.collection.forEach(function (model) {
            model.save();
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
    render: function() {
        return (
            <div>
                <ListTag data={this.props.collection.models}/>
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
                <TableRow data={[tag.get("id"), tag.get("name"), '']}/>
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

