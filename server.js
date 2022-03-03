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

app.use(express.static(__dirname + "/public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// starts server listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
