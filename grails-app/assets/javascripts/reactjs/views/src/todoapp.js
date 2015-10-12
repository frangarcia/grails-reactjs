var TodoApp = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <div id="content"></div>
                <Footer/>
            </div>    
        )
    }
})

React.render(
    <TodoApp/>,
    document.getElementById('navigation')
);
