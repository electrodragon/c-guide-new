const express = require("express");

const app = express();

app.set('view engine','ejs');
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index",{
      title: 'C - Quick Guide',
      stylesheet: 'css/styles.css',
    });
});

app.listen(3000, () => {
    console.log("Server is Running !");
});
