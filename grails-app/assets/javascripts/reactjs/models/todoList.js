app.models.TodoList = Backbone.Model.extend({
    url: '/api/todoList',
    defaults: {
        name: ''
    }
});
