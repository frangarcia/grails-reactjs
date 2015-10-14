var ListTag = React.createClass({
    getInitialState: function() {
        return {editTag:false};
    },
    render: function() {
        var _this = this;
        var tags = this.props.data.map(function(tag) {
            return (
                <TableRow key={tag.get("id")} data={[tag.get("id"), tag.get("name"), '']}/>
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