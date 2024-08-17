module LifeNotesAPI.Data.Notes

let getNotes (user: string) =
    task {
        return "Notes Retrieved"
    }
    
let getNotesLastMonth (user: string) =
    task {
        return "Notes Retrieved"
    }
    
let addNote (user: string) (note: string) =
    task {
        return "Note Added"
    }

let deleteNote (user: string) (note: string) =
    task {
        return "Note Deleted"
    }