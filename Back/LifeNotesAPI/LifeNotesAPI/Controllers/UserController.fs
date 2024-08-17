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
            let! payload = ctx.BindJsonAsync<LoginRequest>() |> Async.AwaitTask
            let! result = userLogin payload
            match result with
            | "User Logged In" ->
                ctx.SetStatusCode 200
                return! Controller.json ctx result
            | _ ->
                ctx.SetStatusCode 400
                return! Controller.json ctx result
        }
        
let register =
    fun _ (ctx: HttpContext) ->
        task {
             let! payload = ctx.BindJsonAsync<User>() |> Async.AwaitTask
             let! result =  registerUser payload
             match result with
             | "User Registered" ->
                    ctx.SetStatusCode 200
                    return! Controller.json ctx result
             | _ ->
                    ctx.SetStatusCode 400
                    return! Controller.json ctx result
        }