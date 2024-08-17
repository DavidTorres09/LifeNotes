module LifeNotesAPI.Types.UserTypes


type User = {
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

