import 'dotenv/config'
import express from "express";
import  cors from "cors";
import { Configuration, OpenAIApi } from "openai";
const app = express();
const { OPENAI_API_KEY } = process.env;


const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);


app.use(cors());
app.use(express.json())

app.post("/create", async (req, res) => {
    //console.log("req.body",req.body)
    const { prompt } = req.body;
    try {
        const response = await openai.createImage({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
          });
      res.send(response.data.data[0].url);
    } catch (err) {
      res.send(err.message);
    }
  });

app.listen(8080, () => {
  console.log("server started");
});