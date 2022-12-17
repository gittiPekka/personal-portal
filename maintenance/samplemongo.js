const mongoose = require('mongoose');

const db = "ppdb"

const url ="mongodb://127.0.0.1/" + db;
mongoose.connect(url);

console.log("Connected to database!")

const subjectSchema = new mongoose.Schema({
  name: String,
  links: [],
  index: Number
},{ collection : 'subjects' });

const Subject = mongoose.model('Subject', subjectSchema);
console.log("Model created!")

function Link(url) {
  this.url = url;
  this.name = new String();
  this.live = true;
  this.keywords = new Array();
  this.picture = new String();
}

let firstLink = new Link("https://areena.yle.fi/tv");
firstLink.name = "Areena";
firstLink.live = true;
firstLink.keywords = ["TV", "Yle", "Internet"]
firstLink.picture = "/home/pekka/pictures/areena.png"

let secondLink = new Link("https://almanakka.helsinki.fi/fi/julkaisut/kalenteri-vuodelle-2022.html");
secondLink.name = "Almanakka";
secondLink.live = true;
secondLink.keywords = ["Kalenteri", "2022", "Vuosi"]
secondLink.picture = "/home/pekka/pictures/almanakka.png"

let thirdLink = new Link("https://duckduckgo.com/");
thirdLink.name = "DukcDuckGo";
thirdLink.live = true;
thirdLink.keywords = ["Hakukone", "Tietosuoja", "Internet"]
thirdLink.picture = "/home/pekka/pictures/duckduckgo.png"

let fourthLink = new Link("https://www.google.com/");
fourthLink.name = "Google";
fourthLink.live = true;
fourthLink.keywords = ["Hakukone", "Haku", "Internet"]
fourthLink.picture = "/home/pekka/pictures/google.png"

let fifthLink = new Link("https://www.fonecta.fi/");
fifthLink.name = "Fonecta";
fifthLink.live = true;
fifthLink.keywords = ["Hakupalvelu", "Haku", "Internet"]
fifthLink.picture = "/home/pekka/pictures/fonecta.png"

let links = [];
links.push(firstLink);
links.push(secondLink);
links.push(thirdLink);
links.push(fourthLink);
links.push(fifthLink);

let document0 = new Subject({"name": "no_subject", "links": links, "index": 0});

firstLink = new Link("https://www.vr.fi/");
firstLink.name = "VR";
firstLink.live = true;
firstLink.keywords = ["Matkustaminen", "Loma", "Lappi"]
firstLink.picture = "/home/pekka/pictures/vr.png"

secondLink = new Link("https://www.iltapulu.fi/");
secondLink.name = "Iltapulu";
secondLink.live = true;
secondLink.keywords = ["TV", "Ohjelmat", "Viihde"]
secondLink.picture = "/home/pekka/pictures/iltapulu.png"

thirdLink = new Link("https://www.suomienglantisanakirja.fi/#/haitari");
thirdLink.name = "suomienglantisanakirja";
thirdLink.live = true;
thirdLink.keywords = ["sanakirja", "englanti", "käännös"]
thirdLink.picture = "/home/pekka/pictures/suomienglantisanakirja.png"

fourthLink = new Link("https://www.nysse.fi/");
fourthLink.name = "Nysse";
fourthLink.live = true;
fourthLink.keywords = ["Matkustaminen", "Tampere", "Liikenne"]
fourthLink.picture = "/home/pekka/pictures/nysse.png"

fifthLink = new Link("https://www.ilmatieteenlaitos.fi/saa/tampere");
fifthLink.name = "Sää";
fifthLink.live = true;
fifthLink.keywords = ["Sää", "Tampere", "Ennuste"]
fifthLink.picture = "/home/pekka/pictures/sää.png"

links = [];
links.push(firstLink);
links.push(secondLink);
links.push(thirdLink);
links.push(fourthLink);
links.push(fifthLink);

let document1 = new Subject({"name": "Tavallinen", "links": links, "index": 1});

firstLink = new Link("https://wisdomic.fi/millainen-on-hyva-salasana-ja-kuinka-usein-se-tulisi-vaihtaa/");
firstLink.name = "hyva-salasana";
firstLink.live = true;
firstLink.keywords = ["Tietoturva", "Tietotekniikka", "Turvallisuus"]
firstLink.picture = "/home/pekka/pictures/salasana.png"

secondLink = new Link("https://www.raspberrypi.com/documentation/computers/getting-started.html");
secondLink.name = "raspberrypi";
secondLink.live = true;
secondLink.keywords = ["Tietotekniikka", "Korttikone", "Lähiverkko"]
secondLink.picture = "/home/pekka/pictures/raspberrypi.png"

thirdLink = new Link("https://kerneltips.com/add-applications-to-cinnamon-menu-in-linux-mint-20");
thirdLink.name = "cinnamon-menu";
thirdLink.live = true;
thirdLink.keywords = ["Mint", "cinnamon", "linux"]
thirdLink.picture = "/home/pekka/pictures/cinnamon.png"

fourthLink = new Link("https://camel.apache.org/manual/faq/what-is-camel.html");
fourthLink.name = "Camel";
fourthLink.live = true;
fourthLink.keywords = ["Data", "Integraatiot", "Tietojärjestelmät"]
fourthLink.picture = "/home/pekka/pictures/camel.png"

fifthLink = new Link("https://www.w3schools.com/jsref/jsref_reference.asp");
fifthLink.name = "jsref";
fifthLink.live = true;
fifthLink.keywords = ["JavaScript", "scripting", "reference"]
fifthLink.picture = "/home/pekka/pictures/jsref.png"

links = [];
links.push(firstLink);
links.push(secondLink);
links.push(thirdLink);
links.push(fourthLink);
links.push(fifthLink);

let document2 = new Subject({"name": "Yleinen", "links": links, "index": 2});

firstLink = new Link("https://www.techwalla.com/articles/how-to-change-a-linux-password");
firstLink.name = "linux-password";
firstLink.live = true;
firstLink.keywords = ["Tietoturva", "Tietotekniikka", "Linux"]
firstLink.picture = "/home/pekka/pictures/linuxpassword.png"

secondLink = new Link("https://www.jimms.fi/");
secondLink.name = "jimms";
secondLink.live = true;
secondLink.keywords = ["Tietotekniikka", "Kaupat", "tietokoneet"]
secondLink.picture = "/home/pekka/pictures/jimms.png"

thirdLink = new Link("https://www.mikrobitti.fi/");
thirdLink.name = "mikrobitti";
thirdLink.live = true;
thirdLink.keywords = ["Tietotekniikka", "Lehdet", "Internet"]
thirdLink.picture = "/home/pekka/pictures/mikrobitti.png"

fourthLink = new Link("https://www.verkkokauppa.com/");
fourthLink.name = "verkkokauppa.com";
fourthLink.live = true;
fourthLink.keywords = ["tietotekniikka", "Kaupat", "tietokoneet"]
fourthLink.picture = "/home/pekka/pictures/verkkokauppa.com.png"

fifthLink = new Link("https://www.speedtest.net/");
fifthLink.name = "speedtest";
fifthLink.live = true;
fifthLink.keywords = ["Verkko", "Tietotekniikka", "Nopeus"]
fifthLink.picture = "/home/pekka/pictures/speedtest.png"

links = [];
links.push(firstLink);
links.push(secondLink);
links.push(thirdLink);
links.push(fourthLink);
links.push(fifthLink);


let document3 = new Subject({"name": "Tietotekniikka", "links": links, "index": 3});


firstLink = new Link("https://www.w3schools.com/");
firstLink.name = "w3schools";
firstLink.live = true;
firstLink.keywords = ["Tietojenkäsittely", "Kehitys", "Ohjelmointi"]
firstLink.picture = "/home/pekka/pictures/w3schools.png"

secondLink = new Link("https://www.mooc.fi/en/");
secondLink.name = "mooc";
secondLink.live = true;
secondLink.keywords = ["opiskelu", "yliopisto", "avoin"]
secondLink.picture = "/home/pekka/pictures/mooc.png"

thirdLink = new Link("https://ohjelmointi-22.mooc.fi/");
thirdLink.name = "ohjelmointi-22";
thirdLink.live = true;
thirdLink.keywords = ["Ohjelmointi", "Peruskurssi", "2022"]
thirdLink.picture = "/home/pekka/pictures/ohjelmointi-22.png"

fourthLink = new Link("https://fullstackopen.com/");
fourthLink.name = "fullstackopen";
fourthLink.live = true;
fourthLink.keywords = ["Ohjelmointi", "Web", "React"]
fourthLink.picture = "/home/pekka/pictures/fullstackopen.png"

fifthLink = new Link("https://www.verstasplus.com/");
fifthLink.name = "verstasplus";
fifthLink.live = true;
fifthLink.keywords = ["Ohjelmointi", "Blogi", "Verkko-opetus"]
fifthLink.picture = "/home/pekka/pictures/verstasplus.png"

links = [];
links.push(firstLink);
links.push(secondLink);
links.push(thirdLink);
links.push(fourthLink);
links.push(fifthLink);


let document4 = new Subject({"name": "Opiskelu", "links": links, "index": 4});


firstLink = new Link("https://www.youtube.com/channel/UCefeuPyQU7nunW1Us1S0U2g");
firstLink.name = "kalastajankanava";
firstLink.live = true;
firstLink.keywords = ["Kalastus", "Youtube", "Videot"]
firstLink.picture = "/home/pekka/pictures/kalastajankanava.png"

secondLink = new Link("https://kalastus.com/forum");
secondLink.name = "kalastus.com";
secondLink.live = true;
secondLink.keywords = ["Kalastus", "Keskustelu", "Internet"]
secondLink.picture = "/home/pekka/pictures/kalastus.com.png"

thirdLink = new Link("https://tampere.venepaikat.fi/ePermit/fi/Account");
thirdLink.name = "venepaikat";
thirdLink.live = true;
thirdLink.keywords = ["Kalastus", "Veneet", "Tampere"]
thirdLink.picture = "/home/pekka/pictures/venepaikat.png"

fourthLink = new Link("https://kalastussuomi.fi/my-account/");
fourthLink.name = "kalastussuomi";
fourthLink.live = true;
fourthLink.keywords = ["Kalastus", "Kaupat", "Kalastusvälineet"]
fourthLink.picture = "/home/pekka/pictures/kalastussuomi.png"

fifthLink = new Link("https://www.norgeskart.no/");
fifthLink.name = "norgeskart";
fifthLink.live = true;
fifthLink.keywords = ["Kalastus", "Kartat", "Norja"]
fifthLink.picture = "/home/pekka/pictures/norgeskart.png"

links = [];
links.push(firstLink);
links.push(secondLink);
links.push(thirdLink);
links.push(fourthLink);
links.push(fifthLink);


let document5 = new Subject({"name": "Kalastus", "links": links, "index": 5});

firstLink = new Link("https://lichess.org/");
firstLink.name = "lichess";
firstLink.live = true;
firstLink.keywords = ["Shakki", "Pelipalvelin", "Internet"]
firstLink.picture = "/home/pekka/pictures/lichess.png"

secondLink = new Link("https://chess24.com/en");
secondLink.name = "chess24";
secondLink.live = true;
secondLink.keywords = ["Shakki", "Pelipalvelin", "Internet"]
secondLink.picture = "/home/pekka/pictures/chess24.png"

thirdLink = new Link("https://www.freechess.org/");
thirdLink.name = "fics";
thirdLink.live = true;
thirdLink.keywords = ["Shakki", "Pelipalvelin", "Internet"]
thirdLink.picture = "/home/pekka/pictures/fics.png"

fourthLink = new Link("https://www.chessanytime.com/index.html");
fourthLink.name = "chessanytime";
fourthLink.live = true;
fourthLink.keywords = ["Shakki", "Pelipalvelin", "Internet"]
fourthLink.picture = "/home/pekka/pictures/chessanytime.png"

fifthLink = new Link("https://www.shakkiliitto.fi/joukkue-sm/");
fifthLink.name = "jsm";
fifthLink.live = true;
fifthLink.keywords = ["Shakki", "Kilpailut", "Joukkue"]
fifthLink.picture = "/home/pekka/pictures/jsm.png"

links = [];
links.push(firstLink);
links.push(secondLink);
links.push(thirdLink);
links.push(fourthLink);
links.push(fifthLink);


let document6 = new Subject({"name": "Shakki", "links": links, "index": 6});

console.log("Documents instantiated!")

let documents = [ document0, document1, document2, document3, document4, document5, document6 ]

Subject.insertMany(documents).then(() => {
console.log('Documents saved!')
mongoose.connection.close()
})