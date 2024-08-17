module LifeNotesAPI.Types.UserTypes
open MongoDB.Bson
open MongoDB.Bson.Serialization.Attributes

type User = {
    [<BsonRepresentation(BsonType.ObjectId)>]
    [<BsonId>]
    id: string
    user: string
    name: string
    email: string
    age: int
    password: string
}

type LoginRequest = {
    user: string
    password: string
}

