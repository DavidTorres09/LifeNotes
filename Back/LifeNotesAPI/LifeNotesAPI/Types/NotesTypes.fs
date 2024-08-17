module LifeNotesAPI.Types.NotesTypes
open Microsoft.FSharp.Core
open System

type Note = {
    user: string
    title: string
    date: DateTime
    category: string
    mood: string
    content: string
}

