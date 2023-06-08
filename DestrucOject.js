const note = {
    id : 1,
    website : 'dongcode.com',
    date : '17/04/2001',
    yes : 'dang hoc Js'

}
//cách truyền thống

// const id = note.id
// const website = note.website
// const date = note.date
////
// console.log(id)
// console.log(website)
// console.log(date)
// cach Destructuring object
console.log('cach destructuring object')

const {id,website,date,yes} = note
console.log(id)
console.log(website)
console.log(date)
console.log(yes)