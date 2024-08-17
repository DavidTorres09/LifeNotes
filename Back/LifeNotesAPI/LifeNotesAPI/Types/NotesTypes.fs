module LifeNotesAPI.Types.NotesTypes
open Microsoft.FSharp.Core
open MongoDB.Bson
open MongoDB.Bson.Serialization.Attributes
open System

type Note = {
    [<BsonRepresentation(BsonType.ObjectId)>]
    [<BsonId>]
    id: string
    user: string
    title: string
    date: DateTime
    category: string
    mood: string
    content: string
}

