var TableHeaderRow = React.createClass({
    render: function() {
        var i = 1;
        var cells = this.props.data.map(function(cell) {
            return (
                <TableHeaderCell key={i++}>{cell}</TableHeaderCell>
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