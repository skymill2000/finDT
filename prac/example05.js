let car = {
    name : "bmw",
    ph : 500,
    start : function(){
        console.log("engine is started")
    },
    stop : function(){
        console.log("engine is stoped")
    }
}

let car2 = {
    name : "sonata",
    ph : 140,
    start : function(){
        console.log("engine is started")
    },
    stop : function(){
        console.log("engine is stoped")
    }
}

let car3 = {
    name : "honda",
    ph : 320,
    start : function(){
        console.log("engine is started")
    },
    stop : function(){
        console.log("engine is stoped")
    }
}

let cars = [car, car2, car3];
// console.log(cars[0].name);
// console.log(cars[1].name);
// console.log(cars[2].name);

for(var i =0; i<cars.length; i++){
    console.log(cars[i].name);
}

cars.map((car)=>{
    console.log(car.name);
})