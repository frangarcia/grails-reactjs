import React from 'react';
import ListTag from './ListTag'

var TagBox = React.createClass({
    getInitialState: function() {
        return {tags:[]};
    },
    render: function() {
        return (
            <div>
                <ListTag collection={app.tags}/>
            </div>
        );
    }
});

export default ListTag;
