app.collections.Todos = Backbone.Collection.extend({
    url: '/api/todo',
    model:app.models.Todo
});

app.todos = new app.collections.Todos();
