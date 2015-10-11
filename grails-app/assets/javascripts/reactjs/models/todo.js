app.models.Todo = Backbone.Model.extend({
    url: '/api/todo',
    defaults: {
        title: '',
        content: '',
        url: '',
        tags: [],
        todoList: []
    }
});
