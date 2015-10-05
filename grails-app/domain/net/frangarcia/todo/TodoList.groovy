package net.frangarcia.todo

class TodoList {

    String name
    Date dateCreated
    Date lastUpdated

    static hasMany = [todos:Todo]

    static constraints = {
        name(blank:false, unique: true)
    }
}