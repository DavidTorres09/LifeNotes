module LifeNotesAPI.Controllers.NotesController
open Microsoft.AspNetCore.Http
open Saturn
open Microsoft.FSharp.Control
open Microsoft.FSharp.Core
open LifeNotesAPI.Data.Notes


let getNotes (user: string) =
    fun _ (ctx: HttpContext) ->
        task {
            let! result = getNotes user
            return! Controller.json ctx result
        }

let getNotesLastMonth (user: string) =
    fun _ (ctx: HttpContext) ->
        task {
            let result = "geting notes for user: " + user + " from last month"
            return! Controller.json ctx result
        }

let addNote =
    fun _ (ctx: HttpContext) ->
        task {
            let result = "adding note for user"
            return! Controller.json ctx result
        }
        
let deleteNote =
    fun _ (ctx: HttpContext) ->
        task {
            let result = "deleting note for user:"
            return! Controller.json ctx result
        }