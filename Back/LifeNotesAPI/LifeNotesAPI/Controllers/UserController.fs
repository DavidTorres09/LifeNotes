module LifeNotesAPI.Controllers.UserController
open Microsoft.AspNetCore.Http
open Giraffe
open LifeNotesAPI.Data.User

let login =
    fun (next: HttpFunc) (ctx: HttpContext) ->
        task {
            return! next ctx  
        }