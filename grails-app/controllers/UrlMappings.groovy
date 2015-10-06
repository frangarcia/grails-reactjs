class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/api/todo"(resources:"todoApi")
        "/api/tag"(resources:"tagApi")
        "/api/todoList"(resources:"todoListApi")
        "/"(view:"/index")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
