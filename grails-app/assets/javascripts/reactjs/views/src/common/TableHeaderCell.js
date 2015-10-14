var TableHeaderCell = React.createClass({
    render: function() {
        return (
            <th>{this.props.children}</th>
        );
    }
});