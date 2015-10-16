var ListTag = React.createClass({
    mixins: [app.backboneMixin],
    getBackboneCollections: function () {
        return [this.props.collection];
    },
    getInitialState: function() {
        return {editTag:false};
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
        console.log("handleEditTagClick for sure "+tag.get("id"));
        this.setState({tag:tag, editTag:true});
        console.log("Setting this.state.tag = "+this.state.tag);
    },
    render: function() {
        var _this = this;
        var tags = this.props.collection.models.map(function(tag) {
            var editTag = function() {
                _this.handleEditTagClick(tag);
            }
            return (
                <TableRow key={tag.get("id")} data={[tag.get("id"), tag.get("name"), '']} onClick={editTag}/>
            );
        });
        var divStyle = {
            display: this.state.editTag ? '' : 'none'
        };
        console.log("Rendering again with this.state.tag = "+this.state.tag);
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