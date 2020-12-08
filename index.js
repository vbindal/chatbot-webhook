import dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
const app=express();
import pkg from 'mongoose';
const { connect, connection } = pkg;
import { WebhookClient,Suggestion,Image,Card} from 'dialogflow-fulfillment';
import {
  actionssdk,
  SimpleResponse,
  dialogflow,
  BasicCard,
  Button,
  BrowseCarousel,
  BrowseCarouselItem,
  Suggestions,
  LinkOutSuggestion,
  MediaObject,
  Table,
  List,
  Carousel,
} from 'actions-on-google';
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
function StudentActivityTechSpardha(agent) {
  agent.add(new Card({
    title: 'Techspardha',
    imageUrl: 'https://miro.medium.com/max/3650/1*BxZvFaVtpqGHR6RkhoqgMQ.jpeg',
    text: `Techspardha is a national level annual techno-managerial students’ festival of National Institute of Technology, Kurukshetra. It started in 1995 as "Technospect" (later changed to Literati). The year 2013 marked the Golden Jubilee of NIT Kurukshetra, same year it was renamed as Techspardha. Etymologically, the word ‘Techspardha’ is composed of two words, ‘Tech’ in English is a contraction of technology and ‘Spardha’ in Hindi means competition.`,
    buttonText: 'Techspardha FB Page',
    buttonUrl: 'https://m.facebook.com/techspardha.nitkkr/'
    }))
    agent.add(new Suggestion("Confluence"));
    agent.add(new Suggestion("Library"));
};


function Vision(agent) {
  agent.add(new Card({
    title: 'Vision',
    imageUrl: 'https://lh5.googleusercontent.com/dzqOUyGQFFwQLCJX-adVhlNpj4y0G23KxJUt9SfU2xJArHSnB--a0X1RehUSSp9po_jGbVDl6EzWwSzlzNLdz5kuIauY5n-driECrTcetI6maMve7UkEpGqYo1Eogyr3M2Ao_mwfdMu_UoeEtg',
    text: `To be a role-model in technical education and research, responsive to global challenges.`,
    buttonText: 'Institute website',
    buttonUrl: 'https://nitkkr.ac.in/'
    }))
    agent.add(new Suggestion("Mission"));
    agent.add(new Suggestion("Library"));
};



function Mission(agent) {
  agent.add(new Card({
    title: 'Mission',
    imageUrl: 'https://lh3.googleusercontent.com/hSuZxAMufKkXbjyEDfa6d6bzNVBiS_9CLz5SQK2M6AaT0oQ0j0Y0bHeojNCtMKmh0QLz9lFnITbAd9eEkEHFlHd-1-J9dPZ64erYxtd38vtY_ra0l3xclrhtV4o30_97iVhbn-JCPP1n90iNvw',
    text: `To impart quality technical education that develops innovative professionals and entrepreneurs
    To undertake research that generates cutting-edge technologies and futuristic knowledge, focusing on the socio-economic needs`,
    buttonText: 'Institute website',
    buttonUrl: 'https://nitkkr.ac.in/'
    }))
};


function Location(agent) {
  agent.add(new Card({
    title: 'Location',
    imageUrl: 'https://management.ind.in/img/w/NIT-KKR-Map.jpg',
    text: `Kurukshetra, steeped in history and mythology, is a place of great spiritual significance, where Lord Krishna, delivered the divine message of "Shrimad Bhagwad Gita".  The place from where knowledge spread far and wide was chosen as his capital by King Harshwardhana.  It is one of the premier centres of pilgrimage attracting devotees in a steady stream all-round the year. Kurukshetra is a railway junction on the Delhi-Karnal-Ambala section of the Northern Railway.  It is about 160 kms. from Delhi.  The Institute campus is about 10 kms. from Pipli, a well known road junction on the Sher Shah Suri Marg and about 5km from Kurukshetra Railway station.`,
    buttonText: 'Open in maps',
    buttonUrl: 'https://www.google.com/maps/place/National+Institute+of+Technology,+Kurukshetra/@29.947636,76.8132843,17z/data=!4m5!3m4!1s0x390e3f51801954b5:0x14d79f026b1ae4ec!8m2!3d29.947636!4d76.815473'
    }))
 
};

function Sports(agent) {
  agent.add(new Card({
    title:'Sports',
    imageUrl:'https://miro.medium.com/max/250/1*xlqVIqWm7ZVGnwzvLOSCOw.jpeg',
    text:` Extensive and well laid out fields for sports and games are available on the campus for the students. Badminton courts, Tennis courts with Chain Link Iron mess around the courts, Cricket Pitch, Volleyball courts with Light and with Chain Link Iron mess encloser and basketball and a stadium etc. facilities are available to the students. Trained sports personnel help the students to develop their interest in games and coach them to acceptable standards.   `,
    buttonText: 'Get to know more',
    buttonUrl: 'https://nitkkr.ac.in/sub_courses.php?id=260'
  }))
  agent.add('Here are the various sports teams of the institute')
  agent.add(new Suggestion("Basketball"))
  agent.add(new Suggestion("Athletics"))
  agent.add(new Suggestion("NCC"))
  agent.add(new Suggestion("Kabaddi"))
  agent.add(new Suggestion("Swimming"))


};
function Basketball(agent){
  agent.add("The current basketball team of college")
  agent.add(new Image("https://scontent.fdel11-1.fna.fbcdn.net/v/t1.0-9/82354862_111729993683713_2696612207684222976_o.jpg?_nc_cat=104&ccb=2&_nc_sid=6e5ad9&_nc_ohc=4Wu2fEdplykAX-lAuaS&_nc_ht=scontent.fdel11-1.fna&oh=e31379ea165bd1ca043cafc8440bd2bc&oe=5FE5A06D"));
}
function Athletics(agent){
  agent.add("The current Athletics team of college")
  agent.add(new Image("https://scontent.fdel11-1.fna.fbcdn.net/v/t1.0-9/56825575_1547422655392416_7956018335601131520_o.jpg?_nc_cat=104&ccb=2&_nc_sid=6e5ad9&_nc_ohc=PgNlZ9GhgwoAX_PfxdO&_nc_ht=scontent.fdel11-1.fna&oh=1538b321277fdb94c5ca5eff08ec0972&oe=5FE5224B"));
}
function NCC(agent){
  agent.add("The NCC is a vibrant youth organization, which has made a commendable contribution in producing responsible and patriotic citizens. From a small beginning, today it has grown to the largest youth organization. NCC motivates and trains upcoming generations to render their meaningful contribution towards national integration and development.")
  agent.add(new Image("https://scontent.fdel11-1.fna.fbcdn.net/v/t31.0-8/15874848_1709476792630193_7672154597406551394_o.jpg?_nc_cat=101&ccb=2&_nc_sid=6e5ad9&_nc_ohc=xs_Z-_qcXhQAX8Zs8ef&_nc_ht=scontent.fdel11-1.fna&oh=3820cfe2a5cef1855a9e6358cd89d5e3&oe=5FE7978A"));
}

function Kabaddi(agent){
  agent.add("The current Kabaddi team of college")
  agent.add(new Image("https://scontent.fdel11-2.fna.fbcdn.net/v/t1.0-9/14980792_1140151069409159_825214193375338726_n.jpg?_nc_cat=110&ccb=2&_nc_sid=6e5ad9&_nc_ohc=K12lBktFa_oAX9Dc8OX&_nc_ht=scontent.fdel11-2.fna&oh=1dfb7181805c056e9fce00feb51529b8&oe=5FE70DE0"));
}
function Swimming(agent){
  agent.add("NIT Kurukshetra now has a Swimming Pool of International Standards, 50 Mts. x 25 Mts. Size, with 90 Cm. depth at shallow end and 5 Mts. depth at deeper end. Apart from this it is equipped with Three Spring Boards for Diving   at 3 Mts., 5 Mts. and 7 Mts height simultaneously. It is provided with Anti-wave Lane markers to conduct competitions with Portable Take off Boards with Fiber of Olympic type where 60 to 70 people can be accommodated at a time.")
  agent.add(new Image("https://scontent.fdel11-1.fna.fbcdn.net/v/t31.0-8/18278288_249164035490078_8835159851361508074_o.jpg?_nc_cat=109&ccb=2&_nc_sid=6e5ad9&_nc_ohc=WqvUJgoUIb4AX8zUvF5&_nc_ht=scontent.fdel11-1.fna&oh=408f4f8e1c4c89c9af1391f9300b7581&oe=5FE78507"));
}

function Alumni(agent) {
  agent.add(new Card({
    title:'Alumni',
    imageUrl:"https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_caad4adcf0749292a73c1ab52e8025d8_thumb.jpeg",
text:`Checkout the website for the alumnis of the institute`  ,
buttonText:"Alumni Association website",
buttonUrl: 'https://www.nitkkraa.org/',
  }))
  agent.add(new Suggestion("Techspardha"));
  agent.add(new Suggestion("Confluence"));

};


//Confluence, popularly known as conflu, is the annual cultural festival of the National Institute of Technology Kurukshetra. It is a four-day long event held towards the end of February every year. It draws a footfall of more than 15,000 students from more than 60 colleges from across the country. Started in 1991 by a bunch of enthusiastic NITians, now in its 21st edition, has snowballed to become the largest festival of its kind in North India.
function StudentActivityConfluence(agent) {
  agent.add(new Card({
    title: 'Confluence',
    imageUrl: 'https://scontent.fdel11-2.fna.fbcdn.net/v/t1.0-9/70580960_2701193783226117_3431810188129075200_o.jpg?_nc_cat=108&ccb=2&_nc_sid=6e5ad9&_nc_ohc=AwMGsRNXL90AX_8Vjw2&_nc_ht=scontent.fdel11-2.fna&oh=49f9a9a6b37170e8dbcebff3e44f6968&oe=5FE4FF5D',
    text: `Confluence, popularly known as conflu, is the annual cultural festival of the National Institute of Technology Kurukshetra. It is a four-day long event held towards the end of February every year. It draws a footfall of more than 15,000 students from more than 60 colleges from across the country. Started in 1991 by a bunch of enthusiastic NITians, now in its 21st edition, has snowballed to become the largest festival of its kind in North India.`,
    buttonText: 'Confluence FB Page',
    buttonUrl: 'https://www.facebook.com/Conflu/'
    }))

      agent.add(new Suggestion("TechSpardha"));
      agent.add(new Suggestion("Library"));
  };



  function aboutyourself(agent){
    agent.add("I am a ChatBot for the official website for National Institute of Technology, Kurukshetra. Here to help you know more about this institution! ")
    agent.add(new Suggestion("Programmes"));
    agent.add(new Suggestion("Upcoming Academic calender"));
    agent.add(new Suggestion("Director"));
    agent.add(new Suggestion("Location of institute"));
    agent.add(new Suggestion("Vision"));
    agent.add(new Suggestion("Mission"));
    

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



  
  }
  
  function postgrad(agent) {
    agent.add("There are three post graduation courses: MBA,MCA and M.Tech. Which one would you like to view? ");
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
intentMap.set('richmessage', richMessageButtonHandler)

intentMap.set('AboutYourself',aboutyourself)
intentMap.set('PostGradEligibility',postgrad)
intentMap.set('MBAdeptEligibility',MBAEligibility)

intentMap.set('StudentActivity-Techspardha', StudentActivityTechSpardha)
intentMap.set('StudentActivity-Confluence', StudentActivityConfluence)
intentMap.set("Vision",Vision)
intentMap.set("Mission",Mission)
intentMap.set("Location",Location)
intentMap.set("Alumni",Alumni)
intentMap.set('AboutYourself',aboutyourself)
intentMap.set('PostGradEligibility',postgrad)
intentMap.set('MBAdeptEligibility',MBAEligibility)
intentMap.set('sports',Sports)
intentMap.set('basketball',Basketball)
intentMap.set('athletics',Athletics)
intentMap.set('ncc',NCC)
intentMap.set('kabaddi',Kabaddi)
intentMap.set('swimming',Swimming)

agent.handleRequest(intentMap);
})


app.listen(5000,()=>console.log("running on port 5000"));