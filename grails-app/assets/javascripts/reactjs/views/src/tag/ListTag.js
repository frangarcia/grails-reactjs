var ListTag = React.createClass({
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
    handleTagSubmit: function(tag) {
        this.setState({refresh:true, tag:null});
        this.props.collection.fetch();
    },
    handleEditTagClick: function(tag) {
        this.setState({tag:tag});
    },
    render: function() {
        var _this = this;
        var tags = this.props.collection.models.map(function(tag) {
            var editTagHandler = function() {
                _this.handleEditTagClick(tag);
            }
            return (
                <TableRow key={tag.get("id")} data={[tag.get("id"), tag.get("name"), '']} onClick={editTagHandler}/>
            );
        });
        return (
            <div>
                <TagForm onTagSubmit={this.handleTagSubmit} tag={this.state.tag}/>
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