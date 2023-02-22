//Tuple
// let ourTuple : [number, boolean, string]

// ourTuple = [2, true, "Thanh Phu"]

// console.log(ourTuple)

//Named Tuples
// const graph: [x:number , y: number] = [12, 54]

//Destructuring Tuples
// const graph: [number, number] = [55.2, 41.3];
// const [x, y] = graph;

// OPTIONAL PROPERTIES
// const car : { type: string, mileage?: number} = {
//     type: "toyotar",
// }

// car.mileage = 2000;

// INDEX SIGNATURES

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Phu = 25;
nameAgeMap.Thanh = 26;
nameAgeMap.Tuyet = 21;
// nameAgeMap.Hiep = "Hiep"; error : type 'string' is not assignable to type 'number'

// TYPESCRIPT ENUMS

//Default
enum CardinalDirections {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}

let currentDirection = CardinalDirections;

//TYPE ALIASES AND INTERFACES

//Type Aliases
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const CarModel: CarModel = "Coralla";
const car: Car = {
  year: carYear,
  type: carType,
  model: CarModel,
};

console.log(car);

//INTERFACE

interface Rectangle {
  height: number;
  width: number;
}

interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};
