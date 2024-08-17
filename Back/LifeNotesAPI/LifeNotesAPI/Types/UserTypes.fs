module LifeNotesAPI.Types.UserTypes

type LoginRequest = {
    user: string
    password: string
}

type RegisterRequest = {
    user: string
    name: string
    email: string
    age: int
    password: string
}

