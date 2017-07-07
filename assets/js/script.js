   $(document).ready(function(){
                var max = 649;
                for(var i = 1; i <= max; i++){
                    $(".pokemon").append("<img src=\"https://pokeapi.co/media/img/" + i + ".png\" id=\"" + i + "\" class=\"pokemonImg\">");
                };
                
                $(".pokemon").on("click", "img", function(e){
                    $(".pokedexName").html("");
                    $(".attributes").html("");
                    $("#height").html("");
                    $("#weight").html("");
                    $("#types").html("");

                    
                });
                   
            });