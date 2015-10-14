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