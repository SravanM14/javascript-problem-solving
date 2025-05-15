//sum of two numbers;
function sumOftwo(a, b){
    return a+b;
}
//console.log(sumOftwo(1, 2));

//reverse a string 

function reverseStr(str){
    let revStr = '';
    for(let i = str.length -1 ; i >= 0; i--){
        revStr += str[i];
    }
    return revStr;
}

//console.log(reverseStr("sravan"));

function factorial(num){
    if(num === 0 || num === 1){
        return 1 ;
    }else{
        return num * factorial(num -1);
    }
}

//console.log(factorial(5));


// find the max 

function maxNumArr(ar){
    let max = ar[0];
    for(let i = 0 ; i < ar.length ; i++){
        if(ar[i] > max){
            max = ar[i]
        }
    }
       return max;
}

//console.log(maxNumArr([1,78,2,3,4,50,60]));


// check the num is prime or not

function isPrime(num){
    if(num <= 1){ return false};
        for(let i = 2 ; i <= num/2 ; i++){
            if(num % i === 0 ){
                return false 
            }
        }

     return true;
    }

//console.log(isPrime(2));

//even -odd numbers
function evenoddNumbers(ar){
    let evenNumbers=[];
    let oddNumbers=[];
    for(let i = 0 ; i < ar.length ;i++){
        if(ar[i]%2 === 0){
          evenNumbers.push(ar[i])
        }else{
          oddNumbers.push(ar[i])
        }
    }
return [evenNumbers,oddNumbers];
}

//console.log(evenoddNumbers([1,2,3,4,5,6,7,8,9,10]));

//capitalizeFirstLetterOfEachWord


function capitalizeFirstLetterOfEachWord(str){
   let words = str.split(' ');
   let finalout= words.map(word=>{
    return word.charAt(0).toUpperCase()+word.slice(1);
   })
   
   return finalout.join(' ');
}

//console.log(capitalizeFirstLetterOfEachWord("i am manda sravan kumar from epam"));
let test = [1,2,4,5,6]
// console.log(test.slice(1,0));


// large number from nestedArray 

function LargenumberfrmNestedArr(arr){
    let max = -Infinity;
    function helper(ar){
        for(let ele of ar){
            if(typeof ele === "number"){
                max = Math.max(max, ele);
            }else if(Array.isArray(ele)){
                helper(ele);
            }
    }
    }
    helper(arr);
    return max;
}

//console.log( LargenumberfrmNestedArr([1,2,3,[10,23,[45,68,[98]]]]));
function flattenArray(arr){
  let finalFlat= [];
  for(let i = 0 ; i < arr.length ; i++){
    if(Array.isArray(arr[i])){
        finalFlat.push(...flattenArray(arr[i]))
    }else{
        finalFlat.push(arr[i])
    }
  }
  return finalFlat;
}

//console.log(flattenArray([1,2,3,[10,23,[45,68,[98]]]]))


// check palindrom

function isPalindrom(str){
    let revStr = str.split('').reverse().join('');
    return revStr === str;
}

//console.log(isPalindrom('madam'));


//fabonacci serices

function fabonacciSeries(n){
    if(n === 0 ){ return []};
    if(n === 1) { return [0]};
    let seq = [0, 1]
    for(let i =2 ; i < n; i++){
       seq.push(seq[i-1]+ seq[i -2]);
    }
    return seq;
}

//console.log(fabonacciSeries(10))


function transverse(obj , callback){
    if(obj && typeof obj === "object"){
        if(Array.isArray(obj)){
         obj.forEach(ele=>{
            transverse(ele , callback)
         })
           
        }else{
            Object.keys(obj).forEach(ele=>{
                transverse(obj[ele], callback)
                callback(ele, obj[ele]);
            })
        }
    }
}

function callback(key, value){
    let val= JSON.stringify(value)
    console.log(`key : ${key} , value:${val}`)
}

const json = {
    "name": "John Doe",
    "age": 30,
    "address": {
        "street": "Main St",
        "city": "New York"
    },
    "skills": ["TypeScript", "Node.js", "Angular"]
};

//transverse(json, callback);


function EqualizerBraces(str){
const data ={
    "{":"}",
    "[":"]",
    "(":")"
}
const exist=[]
for(let i = 0 ; i < str.length ; i++){
    if(str[i] in data){
         exist.push(str[i])
    }else{
        console.log(exist)
        if(exist.length === 0 || data[exist.pop()] !== str[i]){
            console.log(exist)
            return false;
        }
    }
}
//console.log(exist)
return exist.length === 0;
}

//console.log(EqualizerBraces("{][)}"));

function missingNumbers(ar){
   let sort_ar = ar.sort((a,b)=> a(-b);
   let max= sort_ar[sort_ar.length -1];
   let min = sort_ar[0];
    let missing =[];
   for(let i=min ; i < max; i++){
        if(!sort_ar.includes(i)){
           missing.push(i)
        }
   }
   return missing;
}

//console.log(missingNumbers([1,2,3,4,6,8,9]));


function Captalization(str){
    let result = ''
   for(let i =0 ; i < str.length ; i++){
    str[0]=str[0].toUpperCase();
    if(/^[A-Z]*$/.test(str[i])){
        result += ' '+str[i] 
    }else{
        result += str[i] 
    }
   }  
   return result;
}

//console.log(Captalization("amOnTheBench"))


function bubbleSort(arr){
    let n = arr.length;

    for(let i = 0 ; i < n ;i++){

        for(j = 0 ; j < n-i-1;j++){
            if(arr[j] > arr[j+1]){
                // let temp = arr[j+1];
                //  arr[j+1] = arr[j];
                //  arr[j]= temp;//n = 4 -0-1 =3, 4-1-1=2, 4-2-1=1, 4-3-1=0


                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]= temp;
            }
        }
    }
    return arr;
}


//console.log(bubbleSort([143,12,160, 34,88 ,56,87,90,123]))


function mergeArrays(arr1 , arr2){
    let mergeArr=[];
    for(let i =0; i< arr1.length; i++){
        mergeArr.push(arr1[i])
    }
    for(let j =0; j< arr2.length; j++){
        mergeArr.push(arr2[j])
    }
    return bubbleSort(mergeArr);
}

//console.log(mergeArrays([23,45,3,18] , [90,1,43,85]));


// function removeDuplicates(str){
//     let result = '';
//     for(let i=0; i < str.length; i++){
//         if(!result.includes(str[i]))
//       result += str[i]
//     }
//     return result;
// }
// console.log(removeDuplicates('ccommpaaaaanyyname'));

function removeDuplicates(input) {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        if(result[result.length-1] !==input[i]){
            result += input[i]
        }
    }
    
    return result;
    //return result;
}
let input = "ccommpaaaaanyyname";
let output = removeDuplicates(input);
//console.log(output); 



function rvrsestrornum(input){
    result = '';
    input=input.toString();
    for(let i =input.length-1 ; i >=0 ; i--){
        result += input[i]
    }
    return result;
}

//console.log(rvrsestrornum("sravan kumar manda"));


function palindromTwopointers(input){
    let str = input.toLowerCase();
    let left = 0;
    let right = input.length -1;
    for(let i = 0 ; i < input.length/2 ; i++){
        if(str[left] !== str[right]){
            return false
        }
        left++;
        right--
    }
    return true;
}

//console.log(palindromTwopointers('eye'))

function findMaxoccranceChar(str){
    let frequancy={};
    for(let i =0 ; i < str.length; i++){
        if(frequancy[str[i]]){
            frequancy[str[i]] += 1;
        }else{
            frequancy[str[i]] = 1;
        }
    }
    

    let maxCount = 0;
    let maxOccure = '';

    for(let char in frequancy){
        if(frequancy[char]> maxCount){
            maxCount = frequancy[char];
            maxOccure = char;
        }
    }
    return { char : maxOccure, count:maxCount};
}


//console.log(findMaxoccranceChar("sravannnnnnnn"))




function fillGapswithsStr(str){
    let result = '';
    for(let i = 0 ; i < str.length; i++){
        if(str[i]===' '){
            result += "20%";
        }else{
            result +=str[i]
        }
    }
    return result;
}

//console.log(fillGapswithsStr('sravan Kumar Manda'));

//Longest word from the array
function longestWord(arr){
    let len = -Infinity;
    let word = '';
     let flat = arr.flat(Infinity);
     
     for(let i = 0 ; i < flat.length ; i++){
         if(flat[i].length >  len){
             len = flat[i].length;
             word = flat[i]
         }
     }
     return {word:word, length:len}
}


//console.log(longestWord(['a','b','abcd','sravankumarmandaepamsystems',['a','b','csdsfd']]));


function transverseEX(json,callback){
    if(json && typeof json === 'Object'){
        if(Array.isArray(json)){
            json.forEach(ele=>{
                transverse(ele, callback)
            })
        }else{
            Object.keys(json).forEach(el=>{
                transverse(obj[el], callback);
                callback(ele, obj[el])
            })
        }
    }
}


function pair(key, value){
    console.log(`${key} : ${value}`);
}


let jsonEx={
    name:"sravan",
    emp:"epam",
    skills:['js','html','css','typescript'],
    address:{
        city:"HYD"
    }
}

transverseEX(jsonEx, callback);


function occurancecountofstring(str){
    let result = '';
    let  count = 1;
      for(let i = 1 ; i <str.length ; i++){
           if(str[i] === str[i-1]){
             count++;
           }else{
             result += count+str[i-1];
             count =1;
           }
      }
      result+= count+str[str.length -1];
      return result ;
    }
    
    
   // console.log(occurancecount('aaabbccckkkkzzzr'));

   function secondLagestfrmar(arr){
    let max=-Infinity;
    let secondMax=-Infinity;
    for(let i=0; i< arr.length;i++){
        if(arr[i] > max){
            secondMax = max;
            max= arr[i]
        }else if(arr[i] > secondMax && arr[i] !== max ){
            secondMax = arr[i]
        }
    }
    return `{max:${max}, secondMax:${secondMax}}`
   }

   console.log( secondLagestfrmar([1,2,3,4,7,8,10]))