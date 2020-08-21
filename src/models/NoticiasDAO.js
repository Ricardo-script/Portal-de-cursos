function NoticiasDAO(conn){
    this._conn = conn;
}

NoticiasDAO.prototype.get5novas = function(callback){
    this._conn.query('SELECT * FROM noticias order by data_noticia desc limit 5',callback);
}

NoticiasDAO.prototype.salvarDados = function(newCadastro,callback){
    this._conn.query('INSERT INTO noticias SET ?',newCadastro,callback);
}
NoticiasDAO.prototype.getNoticias = function(callback){
    this._conn.query('SELECT * FROM noticias',callback);
}

NoticiasDAO.prototype.selectId = function(id_noticia,callback){
    this._conn.query('SELECT * FROM noticias WHERE id_noticia =' + id_noticia.id_noticia,callback);
    
}

module.exports = () =>{
    return NoticiasDAO;
}