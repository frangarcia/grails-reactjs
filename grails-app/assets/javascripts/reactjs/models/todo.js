app.models.Todo = Backbone.Model.extend({
    urlRoot: '/api/todo',
    defaults: {
        title: '',
        content: '',
        url: '',
        tags: [],
        todoList: [],
        dateCreated: new Date(),
        lastUpdated: new Date()
    },
    validate: function(attrs, options) {
        if (attrs.title=='') {
            return "Title cannot be empty"
        }
    }
});
