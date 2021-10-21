const addOne = function(arr)  {
    let n = [];
    arr.forEach((element)=> {
        n.push(element + 1);
        });
        return n
  };
  addOne([1,2,3]) // => [2,3,4]
  addOne([10,11,12]) // => [11,12,13]


//2
const addExclamation = (arr) => {
    let r = [];
    arr.forEach((element)=>{
       r.push(element  +'!') ;
    })
    return r;
  };
  
addExclamation(["one","two","three"]) // => ["one!","two!","three!"]
  
  

//3
const addOneByMap = (arr) => {
   let n = arr.map((element)=>{
      return element +1;
   });
   return n;
  };
addOneByMap([1,2,3]) // => [2,3,4]
addOneByMap([10,11,12]) // => [11,12,13]


  //4
const addQuestion = (arr) => {
    let s = arr.map((element)=>{
        return element + '?'
    })
    return s;
  };
  
addQuestion(["one","two","three"]) // => ["one?","two?","three?"]
  
  
//5 
const forLoopTwoToThe = (arr) => {
    let res =  arr.map((elemt,i)=>{
        return Math.pow(2, elemt)
    })
    return res
  };
forLoopTwoToThe([1,2,3]) // => [2,4,8]


//6
const typeNum = (arr) => {
   const f = arr.filter(n => typeof n == "number")
    return f 
  };
  
  typeNum([1, 'bob' ,3]) // => [1,3]

  //7
const containsAnd = (arr) => {
    let keyword = "and"; 
    for (let i = 0; i < arr.length; i++) {
        const ad = arr.filter(word => { word == keyword   
    });
     return ad }
  };
  

//8
const oddValues = (arr) => {
    const m = arr.filter(o => o %2 != 0) 
    return m;
  };

//9
const addValues = (arr) => {
    const v = arr.reduce((previousValue, currentValue) => {
        return previousValue + currentValue
    })
    return v
  };
  
  addValues([1,2,3,4]) // => 10
  addValues([15,10,15,5]) // => 45


//10
const countNumberOfElements = (arr) => {
    const co = arr.reduce((previousValue) => {
        return previousValue = previousValue+1
       
    },0)
    return co
  };




  // object -------------------------------------------------------------------------------




//1 
  const checkValues = (obj, value) => {
    return Object.values(obj).includes(value)  }
   
checkValues({name:"ahmed",age:15},15) // => true
checkValues({name:"ahmed",age:15},20) // => false


//2
const courseInfo = {
  name: "Code 301",
  duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
  topics: [
    "SMACSS",
    "APIs",
    "NodeJS",
    "SQL",
    "jQuery",
    "functional programming",
  ],
  finalExam: true,
};

const getCourseKeys = (obj) => {
  const newArray = [];
  for(let key in courseInfo) {
    newArray.push(key);
  }
  return newArray;
   
};
getCourseKeys(courseInfo)// => ['name', 'duration', 'topics', 'finalExam']


//3
const emptObject={
  GraceHopper: '222-303-5938',
  AdaLovelace: '222-349-9842',
  AlanTuring: '222-853-5933'
}
//HR has asked you to change the data to make it easier to print so that it looks like this: 
// [
//   'Grace Hopper: 222-303-5938','Ada Lovelace: 222-349-9842','Alan Turing: 222-853-5933'
// ]

const updateNumbers = (obj) => {
  const a_array = []
  for (const key in obj) {
    a_array.push(`${key} : ${emptObject[key]}`)}
    return a_array }
    updateNumbers(emptObject);


//4
const PassedOrFailed = function (studentGrades) {
  for (const key in studentGrades) {
    if (studentGrades[key].grade/studentGrades[key].total > 0.5 ){
      return "The student have passed"; }
     else{
      return "The student have failed";
     }
     }
};
const studentOne = {
  math: { grade: 70, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 }
};
const studentTwo = {
  math: { grade: 59, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 }
};
PassedOrFailed(studentOne); // =>  "The student have passed"
PassedOrFailed(studentTwo); // =>  "The student have failed"


//5
const totalCharacters = (arr) => {
  return arr.reduce(function (count , total) {
    return count += total.length;
  }, 0)
}
totalCharacters(["abc","yz"]) // => 5


//6
const houseSize = (array) => {
  let sizes = []
  for (let index = 0; index < array.length; index++) {
   sizes.push({ house :  array[index++] , members : array [index]})
    
  } return sizes;
}; 
houseSize(['Stark',7,'Arryn',3]) 
//[{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }]



//7
const uniqueDogs = {
  max: { breed: "Labrador Retriever", color: "blond" },
  rex: { breed: "German Shepherd", color: "black and brown" },
  lucy: { breed: "Bulldog", color: "white" },
  lucifer: { breed: "Chihuahua", color: "brown" },
};
const createDog = function (name, dogBreed, furColor) {
  let key1 = Object.keys(uniqueDogs);
  for (const key in uniqueDogs) {
    if (key === name) {
      return "The dog isn't unique enough :("}}
      key1[name] = {breed: dogBreed, color: furColor}
      return "Added the dog successfully"
};
createDog("luna", "Husky", "black and white"); // => "Added the dog successfully"
createDog("rex", "Golden Retriever", "blond"); // => "The dog isn't unique enough :("