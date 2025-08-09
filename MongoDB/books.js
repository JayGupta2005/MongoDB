const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection sucessesfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        require: true,
    },
    author: {
        type:String,
    },
    price: {
        type: Number,
    },
});

const  Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: 20.00
});

book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})