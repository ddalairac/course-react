const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true 
        });
        console.log("DB online")
        // const Cat = mongoose.model('Cat', { name: String });

        // const kitty = new Cat({ name: 'Zildjian' });
        // kitty.save().then(() => console.log('meow'));

    } catch (error) {
        console.log(error)
        throw new Error('Error al incializar la base de datos')
    }
}

module.exports = {
    dbConnection
}