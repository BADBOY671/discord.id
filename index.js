const express = require("express")
const app = express();
const Discord = require('discord.js')
const client = new Discord.Client()
const path = require("path");
const session = require("express-session");
const MemoryStore = require("memorystore")(session);
const bodyParser = require("body-parser");
const url = require("url");
const ejs = require('ejs')
const listener = app.listen("3000", () => { console.log("Your app is listening on port " + listener.address().port)})



app.use(express.static("public"));

const e = require("express");
app.set("view engine", "ejs");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));




app.get('/', async function(req,res){
     
    res.render('home.ejs', {

    })
})


app.post('/', async function(req,res){
     
     let rr = req.body.rr
   const user = rr === client.user.id ? client.user : await client.users.fetch(getID(rr)).catch(e => {
        });
        
        if(!user) return
    res.render('lol.ejs', {
        rr,
user,
    })
})





//ملاحطة:
// الكود ذا مب انا الي مسويه بس الكود ذا الباقي حقوقي 
// (:
function getID(source) {
    const tokenRegex = /([A-Za-z\d]{24})\.([\w-]{6})\.([\w-]{27})/,
        isToken = tokenRegex.test(source);
    if (isToken) {
        const base64 = source.split(".")[0];
        return Buffer.from(base64, 'base64').toString();
    }
    return source;
}
client.login('Your Discord Bot Token')
