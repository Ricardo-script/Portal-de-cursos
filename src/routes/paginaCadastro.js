module.exports = (app) =>{
    app.get('/cadastro',(req,res) =>{
        app.src.controllers.controle.cadastro(app,req,res);
    });

    app.post('/noticias/salvar',(req,res) =>{
        app.src.controllers.controle.salvar(app,req,res);
    });
}