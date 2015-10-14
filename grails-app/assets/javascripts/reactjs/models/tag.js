app.models.Tag = Backbone.Model.extend({
    url: '/api/tag',
    defaults: {
        name: ''
    }
});
