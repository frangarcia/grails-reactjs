import React from 'react';
import ReactDOM from 'react-dom';
import HomeBox from './HomeBox'
import TodoBox from '../todo/TodoBox'
import TagBox from '../tag/TagBox'
import TodoListBox from '../todoList/TodoListBox'

var Header = React.createClass({
    getInitialState: function() {
        return {current:'home'};
    },
    componentDidMount: function() {
        this.showHomeBox();
    },
	showHomeBox: function() {
        this.setState({current:'home'});
        ReactDOM.render(
            <HomeBox/>,
            document.getElementById('content')
        );
    },
	showTodoBox: function() {
        this.setState({current:'todo'});
		ReactDOM.render(
            <TodoBox/>,
            document.getElementById('content')
        );
    },
    showTagBox: function() {
        this.setState({current:'tag'});
		ReactDOM.render(
            <TagBox collection={app.tags}/>,
            document.getElementById('content')
        );
    },
    showTodoListBox: function() {
        this.setState({current:'todoList'});
		ReactDOM.render(
            <TodoListBox collection={app.todoLists}/>,
            document.getElementById('content')
        );
    },
	render: function() {
		return (
			<div>
		        <div className="navbar-header">
	                <span className="navbar-brand"><a onClick={this.showHomeBox}>Grails-ReactJS TODO App</a></span>
	            </div>
				<div className="navbar-collapse collapse">
	                <ul className="nav navbar-nav">
	                    <li className={ this.state.current=='todo' ? 'active' : '' }><a onClick={this.showTodoBox}>Todos</a></li>
	                    <li className={ this.state.current=='tag' ? 'active' : '' }><a onClick={this.showTagBox}>Tags</a></li>
	                    <li className={ this.state.current=='todoList' ? 'active' : '' }><a onClick={this.showTodoListBox}>Todo Lists</a></li>
	                </ul>
	            </div>
	        </div>
		)
	}
});

export default Header;
