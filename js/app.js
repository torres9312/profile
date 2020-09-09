var cont;
var LIMIT = 3;
var MIN = 1;

window.onload = function() {
    $('#video1').show();
    cont = 1;
  };

function advance(e){
    $("#player"+cont).trigger('pause');
    if(cont == LIMIT){
        $("#video"+cont).hide();
        $("#video1").fadeIn(500);
        cont = 1;
    }else{
        $("#video"+cont).hide();
        cont++;
        $("#video"+cont).fadeIn(500);  
    }
}
function preview(e){
    $("#player"+cont).trigger('pause');
    if(cont == 1){
        $("#video"+cont).hide();
        $("#video"+LIMIT).fadeIn(500);
        cont = LIMIT;
    }else{
        $("#video"+cont).hide();
        cont--;
        $("#video"+cont).fadeIn(500);  
    }
}
