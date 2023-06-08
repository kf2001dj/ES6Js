// var a =1 ;
// var b = ++a // công trc rồi gán giá trị 2->>a suy ra a =2
// var c = b * a-- // lấy giá trị trc sau mới trừ suy ra a vẫn =2

// console.log(c)
// luc truoc khi dung Spread systax
const tools = ['dong', 'linh']
const otherTools = [ 'hanoi', 'unghoa']
const allTools = tools.concat(otherTools);
console.log(allTools)
//sau khi su dung Spread systax rat nhanh gon :)

const  allTo = [...tools ,...otherTools ]
console.log(allTools)

// Create an Object and a copied Object with Object.assign()
const originalObject = { enabled: true, darkMode: false }
const secondObject = Object.assign({}, originalObject)

console.log(secondObject);//{enabled: true, darkMode: false}

///Spread
const orin = { 
    enabled : true ,
    darkMode : false
}
const sec = {...orin}
console.log(sec); // rat la nhanh gon

//spread voi funtion
 //trc khi su dung spread sys
 function multi (a,b,c){
    return a*b*c;
 }   
 console.log(multi(1,2,3));
 //Nhưng khi sử dụng Spread trong function calls thì rất đơn giản
 const numbers = [1,2,3]
console.log( multi(...numbers));

//rest parameters
function restTest(...arg){
    console.log(arg);
}
restTest(1,2,3,4,5,6);


/**
 * Destructure sử dụng để tạo ra một new variables từ array items,
 *  hoặc object properties
    Spread syntax sử dụng để unpack terables của một arrays,
    objects, và function calls
    Rest parameter là một cú pháp tạo ra một array từ một
    số lượng giá trị không xác định
 * 
 */
