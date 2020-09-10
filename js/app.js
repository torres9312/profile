var cont;
var imgcont;
var LIMIT = 3;
var MIN = 1;

window.onload = function() {
    $('#video1').show();
    cont = 1;
    $('#img1').show();
    imgcont = 1;
  };

function advance(e){
    $("#player"+cont).trigger('pause');
    if(cont == LIMIT){
        $("#video"+cont).hide();
        $("#video"+MIN).show();
        cont = 1;
    }else{
        $("#video"+cont).hide();
        cont++;
        $("#video"+cont).show();  
    }
}

function preview(e){
    $("#player"+cont).trigger('pause');
    if(cont == 1){
        $("#video"+cont).hide();
        $("#video"+LIMIT).show();
        cont = LIMIT;
    }else{
        $("#video"+cont).hide();
        cont--;
        $("#video"+cont).show();  
    }
}


function next(e){

    if(imgcont == LIMIT){
        $("#img"+imgcont).hide();
        $("#img"+MIN).show();
        imgcont = 1;
    }else{
        $("#img"+imgcont).hide();
        imgcont++;
        $("#img"+imgcont).show();  
    }
}
function prev(e){
    
    if(imgcont == 1){
        $("#img"+imgcont).hide();
        $("#img"+LIMIT).show();
        imgcont = LIMIT;
    }else{
        $("#img"+imgcont).hide();
        imgcont--;
        $("#img"+imgcont).show();  
    }
}
