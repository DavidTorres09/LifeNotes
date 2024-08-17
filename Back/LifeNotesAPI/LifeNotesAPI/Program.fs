open Saturn
open Microsoft.AspNetCore.Cors.Infrastructure
open LifeNotesAPI.Controllers.UserController

let apiRouter =
    router {
    post "/api/lifenotes/login" login
    
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