module LifeNotesAPI.Controllers.UserController
open Microsoft.AspNetCore.Http
open Giraffe
open Saturn
open Microsoft.FSharp.Control
open Microsoft.FSharp.Core

let login =
    fun _ (ctx: HttpContext) ->
        task {
            let result = "login"
            return! Controller.json ctx  result
        }
        
let register =
    fun _ (ctx: HttpContext) ->
        task {
            let result = "register"
            return! Controller.json ctx  result
        }