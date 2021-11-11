let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 }
];

//loop through objects
for(let i = 0; i<objects.length; i++){
        //create div
        let div = document.createElement("div");
        //set height
        div.style.height = objects[i].height + "px";
        //set width
        div.style.width = objects[i].width + "px";
        //set color
        div.style.backgroundColor = objects[i].color;
        //append to main div
        document.getElementById("main").appendChild(div);
} 