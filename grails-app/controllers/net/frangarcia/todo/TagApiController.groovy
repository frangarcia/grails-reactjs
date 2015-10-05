package net.frangarcia.todo

import grails.rest.RestfulController

class TagApiController extends RestfulController<Tag> {

    static responseFormats = ['json', 'xml']

    TagApiController() {
        super(Tag)
    }
}