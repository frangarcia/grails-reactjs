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
    handleDeleteTagClick: function(tag) {
        var _this = this;
        tag.destroy({
            success: function(model, response) {
                console.log("Tag "+tag+" deleted successfully");
            },
            error: function(model, response) {
                console.log("ERROR deleting tag "+tag);
                _this.props.collection.fetch();
            }
        });
    },
    handleCancelForm: function() {
        console.log("cancelling form");
        this.setState({tag:null});
    },
    render: function() {
        var _this = this;
        var tags = this.props.collection.models.map(function(tag) {
            var editTagHandler = function() {
                _this.handleEditTagClick(tag);
            }
            var deleteTagHandler = function() {
                _this.handleDeleteTagClick(tag);
            }
            var actionButtons = function() {
                return (
                    <span>
                        <ReactBootstrap.Button type="button" bsStyle="primary" onClick={editTagHandler}>Edit</ReactBootstrap.Button>&nbsp;
                        <ReactBootstrap.Button type="button" bsStyle="warning" onClick={deleteTagHandler}>Delete</ReactBootstrap.Button>
                    </span>    
                )
            }
            return (
                <TableRow key={tag.get("id")} data={[tag.get("id"), tag.get("name"), actionButtons()]}/>
            );
        });
        return (
            <div>
                <TagForm onTagSubmit={this.handleTagSubmit} tag={this.state.tag} cancelForm={this.handleCancelForm}/>
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