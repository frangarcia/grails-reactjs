package net.frangarcia.todo

import grails.rest.RestfulController

class TodoApiController extends RestfulController {

    static responseFormats = ['json', 'xml']

    TodoApiController() {
        super(Todo)
    }
}