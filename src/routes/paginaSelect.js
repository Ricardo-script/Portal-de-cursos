module.exports = (app) =>{
    app.get('/select',(req,res) =>{
        app.src.controllers.controle.select(app,req,res);
    });
}