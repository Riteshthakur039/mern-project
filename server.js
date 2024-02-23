require("dotenv").config();
const express = require("express")
const cors = require('cors');
const connectDb = require("./utils/db")
const authRouter = require("./router/auth-router");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-router")
const serviceRoute = require("./router/service-router");
const adminRoute = require('./router/admin-router');

const BASE_URL = process.env.BASE_URL

const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
    method: "GET, POST, DELETE, PUT, PATCH",
    Credentials: true,
}
app.use(cors(corsOptions));

app.use(express.json());


app.use("/api/auth", authRouter);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

//lets define admin

app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

const PORT = process.env.PORT || 4000;

connectDb().then(() => {

    app.listen(PORT, () => {
    console.log(`server is running : ${PORT}`)
});
});