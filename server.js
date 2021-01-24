const express = require('express');
const mongoose = require('mongoose')
const app = express();

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//api
app.use('/api/boards', require('./routes/api/boards'));
app.use('/api/cards', require('./routes/api/cards'));
app.use('/api/lists', require('./routes/api/lists'));
app.use('/api/auth', require('./routes/api/auth'));



// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}



//mongodb
const config = require('config')
const db = config.get('mongoURI')
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, })
    .then(() => console.log('Database connected'))
    .catch(error => console.log(error))



//port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

