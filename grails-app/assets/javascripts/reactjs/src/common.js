var TableHeaderRow = React.createClass({
    render: function() {
        var cells = this.props.data.map(function(cell) {
            return (
                <TableHeaderCell>{cell}</TableHeaderCell>
            );
        });
        return (
            <thead>
                <tr>
                    {cells}
                </tr>
            </thead>
        );
    }
});

var TableHeaderCell = React.createClass({
    render: function() {
        return (
            <th>{this.props.children}</th>
        );
    }
});

var TableBody = React.createClass({
    render: function() {
        return (
            <tbody>
                {this.props.children}
            </tbody>
        )
    }
});

var TableRow = React.createClass({
    render: function() {
        var cells = this.props.data.map(function(cell) {
            return (
                <TableCell>{cell}</TableCell>
            );
        });
        return (
            <tr onClick={this.props.onClick}>
                {cells}
            </tr>
        );
    }
});


var TableCell = React.createClass({
    render: function() {
        return (
            <td>{this.props.children}</td>
        );
    }
});

