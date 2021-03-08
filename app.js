const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static("public")); //For Static behaviour
const PORT = 3000;
var newItems=["Buy Food","Cook Food","Eat Food"];



app.get('/',(req,res) =>{
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        year: "numeric"
    };

    var day=today.toLocaleDateString("en-US",options);

    res.render('list',{
        kindOfDay : day,
        newListItems:newItems
    });
});

app.post('/',  (req, res)=> {
    var item =req.body.newItem;
    newItems.push(item);
    res.redirect("/");
})


app.listen(PORT, () => console.log(`Example app listening on port port!`));