const showAnimals = async () => {
    let response = await fetch("https://hw13.onrender.com");//http://localhost:3000/api/fruits
    let animalsJSON = await response.json();
    let animalsDiv = document.getElementById("animalsDiv");


    if (animalsJSON == "") {
        console.log("Invalid load of json");
        return;
    }

    animalsJSON.forEach((animal) => {
        const section = document.createElement("section");
        animalsDiv.append(section);
        animalsDiv.classList.add("fix");

        const h1 = document.createElement("h1");
        h1.innerHTML = animal.name;
        
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        
        p.innerHTML = animal.color;
        p2.innerHTML = animal.length;
        p3.innerHTML = animal.countries;

        const img1 = document.createElement("img");
        img1.src = "http://localhost:3000/" + animal.img;
        section.append(h1);
        section.append(img1);
        section.append(p);
        section.append(p2);
        section.append(p3);


        
    });

}

const getAnimals = async() => {
    try {
       let response = await fetch("http://localhost:3000/api/fruits");
       return await response.json();
    } catch (error) {
        console.log("error retrieving json");
        return "";
    }
}

window.onload = () => showAnimals();