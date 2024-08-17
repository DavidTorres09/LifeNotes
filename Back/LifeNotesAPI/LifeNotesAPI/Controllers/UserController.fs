module LifeNotesAPI.Controllers.UserController
open Microsoft.AspNetCore.Http
open Giraffe
open Saturn
open Microsoft.FSharp.Control
open LifeNotesAPI.Types.UserTypes
open LifeNotesAPI.Data.User

let login =
    fun _ (ctx: HttpContext) ->
        task {
            let result = "login"
            return! Controller.json ctx result
        }
        
let register =
    fun _ (ctx: HttpContext) ->
        task {
             let! payload = ctx.BindJsonAsync<User>()
             let! result =  registerUser payload |> Async.AwaitTask
             match result with
             | "User Registered" ->
                    ctx.SetStatusCode 200
                    return! Controller.json ctx result
             | _ ->
                    ctx.SetStatusCode 400
                    return! Controller.json ctx result
        }