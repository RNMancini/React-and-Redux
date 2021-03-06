const express = require("express"); 

const app = express();

const main = require("./routes/api/main");
app.get('/', (req, res) => res.send("Hello"));

const port = process.env.PORT || 5000;
app.use("/api/main", main);
app.listen(port, () => console.log('Server running on ${port}'));
