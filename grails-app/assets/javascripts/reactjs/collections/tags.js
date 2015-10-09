app.collections.Tags = Backbone.Collection.extend({
    url: '/api/tag',
    model:app.models.Tag
});

app.tags = new app.collections.Tags();
