module LifeNotesAPI.Controllers.NotesController
open Microsoft.AspNetCore.Http
open Giraffe
open LifeNotesAPI.Data.Notes

let getNotes (user: string) =
    fun (next: HttpFunc) (ctx: HttpContext) ->
        task {
            return! next ctx  
        }