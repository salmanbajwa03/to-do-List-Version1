const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static("public")); //For Static behaviour
const PORT = 3000;
var newItems=["Buy Food","Cook Food","Eat Food"];
var workItems=[];



app.get('/',(req,res) =>{
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        year: "numeric"
    };

    var day=today.toLocaleDateString("en-US",options);

    res.render('list',{
        listTitle : day,
        newListItems:newItems
    });
});


app.get("/work",(req,res)=>{
    res.render('list',{
        listTitle : "Work List",
        newListItems:workItems
    }); 
});

app.post('/',  (req, res)=> {

    if(req.body.button ==="Work List")
    {
        var item = req.body.newItem;
        workItems.push(item);
        res.redirect("/work");
    }
    else
    {
        var item =req.body.newItem;
        newItems.push(item);
        res.redirect("/");
    }
});




app.listen(PORT, () => console.log(`Example app listening on port port!`));