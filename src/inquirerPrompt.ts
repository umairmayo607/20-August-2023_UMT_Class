import { rollNum } from "./second.js";

interface School {
  School_Name: string;
  School_Strength: number;
}
interface Class {
  class_Name: string;
  roll_No: number;
}

type School_Class = School & Class;

let obj: School_Class = {
  School_Name: "umair",
  School_Strength: 23,
  class_Name: "umair's class",
  roll_No: 23,
};

console.log(obj.School_Name);
console.log(obj.roll_No);
