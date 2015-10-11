package net.frangarcia.todo

class Todo {

    String title
    String content
    String url
    Date dateCreated = new Date()
    Date lastUpdated = new Date()

    static hasMany = [tags:Tag]
    static belongsTo = [todoList:TodoList]

    static constraints = {
        title(nullable:false, blank:false)
        content(nullable:true, blank:true)
        url(nullable:true, blank:true, url: true)
        todoList(nullable:true)
    }
}