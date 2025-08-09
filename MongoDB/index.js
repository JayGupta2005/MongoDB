const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection sucessesfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

User.updateMany({name:"bruse"} , {age:49}).then((res=>{
    console.log(res);
})).catch((err)=>{
    console.log(err);
})

// User.insertMany([
//     {name:"Tony", email:"tony@gmail.com", age:25},
//     {name: "peter", email: "peter@gmail.com", age: 30},
//     {name: "bruse", email:"bruse@gmail.com", age: 35},
// ]).then((res)=>{
//     console.log(res);
// })



// User.findOne({age:{$gt:47}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// const Employee = mongoose.model("Employee", userSchema);

// const user2 = new User({
//     name: "Eve",
//     email: "eve@gmail.com",
//     age: 48,
// });
// 
// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })