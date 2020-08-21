module.exports.index = (app,req,res) =>{
    var conn = app.config.bdConnection();
    var NoticiasDAO = new app.src.models.NoticiasDAO(conn);
    NoticiasDAO.get5novas(function(erro,resultado){
        res.render('index',{cinco:resultado});
    });
}

module.exports.cadastro = (app,req,res) =>{
    res.render('cadastro');
}

module.exports.salvar = (app,req,res) =>{
    var newCadastro = req.body;
    var conn = app.config.bdConnection();
    var NoticiasDAO = new app.src.models.NoticiasDAO(conn);
    NoticiasDAO.salvarDados(newCadastro,function(erro,resultado){
        res.redirect('/noticias');
    });
}

module.exports.noticias = (app,req,res) =>{
   var conn = app.config.bdConnection();
   var NoticiasDAO = new app.src.models.NoticiasDAO(conn);
   NoticiasDAO.getNoticias(function(erro,resultado){
       res.render('noticias',{noticias:resultado});
   });
}

module.exports.select = (app,req,res) =>{
    var id_noticia = req.query;
    var conn = app.config.bdConnection();
    var NoticiasDAO = new app.src.models.NoticiasDAO(conn);
    NoticiasDAO.selectId(id_noticia,function(erro,resultado){
        res.render('select',{id:resultado});
    });
}