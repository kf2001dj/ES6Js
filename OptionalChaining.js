const player =  {
    details: {
        name : {
            firstName : 'Quang',
            lastName : 'Dong',
            age : 22
        }
    },
    jobs : [
        'dev js',
        'dev react native'
    ]
};
const playF = player?.details?.name?.firstName;
console.log(playF);
const playN = player?.jobs;
console.log(playN)
////gia tri khong chac chan thi ?????
