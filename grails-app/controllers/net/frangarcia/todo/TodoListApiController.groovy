package net.frangarcia.todo

import grails.rest.RestfulController

class TodoListApiController extends RestfulController<TodoList> {

    static responseFormats = ['json', 'xml']

    TodoListApiController() {
        super(TodoList)
    }
}