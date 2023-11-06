const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req,res)=> {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, ()=>{
    console.log("i am listening");
} );

app.get("/api/fruits", (req, res)=> {
    const animals = [];
    animals[0] ={
        name:"Banana",
        color:"Color: yellow",
        length:"Size: long",
        img:"images/banana.jpg",
        countries: ["Produced in: India", " Brazil", " China", " Phillipines", " Ecuador", " Honduras"]
    }
    animals[1] ={
        name:"Apple",
        color:"Color: red, green or yellow",
        length:"Size: medium",
        img:"images/apple.jpg",
        countries: ["Produced in: China", " USA", " Poland", " Canada", " Germany", " France"]
    }
    animals[2] ={
        name:"Grape",
        color:"Color: purple or green",
        length:"Size: small",
        img:"images/grapes.jpg",
        countries: ["Produced in: Italy", " USA", " France", " Spain", " Canada", " Chile"]
    }
    animals[3] ={
        name:"Peach",
        color:"Color: yellow or red",
        length:"Size: medium",
        img:"images/peach.jpg",
        countries: ["Produced in: USA", " Canada", " China", " Spain", " Italy", " Greece"]
    }
    animals[4] ={
        name:"Blueberry",
        color:"Color: Blue",
        length:"Size: small",
        img:"images/blueberries.jpg",
        countries: ["Produced in: USA", " Canada", " Poland", " Germany", " United Kingdom", " Mexico"]
    }
    res.json(animals);
})