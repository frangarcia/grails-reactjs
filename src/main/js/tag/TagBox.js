import React from 'react';
import ListTag from './ListTag'

var TagBox = React.createClass({
    getInitialState: function() {
        console.log("getInitialState for TagBox");
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

export default TagBox;
