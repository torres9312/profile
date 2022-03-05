let mountain = document.getElementById('mountain');
let men = document.getElementById('men');
let text = document.getElementById('text');
let cover = document.getElementById('cover');
let sheet = document.getElementById('sheet');
/* mountain.style.transform = 'scale(1.03)'; */

var scale = 1;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      /* toast.addEventListener('mouseenter', Swal.stopTimer) */
      /* toast.addEventListener('mouseleave', Swal.resumeTimer) */
    }
  })


  function scrollToElement(section, e){
      e.preventDefault();
      /* document.getElementById(section).scrollIntoView(); */

      if(!cover.classList.contains('hide')){
          cover.classList.add('hide');
      }

      switch (section) {
          case '1':
            window.scrollTo(0, 809);
              break;
          case '2':
            window.scrollTo(0, 1366);
              break;
          case '3':
            window.scrollTo(0, 1894);
              break;
          case '4':
            window.scrollTo(0, 2697);
              break;
          case '5':
            window.scrollTo(0, 3369);
              break;
      
          default:
              break;
      }
      
  }


$(document).ready(function(){
    const elText = $('#text-animation');
    const eltext2 = $('#text-animation');

    const text = "Hola Mundo";

    /* CHARTS SKILLS */
    $('#php').css('width', '70%');
    $('#javascript').css('width', '90%');
    $('#cmas').css('width', '50%');
    $('#java').css('width', '70%');
    $('#html').css('width', '100%');
    $('#css').css('width', '90%');
    $('#laravel').css('width', '50%');
    $('#angular').css('width', '80%');
    $('#node').css('width', '30%');
    $('#mysql').css('width', '80%');
    $('#postgre').css('width', '50%');
    $('#typescript').css('width', '60%');
    $('#ionic').css('width', '40%');
    

    let idx = 1; 
    let speed = 300 / 2;

    writeText();


    function writeText(){
        elText.html(text.slice(0,idx)+"<span class='TypeCursor'>&nbsp;</span>");
        /* eltext2.html(text2.slice(0,idx)+"<span class='TypeCursor'>&nbsp;</span>"); */

        idx++;

        if(idx > text.length){
            /* console.log($('#text-animation').html()); */
            setTimeout(function(){
                idx = 1;
                setTimeout(writeText,speed);
            }, 3000);
            
            
        }else{
            setTimeout(writeText,speed);
        }

        
    }

    

            var events = [{
                    date: '2015 - 2019',
                    content: 'Universidad Veracruzana <small>Ingeniería de Software</small><i class="fa fa-graduation-cap icon-timeline"></i>'
                },
                {
                    date: 'Ene 2020 - Jul 2020',
                    content: 'Facultad de Estadística e Informática <small> Desarrollador en Java </small><img class="img-timeline" src="src/img/java.png" alt="java">'
                },
                {
                    date: 'Agost 2020 - Dic 2020',
                    content: 'Instituto Educativo Panamericano <small>Desarrollador PHP</small><img class="img-timeline" src="src/img/php.png" alt="php">'
                },
                {
                    date: 'Agost 2020 - Dic 2020',
                    content: 'Americleann - USA <small>Desarrollador Web</small><img class="img-timeline" src="src/img/html.png" alt="javascript">'
                },
                
                {
                    date: 'Ene 2021 - Agost 2021',
                    content: 'Fidelicoin <small>Desarrollador Angular & Laravel</small><img class="img-timeline" src="src/img/angular.png" alt="javascript">'
                },
                {
                    date: 'Sept 2021 - Dic 2021',
                    content: 'SEDARPA Veracruz <small>Desarrollador Laravel</small><img class="img-timeline" src="src/img/laravel.png" alt="javascript">'
                },
                {
                    date: 'Ene 2021 - Ene 2022',
                    content: 'Gobierno del Estado De Veracruz <small>Angular & Java EE</small><img class="img-timeline" src="src/img/angular.png" alt="javascript">'
                }
            ];

            $('#experience-timeline').roadmap(events, {
                eventsPerSlide: 4,
                slide: 1,
                prevArrow: '<i class="fa fa-chevron-left"></i>',
                nextArrow: '<i class="fa fa-chevron-right"></i>'
            });
            

   
});

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    /* console.log(value); */
    mountain.style.width = 100 - value /7 + '%'; 
    men.style.width = 100 - value /7 + '%'; 
    /* men.style.right = value /20 + '%'; 
    mountain.style.left = value /20 + '%';  */
    text.style.top = value * .10 + '%';
    sheet.style.top = value * .10 + '%';
    text.style.opacity = (180 - value) / 100;

    if(value > 465){
        cover.classList.add('hide');
    }else{
        cover.classList.remove('hide');
    }
})

$('#form-mail').on('submit', function(e){
    e.preventDefault();
    var form = $(this).serializeArray();
    var formClean = [];
    const formData = new FormData();

      
      for (let index = 0; index < form.length; index++) {
            const element = form[index];
            element.value = element.value.trim();

            /* console.log(element.value.length); */
          if(element.name != 'company' ){
            if(element.value === ''   || element.value.length === 0){
                Toast.fire({
                    icon: 'warning',
                    title: 'No puedes enviar caracteres vacios en tu mensaje.'
                })
                /* $('#sendemail').css('pointer-events', 'auto'); */
                return;

            }

            if(element.value.length > 400){
                Toast.fire({
                    icon: 'warning',
                    title: 'Parece que tu mensaje es muy largo, intenta con otro mensaje.'
                })
                /* $('#sendemail').css('pointer-events', 'auto');   */
                return;
            }

          }

          formData.append(element.name,element.value);
          
      }
        console.log(formData.get('message'));


        sendContactData(formData);
      
      
})





function clearformEmail(){
    $('#form-mail #name').val("");
    $('#form-mail #company').val("");
    $('#form-mail #email').val("");
    $('#form-mail #location').val("");
    $('#form-mail #message').val("");
}


function sendContactData(data){
    $.ajax({
        url: 'functions/email.php',
        type: 'POST',
        dataType: 'json',
        processData: false,
        contentType: false,
        data: data,
        beforeSend : function (){
            $('#sendemail').html('Enviando...');
            $('#sendemail').css('pointer-events', 'none');  
        }
    }).done(function(res){
        $('#sendemail').html('Enviar');  
        $('#sendemail').css('pointer-events', 'auto'); //RESTAURAR EVENTOS DEL BOTON
        
        Toast.fire({
            icon: 'success',
            title: 'Mensaje enviado,<br> me pondré en contacto con usted.'
        })
        clearformEmail();
        
        console.log("Mensaje:"+ res.message);

    }).always(function(){

    }).fail(function(res,status,error){
        $('#sendemail').html('Enviar');   
        $('#sendemail').css('pointer-events', 'auto'); //RESTAURAR EVENTOS DEL BOTON
        Toast.fire({
            icon: 'error',
            title: 'Error al enviar el mensaje'
        })
        console.log(res);
    });
}


