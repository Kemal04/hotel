//Express 
const express = require('express');
const app = express();
//port
const port = 3001;

//modules
const cors = require("cors");

//Db
const sequelize = require('./data/db');

app.use(express.json());
app.use(cors());



//Routes
const AuthRouter = require("./routes/auth.router")
const RoomRouter = require("./routes/room.router")
const BookingRouter = require("./routes/booking.router")
const ContactRouter = require("./routes/contact.router")
const RoomTypeRouter = require("./routes/roomType.router")

app.use("/api/auth/", AuthRouter);
app.use("/api/rooms/", RoomRouter);
app.use("/api/bookings/", BookingRouter);
app.use("/api/contact/", ContactRouter);
app.use("/api/roomtypes/", RoomTypeRouter);


//serv
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})