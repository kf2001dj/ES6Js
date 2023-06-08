// Object.creat() dùng để tạo 1 đối tượng mới và mở rộng
// Initialize an object with properties and methods
console.log('Object.creat() ben duoi')
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};
// Use Object.create to pass properties
const barista = Object.create(job);
barista.position = "barista";
barista.showDetails();

console.log('Object.key() 2th=============')
console.log('object.key th1')
////////////////////// Object Key() tao array xuat tat ca key ra
// Initialize an object vd1
const employees = {
    boss: 'Michael',
    secretary: 'Pam',
    sales: 'Jim',
    accountant: 'Oscar'
};
// Get the keys of the object
const keys = Object.keys(employees);
console.log(keys);
// Output
// ["boss", "secretary", "sales", "accountant"]
console.log('object.key th2=============')
// Iterate through the keys vd2
Object.keys(employees).forEach(key => {
    let value = employees[key];
     console.log(`${key}: ${value}`);
});
// Output
// boss: Michael
// secretary: Pam
// sales: Jim
// accountant: Oscar
console.log('Object.value()============')
//Object.value() nguoc lai voi Object.key()
// Initialize an object
const session = {
    id: 1,
    time: `26-July-2018`,
    device: 'mobile',
    browser: 'Chrome'
};
// Get all values of the object
const values = Object.values(session);
console.log(values);
// Output
// [1, "26-July-2018", "mobile", "Chrome"]
console.log('=====object.entries======')
//Object.entries() tao Array voi key/value cua 1 object
// Initialize an object
const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};
// Get the object key/value pairs
const entries = Object.entries(operatingSystem);
console.log(entries);
// Output
// [
//     ["name", "Ubuntu"]
//     ["version", 18.04]
//     ["license", "Open Source"]
// ]

console.log('====object.assign=====')
//   Object.assign dung de sao chep object sang object khac
// Initialize an object
const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};
// Initialize another object
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};
// Merge the objects
const character = Object.assign(name, details);
console.log(character);
// Output
// {firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}
//th2 assign
// Merge the object with the spread operator
const character2 = {...name, ...details}
console.log(character2);


console.log('====object.freeze=====')
//    Object.freeze ngan chan sua doi thuoc tinh gia tri cua 1 object/ ngan xoa or add thuoc tinh
// Initialize an object
const user = {
    username: 'AzureDiamond',
    password: 'hunter2'
};
// Freeze the object
const newUser = Object.freeze(user);
newUser.password = '*******';
newUser.active = true;
console.log(newUser);
// Output
// {username: "AzureDiamond", password: "hunter2"}

console.log('====object.seal=====')
////  Object.seal  dùng để ngăn chặn hành vi add thêm một new properties nhưng lại cho phép modification những thuộc tính đã tồn tại trước đó
// Initialize an object
const user1 = {
    username: 'AzureDiamond',
    password: 'hunter2'
};
// Seal the object
const newUser1 = Object.seal(user1);
newUser.password = '*******';
newUser.active = true;
console.log(newUser1);
// Output
// {username: "AzureDiamond", password: "*******"}

