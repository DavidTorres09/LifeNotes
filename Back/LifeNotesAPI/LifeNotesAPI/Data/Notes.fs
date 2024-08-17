module LifeNotesAPI.Data.Notes
open System
open LifeNotesAPI.Data.MongoDB
open LifeNotesAPI.Types.NotesTypes
open MongoDB.Driver
open MongoDB.Bson

let getNotes (user: string) =
    task {
       let collection = database.GetCollection<Note>("Notes")
       let filter = Builders<Note>.Filter.Eq("user", user)
       let! result = collection.Find(filter).ToListAsync() |> Async.AwaitTask
       let notes = result |> List.ofSeq
       
       if notes.Length = 0 then
           return []
       else
           return notes
    } |> Async.AwaitTask
    
let getNotesLastMonth (user: string) =
    task {
        return "Notes Retrieved"
    }
    
let addNote (payload: Note) =
    task {
        let collection = database.GetCollection<Note>("Notes")
        let newNote =
            {
                id = ObjectId.GenerateNewId().ToString()
                user = payload.user
                title = payload.title
                date = payload.date
                category = payload.category
                mood = payload.mood
                content = payload.content
            }
        do! collection.InsertOneAsync(newNote) |> Async.AwaitTask |> Async.Ignore
        return "Note Added"
    } |> Async.AwaitTask

let deleteNote (user: string) (note: string) =
    task {
        return "Note Deleted"
    }