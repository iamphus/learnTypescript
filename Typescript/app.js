// let ourTuple : [number, boolean, string]
// ourTuple = [2, true, "Thanh Phu"]
// console.log(ourTuple)
// const graph: [x:number , y: number] = [12, 54]
// const graph: [number, number] = [55.2, 41.3];
// const [x, y] = graph;
// OPTIONAL PROPERTIES
// const car : { type: string, mileage?: number} = {
//     type: "toyotar",
// }
// car.mileage = 2000;
// INDEX SIGNATURES
var nameAgeMap = {};
nameAgeMap.Phu = 25;
nameAgeMap.Thanh = 26;
nameAgeMap.Tuyet = 21;
// nameAgeMap.Hiep = "Hiep"; error : type 'string' is not assignable to type 'number'
// TYPESCRIPT ENUMS
//Default 
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
console.log(currentDirection);
