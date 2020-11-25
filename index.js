import dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
const app=express();
import pkg from 'mongoose';
const { connect, connection } = pkg;
import { WebhookClient,Suggestion } from 'dialogflow-fulfillment';

/*connect(process.env.DATABASE_URL,{useUnifiedTopology: true,useNewUrlParser:true,})
const db=connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.error('Connected to database'))
app.use(express.json())
import router from "./routes/hook.js"
app.use("/hook",router)*/


app.get("/",(req,res)=>{
    res.send("Hello World!")
});
app.post("/",json(),(req,res)=>{
    const agent=new WebhookClient({
    request:req,
    response:res
});

function testFunction(agent){
    agent.add("This response is sent from webhook to test it");
}
function richMessageButtonHandler(agent) {
  agent.add("Select one");
  agent.add(new Suggestion("Quick Reply"));
  agent.add(new Suggestion("Suggestion"));
}
function customPayload(agent){
    var customData={
        "richContent": [
            [
              {
                "type": "accordion",
                "title": "Accordion title",
                "subtitle": "Accordion subtitle",
                "image": {
                  "src": {
                    "rawUrl": "https://example.com/images/logo.png"
                  }
                },
                "text": "Accordion text"
              }
            ]
          ]
    }
}

var intentMap=new Map();
intentMap.set("test",testFunction)
intentMap.set("custom payload",customPayload)
intentMap.set('richmessage', richMessageButtonHandler)
agent.handleRequest(intentMap);
})
app.listen(5000,()=>console.log("running on port 5000"));