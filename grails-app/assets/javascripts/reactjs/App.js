var app = (function() {

    var api = {
        views: {},
        models: {},
        collections: {},
        content: null,
        router: null,
        todos: null,
        tags: null,
        todoLists: null,
        init: function() {
            console.log("Initializing app");
            this.content = $("#content");
            return this;
        },
        changeContent: function(el) {
            this.content.empty().append(el);
            return this;
        },
        title: function(str) {
            $("h1").text(str);
            return this;
        }
    };
    var ViewsFactory = {};
    var Router = Backbone.Router.extend({});
    api.router = new Router();

    return api;

})();

app.init();
