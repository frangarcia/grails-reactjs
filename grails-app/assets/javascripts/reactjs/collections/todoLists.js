app.collections.TodoLists = Backbone.Collection.extend({
    url: '/api/todoList',
    model:app.models.TodoList
});

app.todoLists = new app.collections.TodoLists();
