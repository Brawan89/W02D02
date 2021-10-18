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
    const co = arr.reduce((previousValue, currentValue) => {
        return previousValue = previousValue+1
       
    },0)
    return co
  };


  // object
  /* for(const key in object)
  console.log(key ); //show key
  console.log(obj[key]);//show element of key */