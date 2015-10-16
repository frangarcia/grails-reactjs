app.models.TodoList = Backbone.Model.extend({
    urlRoot: '/api/todoList',
    defaults: {
        name: ''
    }
});
