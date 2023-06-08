// 1 concat gộp mảng
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = array1.concat(array2);

console.log(array3); // > Array ["a", "b", "c", "d", "e", "f"]
console.log(array1); // > Array ["a", "b", "c"]
console.log(array2); // > Array ["d", "e", "f"]
//2 filter lọc mảng
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var result = words.filter(function(word) {
  return word.length > 6;
});
console.log(result); // > Array ["exuberant", "destruction", "present"]
console.log(words);  // > Array ["spray", "limit", "elite", "exuberant", "destruction", "present"]
//3 find() lọc phần tử trong mảng trả về giá trị đầu tiên
var array = [5, 12, 8, 130, 44];
var found = array.find(function(element) {
  return element > 10; // lớn hơn 10 là 12 trả về giá trị đầu tiên
});

console.log(found); // > 12
console.log(array); // > Array [5, 12, 8, 130, 44]
//4 forEach() duyệt qua từng phần tử trong mảng trả về undefined
var array = ['a', 'b', 'c'];
array.forEach(function(element) {
  console.log(element);
});
// > "a"
// > "b"
// > "c"
console.log(array); // > Array ["a", "b", "c"]
// 5  includes() ktra phần tử đã cho có tồn tại trong mảng hay không | trả về Boolean
var array = [1, 2, 3];
console.log(array.includes(2)); // > true
console.log(array);             // > Array [1, 2, 3]
// 6 indexOf tìm kiếm vị trí phần tử trong mảng  \trả về giá trị đầu tiên\trả về -1 nếu k tồn tại
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));    // > 1
console.log(beasts.indexOf('bison', 2)); // > 4
console.log(beasts.indexOf('giraffe'));  // > -1
console.log(beasts);                     // > Array ["ant", "bison", "camel", "duck", "bison"]
//7 join () tạo ra 1 chuỗi bằng tất cả các phân tử trong mảng \ trả về 1 chuỗi rỗng "" nếu arr.length === 0
var elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());    // > "Fire,Air,Water"
console.log(elements.join(''));  // > "FireAirWater"
console.log(elements.join('-')); // > "Fire-Air-Water"
console.log(elements);           // > Array ["Fire", "Air", "Water"]
// 8 map() tạo ra 1 mảng mới vs các phần tử là kết quả từ việc thực thi 1 hàm lên từng ptu
var array = [1, 4, 9, 16];
var map = array.map(function(item) {
  return item * item;
});
console.log(map);   // > Array [1, 16, 81, 256]
console.log(array); // > Array [1, 4, 9, 16]

// 9 pop() xoá phần tử cuôi cùng ra khỏi mảng\ có thay đổi mảng ban đầu
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop()); // > "tomato"
console.log(plants);       // > Array ["broccoli", "cauliflower", "cabbage", "kale"]
// 9 shift() trái ngược với  Pop : shift dùng để xoá phần tử đầu tiên ra khỏi mảng
const plants2 = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants2.shift()); // > "broccoli"
console.log(plants2);         // > Array ["cauliflower", "cabbage", "kale", "tomato"]

