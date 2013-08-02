
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
  	title: 'My First Blog ' ,
  	file : 'file test' ,
  	div_content : "hello blog"
  	});
};