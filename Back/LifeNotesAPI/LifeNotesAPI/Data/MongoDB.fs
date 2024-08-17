module LifeNotesAPI.Data.MongoDB
open MongoDB.Driver

let connectionString = "mongodb+srv://lifeNotes:Test123!@lifenotes.hivlw.mongodb.net/"
let client = new MongoClient(connectionString)
let database = client.GetDatabase("LifeNotes")

