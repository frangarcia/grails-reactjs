package net.frangarcia.todo

class Tag {

    String name
    Date dateCreated
    Date lastUpdated

    static hasMany = [todos:Todo]
    static belongsTo = [Todo]

    static constraints = {
        name(blank:false, unique: true)
    }
}