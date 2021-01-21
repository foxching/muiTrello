const express = require('express');
const app = express();

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//api
app.use('/api/boards', require('./routes/api/boards'));
app.use('/api/cards', require('./routes/api/cards'));
app.use('/api/lists', require('./routes/api/lists'));


//port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

