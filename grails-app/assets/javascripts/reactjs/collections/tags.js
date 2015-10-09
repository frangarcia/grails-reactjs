app.collections.Tags = Backbone.Collection.extend({
    url: '/api/tag',
    model:app.models.Tag
});
