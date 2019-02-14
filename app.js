import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const handleListening= () => console.log(`Listening on : http://localhost:${PORT}`);
const handleHome = (req,  res)=> res.send("HELLO");
const handleProfile = (req, res) => res.send("profle!!@");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));


app.get("/", handleHome);
app.get("/profile", handleProfile);



export default app;