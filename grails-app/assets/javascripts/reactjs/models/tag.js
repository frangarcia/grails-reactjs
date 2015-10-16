app.models.Tag = Backbone.Model.extend({
    urlRoot: '/api/tag',
    defaults: {
        name: ''
    }
});
