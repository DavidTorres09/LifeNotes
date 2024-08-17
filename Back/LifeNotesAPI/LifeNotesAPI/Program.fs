open Saturn
open Microsoft.AspNetCore.Cors.Infrastructure
open LifeNotesAPI.Controllers.UserController
open LifeNotesAPI.Controllers.NotesController

let apiRouter =
    router {
        forward "/api/lifenotes/user" (
            router {
                post "/login" login
                post "/register" register
            }
        )
        forward "/api/lifenotes/notes" (
            router {
                getf "/get/%s" getNotes
                getf "/getlastmonth/%s" getNotesLastMonth
                post "/addnote" addNote
                post "/deletenote" deleteNote
            }
        )
    }
    
let configure_cors (policy: CorsPolicyBuilder) =
    policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod() |> ignore

let app =
    application {
        use_router apiRouter
        use_cors "*" configure_cors
        use_static "static"
    }
    
run app