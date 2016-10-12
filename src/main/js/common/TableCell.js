import React from 'react';

var TableCell = React.createClass({
    render: function() {
        return (
            <td>{this.props.children}</td>
        );
    }
});

export default TableCell;
