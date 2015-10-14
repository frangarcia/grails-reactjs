var TableBody = React.createClass({
    render: function() {
        return (
            <tbody>
                {this.props.children}
            </tbody>
        )
    }
});