module LifeNotesAPI.Data.User

let registerUser (user: string) (password: string) =
    task {
        return "User Registered"
    }

let userLogin (user: string) (password: string) =
    task {
        return "User Logged In"
    }
