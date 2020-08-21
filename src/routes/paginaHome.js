module.exports = (app) =>{
    app.get('/',(req,res) =>{
        app.src.controllers.controle.index(app,req,res);
    });
}