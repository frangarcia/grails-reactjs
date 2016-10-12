import React from 'react';

var TableBody = React.createClass({
    render: function() {
        return (
            <tbody>
                {this.props.children}
            </tbody>
        )
    }
});

export default TableBody;
