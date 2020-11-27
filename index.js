import dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
const app=express();
import pkg from 'mongoose';
const { connect, connection } = pkg;
import { WebhookClient,Suggestion,Image,Card } from 'dialogflow-fulfillment';

/*import {
  actionssdk,
  dialogflow,
  SimpleResponse,
  BasicCard,
  Button,
  Image,
  BrowseCarousel,
  BrowseCarouselItem,
  Suggestions,
  LinkOutSuggestion,
  MediaObject,
  Table,
  List,
  Carousel,
} from 'actions-on-google';
*/


/*import functions from 'firebase-functions';
const ap = dialogflow();
ap.intent('carousel-example', (conv) => {
  conv.ask(new SimpleResponse({
    speech: `Here's an example of a simple response. ` +
      `Which type of response would you like to see next?`,
    text: `Here's a simple response. ` +
      `Which response would you like to see next?`,
  }));
});*/
/*connect(process.env.DATABASE_URL,{useUnifiedTopology: true,useNewUrlParser:true,})
const db=connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.error('Connected to database'))
app.use(express.json())
import router from "./routes/hook.js"
app.use("/hook",router)*/

//const ap=actionssdk(); 


/*ap.intent('carousel-example', (conv)=> {
  conv.ask('Hi, how is it going?')
  conv.ask(`Here's a picture of a cat`)
  conv.ask(new Image({
    url: 'https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg',
    alt: 'A cat',
  }))
})
*/

app.get("/",(req,res)=>{
    res.send("Hello World!")
});
app.post("/",json(),(req,res)=>{
    const agent=new WebhookClient({
    request:req,
    response:res
});
agent.requestSource = agent.ACTIONS_ON_GOOGLE;


function testFunction(agent){
    agent.add("This response is sent from webhook to test it");
}
function richMessageButtonHandler(agent) {
  agent.add("Select one");
  agent.add(new Suggestion("Civil"));
  agent.add(new Suggestion("Library"));
 // agent.add(new Image("https://nitkkr.ac.in/images/gallery/Screenshot%20(118).png"));
  agent.add(new Card({
    title: 'output',
    imageUrl: 'https://nitkkr.ac.in/images/gallery/Screenshot%20(118).png',
    text: `This is a test card for deadbot`,
    buttonText: 'NIT Kkr website',
    buttonUrl: 'https://nitkkr.ac.in/'
    })
);
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

// agent.add(new ffment.Payload(agent.UNSPECIFIED,payloadData,{sendAsMessage:true,rawPayload:true}))

function aboutyourself(agent){
  agent.add("I am a ChatBot for the official website for National Institute of Technology, Kurukshetra. Here to help you know more about this institution! ")
}

function postgrad(agent) {
  agent.add("There are three post graduation courses ");
  agent.add(new Suggestion("MBA eligibility"));
  agent.add(new Suggestion("MCA eligibility"));
  agent.add(new Suggestion("M Tech eligibility"));

}
function MBAEligibility(agent) {
  agent.add("To get admission in MBA, CAT/MAT/CMAT/GMAT scores are must ");
  agent.add(new Suggestion("MBA eligibility"));
  agent.add(new Suggestion("MCA eligibility"));
  agent.add(new Suggestion("M Tech eligibility"));

}

var intentMap=new Map();
intentMap.set("test",testFunction)
intentMap.set("custom payload",customPayload)
intentMap.set('richmessage', richMessageButtonHandler)
intentMap.set('AboutYourself',aboutyourself)
intentMap.set('PostGradEligibility',postgrad)
intentMap.set('MBAdeptEligibility',MBAEligibility)
agent.handleRequest(intentMap);
})


app.listen(5000,()=>console.log("running on port 5000"));