import grails.util.Environment
import net.frangarcia.todo.Tag
import net.frangarcia.todo.Todo
import net.frangarcia.todo.TodoList

class BootStrap {

    def init = { servletContext ->
        if (Environment.current==Environment.DEVELOPMENT) {
            def tagReactJs = new Tag (name: "reactjs").save ()
            def tagBackbone = new Tag (name: "backbone").save ()
            def tagJavascript = new Tag (name: "javascript").save ()

            def angularList = new TodoList (name: "Learn React JS").save ()
            def backboneList = new TodoList (name: "Learn Backbone JS").save ()

            def todo1 = new Todo (title: "Lesson 0 Tutorial ReactJS: Why react?", url: "https://facebook.github.io/react/docs/why-react.html").save ()
            def todo2 = new Todo (title: "Lesson 1 Tutorial ReactJS: Displaying data", url: "https://facebook.github.io/react/docs/displaying-data.html").save ()
            def todo3 = new Todo (title: "Lesson 2 Tutorial ReactJS: Interactivity and Dynamic UIs", url: "https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html").save ()

            def todo4 = new Todo (title: "Lesson 0 Tutorial Backbone: Bootstrapping", url: "http://docs.backbone.org/tutorial/step_00").save ()
            def todo5 = new Todo (title: "Lesson 1 Tutorial Backbone: Static Templates", url: "http://docs.backbone.org/tutorial/step_01").save ()
            def todo6 = new Todo (title: "Lesson 2 Tutorial Backbone: Backbone Templates", url: "http://docs.backbone.org/tutorial/step_02").save ()

            angularList.addToTodos (todo1)
            angularList.addToTodos (todo2)
            angularList.addToTodos (todo3)

            backboneList.addToTodos (todo4)
            backboneList.addToTodos (todo5)
            backboneList.addToTodos (todo6)

            todo1.addToTags (tagReactJs)
            todo2.addToTags (tagReactJs)
            todo3.addToTags (tagReactJs)
            todo1.addToTags (tagJavascript)
            todo2.addToTags (tagJavascript)
            todo3.addToTags (tagJavascript)

            todo4.addToTags (tagBackbone)
            todo5.addToTags (tagBackbone)
            todo6.addToTags (tagBackbone)
            todo4.addToTags (tagJavascript)
            todo5.addToTags (tagJavascript)
            todo6.addToTags (tagJavascript)
        }
    }
    def destroy = {
    }
}
