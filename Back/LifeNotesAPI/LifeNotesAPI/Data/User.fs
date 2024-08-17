module LifeNotesAPI.Data.User
open LifeNotesAPI.Data.MongoDB
open LifeNotesAPI.Types.UserTypes
open MongoDB.Bson
open MongoDB.Driver
open System

let registerUser (payload: User) =
    task {
        let collection = database.GetCollection<User>("Users")
        let filter = Builders<User>.Filter.Eq("user", payload.user)
        let! filteredResult = collection.Find(filter).ToListAsync() |> Async.AwaitTask
        
        if filteredResult.Count > 0 then
            return "User already exists"
        else
            let newUser =
                {
                    id = ObjectId.GenerateNewId().ToString()
                    user = payload.user
                    name = payload.name 
                    email = payload.email
                    age = payload.age
                    password = payload.password 
                }
            try
                do! collection.InsertOneAsync(newUser) |> Async.AwaitTask |> Async.Ignore
                return "User Registered"
            with ex ->
                return $"An error occurred: {ex}"
    }

let userLogin (user: string) (password: string) =
    task {
        return "User Logged In"
    }
