import React from 'react';

var TableHeaderCell = React.createClass({
    render: function() {
        return (
            <th>{this.props.children}</th>
        );
    }
});

export default TableHeaderCell;
