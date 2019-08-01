var content = document.querySelector('#hamburger-content');
var sidebarBody = document.querySelector('#hamburger-sidebar-body');
var button = document.querySelector('#hamburger-button');
var overlay = document.querySelector('#hamburger-overlay');
var sidebar = document.querySelector('#hamburger-sidebar');
var activatedClass = 'hamburger-activated';

sidebarBody.innerHTML = content.innerHTML;			

button.addEventListener('click', function(e) {
	e.preventDefault();

	this.parentNode.classList.add(activatedClass);
});

button.addEventListener('keydown', function(e) {
	if (this.parentNode.classList.contains(activatedClass))
	{
		if (e.repeat === false && e.which === 27)
			this.parentNode.classList.remove(activatedClass);
	}
});

overlay.addEventListener('click', function(e) {
	e.preventDefault();

	this.parentNode.classList.remove(activatedClass);
});


sidebar.addEventListener('click', function(e) {
	//e.preventDefault();

	this.parentNode.classList.remove(activatedClass) 
});





$('a[href^="#presentation"]').click(function(e){  
    var id = $(this).attr("href"); //recup l'id
    var offset = $(id).offset().top //cherche la distance
    $('html, body').animate({scrollTop: offset - 150}, 'slow'); //scroll

}); 


$('a[href^="#competence"]').click(function(e){  
    var id = $(this).attr("href"); //recup l'id
    var offset = $(id).offset().top //cherche la distance
    $('html, body').animate({scrollTop: offset -130 }, 'slow'); //scroll

}); 

$('a[href^="#portfolio"]').click(function(e){  
    var id = $(this).attr("href"); //recup l'id
    var offset = $(id).offset().top //cherche la distance
    $('html, body').animate({scrollTop: offset   }, 'slow'); //scroll

}); 



$('a[href^="#contact"]').click(function(e){  
    var id = $(this).attr("href"); //recup l'id
    var offset = $(id).offset().top //cherche la distance
    $('html, body').animate({scrollTop: offset - 150}, 'slow'); //scroll

}); 



$('a[href^="#top"]').click(function(e){  
    var id = $(this).attr("href"); //recup l'id
    var offset = $(id).offset().top //cherche la distance
    $('html, body').animate({scrollTop: offset - 150}, 'slow'); //scroll

}); 




/* -----------------------------   Competences ----------------------*/



$(window).bind('load scroll', function ()
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
 
    var elemTop = $('#competence').offset().top;
    var elemBottom = elemTop + $('#competence').height(); 
    if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop))   
    {
      $(window).off('load scroll');



$('.animPourc').each(function(){

  $(this).animate({width: $(this).attr('data-pourcent')}, 2000);

});


    }
     
    });


/*-------------------- SLIDER ----------------------------*/



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        760:{
            items:2
        },
        1000:{
            items:3
        }
    }
})




/*-------------- CONTACT -------------------*/

// Also see: https://www.quirksmode.org/dom/inputfile.html

var inputs = document.querySelectorAll('.file-input')

for (var i = 0, len = inputs.length; i < len; i++) {
  customInput(inputs[i])
}

function customInput (el) {
  const fileInput = el.querySelector('[type="file"]')
  const label = el.querySelector('[data-js-label]')
  
  fileInput.onchange =
  fileInput.onmouseout = function () {
    if (!fileInput.value) return
    
    var value = fileInput.value.replace(/^.*[\\\/]/, '')
    el.className += ' -chosen'
    label.innerText = value
  }
}