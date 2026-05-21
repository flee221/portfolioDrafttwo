import express from "express";
import dotenv from "dotenv";
import { generateAscii } from "./asciiConvert.js";
import path from "path";
import cors from "cors";

dotenv.config();
const app = express();
const port = 3000;
const githubKey = process.env.GITHUB_KEY;
app.use(cors());

app.listen(port, () => {
  console.log("server is running");
});

app.get("/ascii", async (req, res) => {
  try {
    const { url, width } = req.query;
    //place parameters into variables
    const ascii = await generateAscii(url, { width: Number(width) });
    //url is received from front end
    res.type("text/plain");
    //convert result to text format
    res.send(ascii);
    //return result to front end
  } catch (err) {
    res.status(500).send("Error w ASCII");
  }
});

// app.get("/github", async (req, res) => {
//   //Uses express to define an endpoint on the server
//   try {
//     const { username } = req.query;
//     //places parameter into variable (received from front end)
//     const response = await fetch(`https://api.github.com/users/${username}`, {
//       headers: {
//         Authorization: `Bearer ${githubKey}`,
//         //send across API key alongside request
//         Accept: "application/vnd.github+json",
//         //result format must be json
//       },
//       //backend acts as client for http request to github API
//     });
//     const data = await response.json();
//     //converts into readable forman

//     res.json({ data });
//     //returns to frontend
//   } catch (err) {
//     console.log(err);
//     //try catch block to catch errors and log in console
//   }
// });

app.use(express.static(path.join(process.cwd(), "../client")));
app.use(express.static(path.join(process.cwd(), "../client/public")));
