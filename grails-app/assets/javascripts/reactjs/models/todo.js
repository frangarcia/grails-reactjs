app.models.Todo = Backbone.Model.extend({
    urlRoot: '/api/todo',
    defaults: {
        title: '',
        content: '',
        url: '',
        tags: [],
        todoList: []
    }
});
