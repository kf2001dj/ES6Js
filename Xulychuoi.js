// lam viec voi chuoi String
var  myString = 'My name is Dong Dong'


/**
 * 1 .Length
 * 2. Find index 
 * 3. cut string
 * 4. Replace
 * 5. Convert to  upper case
 * 6. Convert to lower case
 * 7. Trim
 * 8. split 
 * 9. Get a charapter  by index
 * 
 * 
 */
console.log(myString.length)
//2
console.log(myString.indexOf('Do',3))
console.log(myString.lastIndexOf('ng'))
console.log(myString.search('nam'))
//3 cat chuoi
console.log(myString.slice(11,12))
console.log(myString.slice(0))
console.log(myString.slice(-3,-1))
//4 thay the
console.log(myString.replace('Dong', 'Linh'))
///////   bieu thuc chinh quuy
console.log(myString.replace(/Dong/g,'Linh')) //thay the tat ca
//5 chuyen thanh chu IN HOA
console.log(myString.toLocaleUpperCase())
//chuyen thanh chu thuong
console.log(myString.toLowerCase())
//trim  cat khoang trang
    console.log(myString.trim().length)
//slip cat chuoi

var a = 'Javascrip'
console.log(myString.split(" "))

//9 charrapter lay ra dc chu cai cho trc
const my = 'Thanh Dong'
console.log(my.charAt(2))