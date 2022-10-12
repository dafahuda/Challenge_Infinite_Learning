// const fruits = ["pisang", "Melon", "Pepaya", "Apel"];
// const word = "lorem ipsum";

// console.log(fruits.length);
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let i = 0; i < word.length; i++) {
//     console.log(word[i]);
// }

// const loopingId = document.getElementsById("looping");
// let text = "";

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
//     text += `<h1> The fruit is ${fruits[i]} <h1>`
//     // text += 'The fruit is ${fruits[i]} <br>'
// }

// console.log(text);
// loopingId.innerHTML = text;

// For in and of

const user = {
    fname: "Lorem",
    lname: "Ipsum",
    email: "lerem@gmail.com"
};
const users = [{
        fullname: 'dafa',
        role: 'mahasiswa',
    },
    {
        fullname: 'huda',
        role: 'mahasiswa',
    }, {
        fullname: 'rifai',
        role: 'mahasiswa',
    }, {
        fullname: 'dhr',
        role: 'mahasiswa',
    },
];

//cara akses object

// const fullname = `${user.fname} ${user.lname}`;
// console.log(fullname);

// const {
//     fname,
//     email
// } = user;
// console.log(`${fname} ${email}`);

//cara akses array
// console.log(users);
// const huda = users[1].fullname;
// console.log(huda);

//fokus dil line array
// const [rifai, dhr] = users;
// console.log(dhr);

// for (const key in user) {
//     console.log(key);
// };

// for (const {
//         fullname,
//         role
//     } of users) {
//     console.log(fullname, "dengan", role);
// }

// users.map((val, index))

//while looping

let i = 0;

// while (i < users.length) {
//     //hasil code block
//     // console.log(i);
//     users[i].fullname = "pending";

//     //execue code block in here
//     i++
// }

// console.log(users);

do {
    users[i].index = i;
    i++;
} while (i < users.length);

console.log(users);