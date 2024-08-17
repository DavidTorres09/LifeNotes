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
        let today = DateTime.UtcNow
        let oneMonthAgo = today.AddMonths(-1)

        let collection = database.GetCollection<Note>("Notes")
        let filter = Builders<Note>.Filter.And([
            Builders<Note>.Filter.Eq("user", user)
            Builders<Note>.Filter.Gte("date", oneMonthAgo)
            Builders<Note>.Filter.Lte("date", today)
        ])
        let! result = collection.Find(filter).ToListAsync() |> Async.AwaitTask
        let notes = result |> List.ofSeq
        return notes
    } |> Async.AwaitTask
    
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

let deleteNote (idNote: string) =
    task {
        let collection = database.GetCollection<Note>("Notes")
        let filter = Builders<Note>.Filter.Eq("id", idNote)
        do! collection.DeleteOneAsync(filter) |> Async.AwaitTask |> Async.Ignore
        return "Note Deleted"
    } |> Async.AwaitTask