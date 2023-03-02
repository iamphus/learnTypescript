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

// const nameAgeMap: { [index: string]: number } = {};
// nameAgeMap.Phu = 25;
// nameAgeMap.Thanh = 26;
// nameAgeMap.Tuyet = 21;
// // nameAgeMap.Hiep = "Hiep"; error : type 'string' is not assignable to type 'number'

// // TYPESCRIPT ENUMS

// //Default
// enum CardinalDirections {
//   North = "North",
//   East = "East",
//   South = "South",
//   West = "West",
// }

// let currentDirection = CardinalDirections;

//TYPE ALIASES AND INTERFACES

//Type Aliases
// type CarYear = number;
// type CarType = string;
// type CarModel = string;
// type Car = {
//   year: CarYear;
//   type: CarType;
//   model: CarModel;
// };

// const carYear: CarYear = 2001;
// const carType: CarType = "Toyota";
// const CarModel: CarModel = "Coralla";
// const car: Car = {
//   year: carYear,
//   type: carType,
//   model: CarModel,
// };

// console.log(car);

//INTERFACE

// interface Rectangle {
//   height: number;
//   width: number;
// }

// interface ColoredRectangle extends Rectangle {
//   color: string;
// }

// const coloredRectangle: ColoredRectangle = {
//   height: 20,
//   width: 10,
//   color: "red",
// };

// Union Types
// function printStatusCode(code: string | number){
//   console.log(`My status code is ${code}`)
// }

// printStatusCode(404);
// printStatusCode('404');

//TS Function
// function getTime(): number {
//   return new Date().getTime();
// }

// console.log(getTime())

// Optional Parameters
//c? is optional
// function add(a: number, b: number, c?: number){
//   return a + b + (c || 0)
// }

// console.log(add(2,3,9))

//Rest Parameters
// function add(a:number, b:number, ...rest: number[]){
//   return a + b + rest.reduce((p,c)=> p+c , 0);
// }
// console.log(add(10,10,20,20,20))

// //Casting

// let x: unknown = 'hello';
// console.log((x as string).length);
// console.log((<string>x).length);

// //Force Casting

// let y = 'hi'
// console.log(((y as unknown) as string).length)

// Classes
// Member: Types

// class Person1 {
//   name: string;
// }

// const person = new Person1();
// person.name = "Phu";

// console.log(person)

// //Members: Visibility

// class Person2 {
//   private name: string;

//   public constructor(name: string){
//     this.name = name ;
//   }

//   public getName(): string{
//     return this.name;
//   }
// }

// const person2 = new Person2('Jack');
// console.log(person2.getName());

//Implements

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}
  public getArea(): number {
    return this.width * this.height;
  }

  public toString():string{
    return `Rectangle[width=${this.width}, height=${this.height}]`
  }

}
class Square extends Rectangle{
  public constructor(width: number){
    super(width,width);
  }

  public override toString(): string {
    return `Square[width=${this.width}]`
  }
}
const myReact1 = new Rectangle(100, 20);
const myReact2 = new Square(90)

console.log(myReact1.toString());
console.log(myReact2.toString());


//ex1 Partial
interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 2;

//ex2 Partial
interface Todo {
  title: string;
  description: string;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
 
// const todo2 = updateTodo(todo1, {description:"abcde"});

//Required<Type>
interface Props {
  a?: number;
  b?: string;
}
 
const obj: Props = { a: 5 };
 
// const obj2: Required<Props> = { a: 5 }; --> error: property 'b' is missing

//Record<Keys, Type>

interface CatInfo {
  age: number;
  breed: string;
}
 
type CatName = "miffy" | "boris" | "mordred";
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
 
cats.boris;


//Pick

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<Todo, "title" | "completed">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  // description: "sa";--> error : description were removed from the type
};
 
todo;

