import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

var HomeBox = React.createClass({
    render: function() {
        return (
            <div>
                <ReactBootstrap.Panel>
                	Just another application using Grails 3, React JS and Backbone. Do not judge the application, I am just learning something new.
                </ReactBootstrap.Panel>
            </div>
        );
    }
});

export default HomeBox;
