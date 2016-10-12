import TableCell from './TableCell'

var TableRow = React.createClass({
    render: function() {
        var i = 1;
        var cells = this.props.data.map(function(cell) {
            return (
                <TableCell key={i++}>{cell}</TableCell>
            );
        });
        return (
            <tr onClick={this.props.onClick}>
                {cells}
            </tr>
        );
    }
});

export default TableRow;
