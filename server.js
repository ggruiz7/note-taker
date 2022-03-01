// const express = require('express');

// const apiRoutes = require('./routes/apiRoutes');

// const htmlRoutes = require('./routes/htmlRoutes');

// // create port
// const app = express();

// const PORT = process.env.PORT || 3001;

// // setup middleware
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(express.static('public'));
// app.use('/', htmlRoutes);
// app.use('/api', apiRoutes);

// // start sevver
// app.listen(PORT, () => {
//     console.log(`app is listening on port: ${PORT}`);
// });

// dependencies
const express = require("express");
const path = require("path");
const { createBrotliCompress } = require("zlib");

// sets up xxpress app
const app = express();
const PORT = process.env.PORT || 3000;

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("/public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// starts server listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
