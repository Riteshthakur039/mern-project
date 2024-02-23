const mong = require("mongoose")

const username = "thakur039";
const password = "Ritesh@039"; // Your actual password
const cluster = "cluster0";
const dbname = "mern_admin";

const URI = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(password)}@${cluster}.mlkqsda.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// const URI = process.env.MONGO_URI;

const connectDb = async () => {
    try{
        await mong.connect(URI);
        console.log("connection successfull by eng.")

    } catch (error) {
        console.error("database connection failed ");
        process.exit(0);
    }
};

module.exports = connectDb;



