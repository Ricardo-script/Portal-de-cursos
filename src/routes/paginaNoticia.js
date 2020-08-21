module.exports = (app) =>{
    app.get('/noticias',(req,res) =>{
        app.src.controllers.controle.noticias(app,req,res);
    });
}