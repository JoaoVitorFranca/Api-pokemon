var erro = false;
$(document).ready(function(){
    $("#search").click(function(){
        var req = $("#txtReq").val();
        
        var urlStr = "https://pokeapi.co/api/v2/pokemon/"+req;

        $.ajax({
            url: urlStr,
            type: "get",
            dataType: "json",
            success: function(data){
                console.log(data);
            var tipos ='';
            var movimento = '';
            document.getElementById('nome').innerHTML=(`Nome: ${data.name}`);

            for(var i=0;i<data.types.length;i++){
                tipos = tipos+ data.types[i].type.name
                if(i < data.types.length - 1){
                    tipos = tipos+" | "
                }
            }
            document.getElementById('tipo').innerHTML=(`Tipo(s): ${tipos}`);
            for(var i=0;i<data.moves.length;i++){
                movimento = movimento+ data.moves[i].move.name
                if(i< data.moves.length - 1){
                    movimento = movimento + " | "
                }
            }
            document.getElementById('golpes').innerHTML=(`Golpes: ${movimento}` );
            document.getElementById('peso').innerHTML=(`Peso: ${data.weight/10} kg`);
            document.getElementById('Altura').innerHTML=(`Altura: ${data.height/10} m`);
            var imagem = "";
            imagem = data.sprites.front_default;
            var img = "";
            img = data.sprites.back_default;
            document.getElementById('costas').src=img;
            document.getElementById('foto').src=imagem;
            console.log(data.height)

            },
            error:function(erro){
                alert('pokémon não encontrado!')
            } 
        });
    });
}); 


