import React from 'react';

var TagForm = React.createClass({
    getInitialState: function() {
        return {show:false};
    },
    componentDidMount: function(prevProps, prevState) {
    },
    componentWillUnMount: function() {
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
        this.setState({show:false});
        return;
    },
    handleEditSubmit: function(e) {
        e.preventDefault();
        var name = this.refs.name.getValue().trim();
        if (!name) {
            React.render(
                <TodoError/>,
                document.getElementById('modal')
            );
            return;
        }
        var newTag = this.props.tag;
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
        this.setState({show:false});
        return;
    },
    onChange: function() {
        this.props.tag.set({name:this.refs.name.getValue()});
    },
    cancelForm: function() {
        this.props.cancelForm();
        this.setState({show:false});
    },
    render: function() {
        var input
        if (this.props.tag) {
            input = <ReactBootstrap.Input type="text" label="Name" className="form-control" ref="name" value={this.props.tag.get("name")} onChange={this.onChange}/>
        } else {
            input = <ReactBootstrap.Input type="text" label="Name" className="form-control" ref="name"/>
        }

        var divStyle = {
            display: this.state.show || this.props.tag ? '' : 'none'
        };

        return (
            <div>
                <ReactBootstrap.Button type="button" bsStyle="primary" onClick={this.showCreateTag}>Create tag</ReactBootstrap.Button>
                <div style={divStyle}>
                    <h1>{this.props.tag ? 'Edit' : 'Create'} Tag</h1>
                    <form role="form" onSubmit={this.props.tag ? this.handleEditSubmit : this.handleSubmit}>
                        <div className="form-group">
                            {input}
                        </div>
                        <ReactBootstrap.Button type="button" bsStyle="warning" onClick={this.cancelForm}>Cancel</ReactBootstrap.Button>&nbsp;
                        <ReactBootstrap.Button type="submit" bsStyle="primary">{this.props.tag ? 'Edit' : 'Create'}</ReactBootstrap.Button>
                    </form>
                </div>
            </div>
        );
    }
});
