// JavaScript Document

$(document).ready(function(){

	//Web Services para mostrar nombre e imagen de productos
	$("#productos").on('click',function(){

		$.getJSON("http://pymesv.com/cliente04sw/servicio/ws/producto.php")
		.done(function(datos_del_ws){

			$.each(datos_del_ws, function(indice,valor){
				$("#producto ul").append("<li>"+ valor.nombre+"<br>$"+valor.precio+"<br>"+'<img src="'+valor.img+'" width="80%"></li>');
			});

		});

	});
	//Web Services para mostrar paises disponibles
	$("#paises").on('click',function(){

		$.getJSON("http://pymesv.com/cliente04sw/servicio/ws/pais.php")
		.done(function(datos_del_ws){

			$.each(datos_del_ws, function(indice,valor){
				$("#pais table").append("<tr><td>"+ valor.Codigo+"</td><td>"+valor.Pais+"</td></tr>");

			});

		});

	});

	//-----------------------------------
});