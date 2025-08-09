const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main().then((res)=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from: "neha",
    to: "sachin",
    msg: "how are you ?",
    created_at: new Date(),
    },
    {
    from: "ravi",
    to: "jay",
    msg: "fart are you ?",
    created_at: new Date(),
    },
    {
    from: "abinash",
    to: "behera",
    msg: "how are you ?",
    created_at: new Date(),
    },
    {
    from: "ankit",
    to: "sumit",
    msg: "how are you ?",
    created_at: new Date(),
    },
    {
    from: "sameer",
    to: "himanshu",
    msg: "how are you ?",
    created_at: new Date(),
    },
    {
    from: "gaurav",
    to: "radhika",
    msg: "how are you ?",
    created_at: new Date(),
    },
    {
    from: "kapil",
    to: "ankit",
    msg: "how are you ?",
    created_at: new Date(),
    },
    {
    from: "raj",
    to: "jay",
    msg: "how are you ?",
    created_at: new Date(),
    },
    {
    from: "jay",
    to: "vaibhavi",
    msg: "how are you ?",
    created_at: new Date(),
    },
];

Chat.insertMany(allChats);