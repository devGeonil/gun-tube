import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";


const PORT = process.env.PORT || 4000;

<<<<<<< HEAD
const handleListening = () => console.log(`Listening port : ${PORT}`);

=======
const PORT = 4000;
const handleListening = () => console.log(`Listening port :  ${PORT}`);
>>>>>>> a05549f00cb45a51278b0d1af5f7b62f6b8a5e82
app.listen(PORT, handleListening);
