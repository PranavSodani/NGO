import mysql from 'mysql2'

const bookSchema = mongoose.Schema({
    First_name: String,
    Last_name: String,
    Moblie_number: Number,
    Email: String,
    ID_password: String
})
const Book = mongoose.model("Book",bookSchema)
export default Book