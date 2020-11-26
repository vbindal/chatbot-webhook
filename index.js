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
function StudentActivityTechSpardha(agent) {
  agent.add(new Card({
    title: 'Techspardha',
    imageUrl: 'https://miro.medium.com/max/3650/1*BxZvFaVtpqGHR6RkhoqgMQ.jpeg',
    text: `Techspardha is a national level annual techno-managerial students’ festival of National Institute of Technology, Kurukshetra. It started in 1995 as "Technospect" (later changed to Literati). The year 2013 marked the Golden Jubilee of NIT Kurukshetra, same year it was renamed as Techspardha. Etymologically, the word ‘Techspardha’ is composed of two words, ‘Tech’ in English is a contraction of technology and ‘Spardha’ in Hindi means competition.`,
    buttonText: 'Techspardha FB Page',
    buttonUrl: 'https://m.facebook.com/techspardha.nitkkr/'
    }))
agent.add(new LinkOutSuggestion({
    name: 'More about TechSpardha',
    url: 'https://nitkkr.ac.in/sub_courses.php?id=106&id3=82',
  }))
    agent.add(new Suggestion(""));
    agent.add(new Suggestion("Library"));
};
intentMap.set('StudentActivity-Techspardha', StudentActivityTechSpardha)


function StudentActivityConfluence(agent) {
  agent.add('Confluence, popularly known as conflu, is the annual cultural festival of the National Institute of Technology Kurukshetra. It is a four-day long event held towards the end of February every year. It draws a footfall of more than 15,000 students from more than 60 colleges from across the country. Started in 1991 by a bunch of enthusiastic NITians, now in its 21st edition, has snowballed to become the largest festival of its kind in North India.')

      agent.add(new Suggestion("TechSpardha"));
      agent.add(new Suggestion("Library"));
  };
  intentMap.set('StudentActivity-Confluence', StudentActivityConfluence)


function TechnicalSocities(agent) {
  agent.add(new List({
    title: 'Technical Socities',
    items: {
        title: 'EMR(Robotics)',
        title: 'TechnoByte',
        title: 'SAE(AutoMotive)',
        title: 'ElectroReck',
        title: 'MechSoc',
        title: 'MicroBus',
        title: 'InfraStructure',
      },
    },
  ))
  agent.add(new LinkOutSuggestion({
      name: 'Important Contacts',
      url: 'https://nitkkr.ac.in/sub_courses.php?id=210&id3=84',
    }))
      agent.add(new Suggestion("Techspardha"));
      agent.add(new Suggestion("Confluence"));
  };
intentMap.set('StudentActivity-TechnicalSocities', TechnicalSocities)




var intentMap=new Map();
intentMap.set("test",testFunction)
intentMap.set("custom payload",customPayload)
intentMap.set('richmessage', richMessageButtonHandler)
agent.handleRequest(intentMap);
})


app.listen(5000,()=>console.log("running on port 5000"));
