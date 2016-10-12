import Header from './common/Header';
import Footer from './common/Footer';
import React from 'react';
import ReactDOM from 'react-dom';

var TodoApp = React.createClass({
	render: function() {
		return (
			<div>
				<Header/>
				<div id="content">Content</div>
				<Footer/>
			</div>
		)
	}
});

ReactDOM.render(
	<TodoApp/>,
	document.getElementById('navigation')
);
