const mongoose = require('mongoose')

//model
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://tich-hop:admin@cluster0.9vllm.mongodb.net/demo-f8?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log('$$$$$$$ Connect successfully!!!!')
    } catch (error) {
        console.log('@@@@@@ Connect failed!!!!')

    }
}

module.exports = { connect }