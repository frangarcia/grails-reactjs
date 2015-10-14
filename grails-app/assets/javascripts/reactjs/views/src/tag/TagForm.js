var TagForm = React.createClass({
    getInitialState: function() {
        var tag = this.props.tag || {};
        return {show:false, tag:tag};
    },
    componentDidMount: function(prevProps, prevState) {
    },
    showCreateTag: function() {
        this.setState({show:true});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var name = this.refs.name.getValue().trim();
        if (!name) {
            React.render(
                <TodoError/>,
                document.getElementById('modal')
            );
            return;
        }
        var newTag = new app.models.Tag()
        var newTagDetails = {
            name:name
        }
        var _this = this;
        newTag.save(newTagDetails, {
            success: function(tag) {
                _this.setState({show:false});
                _this.props.onTagSubmit();
            },
            error: function() {
                React.render(
                    <TodoError errorMessage="This is an error"/>,
                    document.getElementById('modal')
                );
                return;
            }
        });
        this.setState({show:false, tag:null});
        return;
    },
    render: function() {
        var divStyle = {
            display: this.state.show ? '' : 'none'
        };
        return (
            <div>
                <ReactBootstrap.Button type="button" bsStyle="primary" onClick={this.showCreateTag}>Create tag</ReactBootstrap.Button>
                <div style={divStyle}>
                    <h1>Create Tag</h1>
                    <form role="form" onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <ReactBootstrap.Input type="text" label="Name" class="form-control" ref="name"/>
                        </div>
                        <ReactBootstrap.Button type="submit" bsStyle="primary">Create</ReactBootstrap.Button>
                    </form>
                </div>
            </div>
        );
    }
});