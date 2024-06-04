//const arr = [1 ,2 ,3 ,4]
const string = "hello Nazneen"

for (const num of string) {
    //console.log(`each char is !${num}`);
    //console.log(num);
}

//map  ye array me aata hai unique value deta hai repeatations nhi hoti hai
const map = new Map()
map.set('IN', "india")
map.set('uk', "united state of america")
map.set('FR', "France")

//console.log(map)
for (const [key, value] of map) {
    //console.log(`key value is ${key} and ${value}`)
}


// const codding = [ "js", "html", "css"]

// codding.forEach(function(val)
// {
//     console.log(val);
// })


const codding = [ "js", "html", "css"]

codding.forEach((val) =>
{
    //console.log(val);
})

//filter

// 

const code = [1, 2, 3, 4]

const abc = code.filter((num) => 
{
    return num > 2
})
//console.log(abc)


//const userbook = book.filter((bk) => "gen===teue")


//reduce
 book = ["js","html","ruby"]
const mynum = book.reduce((acc,cur) =>
{
   return  acc+cur
    
},1)
//console.log(mynum);


//DOM
  //document.getElementById(`id`).innerHTML ="chai aur code"

  //.innerHTML (give all style and text)
  //.innertxt (give only text)
  //.innercontent (give text and <span> text</span>)

  //title.style.backgroundcolor ="red"
   //document.querySelector(`h1`)//we can select h1 tag

  // document.querySelector(`.heading`)// heading is calss name we can select class name by .

  // document.querySelector(`#title`)// we can select id by # tag



   //comparison operator


   //string

//    const name = "nazneen"

//    const repo = 50


//    console.log(`hello my is ${name}`);


const name = "nazneen"

// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.charAt(2));

//sting methods

// const naz = name.SubString(0, 4)

// console.log(naz);

// const naz = name.slice(0, 4)

// console.log(naz);


//const naz = name.SubString(0, 4)

//console.log(name.trim());


name.replace(`nazneen`,`abu`);
//console.log(name);



//array methods
const arr = [0, 2, 3, 4]
  //arr.push(7)
  //arr.pop()
  //arr.unshift(3)
  arr.shift(3)  

  //console.log(arr);

const lang = ["js", "html", "ruby"]
 const surname = ["najo", "abu", "topu"]
 const fruit = ["mango", "apple", "banana"]
 //const lang2 = lang.concat(surname)


const lang2 = [...lang, ...surname, ...fruit]
//console.log(lang2);

//Promises - reduce call back hell 




const promiseOne = new Promise(function(resolve,reject){

    setTimeout(function(){
        //console.log(`Async task is completed`);
        resolve()
    },2000)
})

promiseOne.then(function(){
    //console.log("promise consumed");
})



const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "nazneen", age:"30"})

    },2000)
})

promiseThree.then(function(user)
{
    //console.log(user)
})




const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){

    }, 2000)
})



//console.log("one");

setTimeout(()=>
{
        //console.log("nazneen");
},4000)
//console.log("three");


function hello()
{
    //console.log("hello");
}
setTimeout(hello,3000);



function getData(dataID) {

    setTimeout(()=>
        {
        //console.log("data", dataID);
    }, 3000);
    
}
getData(1)
getData(2)
getData(3)


//promises


let promise = new Promise((resolve,reject) =>
{
    //console.log("i am promise");
})



const getPromise = () =>
    {
        new Promise((resolve,reject)=>{
            console.log(" i am promi                                                                                                                                                                                                                                                                                                                                                                                                                                    se");
            resolve("sucess");

        });
    };

    let 