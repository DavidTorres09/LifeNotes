module LifeNotesAPI.Controllers.NotesController
open System
open LifeNotesAPI.Types.NotesTypes
open Microsoft.AspNetCore.Http
open Saturn
open Giraffe
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
            let! result = getNotesLastMonth user
            return! Controller.json ctx result
        }

let addNote =
    fun _ (ctx: HttpContext) ->
        task {
            let! payload = ctx.BindJsonAsync<Note>()
            let! result = addNote payload
            match result with
            | "Note Added" ->
                ctx.SetStatusCode 200
                return! Controller.json ctx result
            | _ ->
                ctx.SetStatusCode 400
                let failure = "Note not added"
                return! Controller.json ctx failure
        }
        
let deleteNote =
    fun _ (ctx: HttpContext) ->
        task {
            let result = "deleting note for user:"
            return! Controller.json ctx result
        }