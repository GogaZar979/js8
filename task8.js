let car = new Map();
car.set ('toyota' , 'black');
car.set ('lexus' , 'white');
car.set ('bmw' , 'ping');


console.log(car.keys())
console.log(car.values())

for (let name of car.keys()){
console.log(name + " - значение X" )
}
for (let name of car.values()){
console.log(name + " - значение Y")
}


