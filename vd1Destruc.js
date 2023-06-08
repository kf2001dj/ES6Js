// var a, b;
// [a,b] = [1,2]
// console.log(a,b); //1 2
// //or destructuring

// var [c,d] = [3 ,4]
// console.log(c,d) //3 4

// const [a,b,c] = [1,2,3,4,5]
// console.log(a,b,c) // 1 2 3
// //or Dess
// const [q,w,r, ...e] = [6,7,8,9,10]
// console.log(q,w,r,e) // 6 7 [8 9 10]

const blogs = {
    dongcode : [
        {
            pageFace : 'Thanhdong.org',
            like : 9999,
            daily : 1234
        }
    ]
};
//distrusturing
const {
    dongcode : [{
        pageFace : namePage,
        like : numLikes,
        daily : numDaily
    }]
} = blogs;

console.log(namePage,numLikes,numDaily);
// ra kq la : Thanhdong.org 9999 1234