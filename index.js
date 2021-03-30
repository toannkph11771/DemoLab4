var express= require('express');


var app = express();

var expressHbs = require('express-handlebars')

app.engine('handlebars',expressHbs({
        layoutsDir:__dirname + '/views/layouts',
        defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.get('/',function (request,response){

        var name = 'Khanh Toan';

        var arr =['Toan', 'MAnh','alo', 'abc']
        response.render('home',{title:name,
                date:'2021/03/29',
                array: arr
        });
});

//lang nghe http post

app.post('/login',function (request,response){

});

app.listen(process.env.PORT || '3000')