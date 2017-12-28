'use strict';

miHomeCtrl.$inject = ['Consultas','Analytics','Modal'];
function miHomeCtrl(Consultas,Analytics,Modal) {
  var vm = this;
  vm.slider = [];
  vm.recetas = [];

  activate();


  //////////////////////////////////////


  function activate(){
    window.scrollTo(0,0); 
    getSlider();
    getRecetas();
  }
  //

  function slider(){

    $('.bxslider-videos').bxSlider({
      mode: 'horizontal', //'horizontal', 'vertical', 'fade'
      speed: 500, // speed animation
      pager: false, // icon pager
      auto: false,
      pause: 4000, // speed transition
      infiniteLoop: false,
      hideControlOnEnd: true,
      controls: true, // icon arrow
      nextText:'',
      prevText:'',
      onSlideBefore: function($slideElement, oldIndex, newIndex){
        videos(oldIndex);
      }
    });

    $('.bxslider-videos li').each(function(){
      var iframe = $(this).html();
      var newifram = iframe.replace('iframeoculto','');
      $(this).find('.videosIframe').html(newifram)
      $(this).find('.videosIframe .videosIframe').fadeOut()
      $(this).find('.iframeoculto').fadeOut()
    })

    var ancho = jQuery(window).width(),
        bxMinMaxSlides = 1;
  
    if(ancho>340){
      bxMinMaxSlides = 2;
    }
    if(ancho>540){
      bxMinMaxSlides = 3;
    }
    if(ancho>768){
      bxMinMaxSlides = 4;
    }
  
    $('.bxslider2').bxSlider({
      mode: 'horizontal', //'horizontal', 'vertical', 'fade'
      speed: 500, // speed animation
      pager: false, // icon pager
      auto: false,
      pause: 4000, // speed transition
      infiniteLoop: false, 
      hideControlOnEnd: true,
      controls: true, // icon arrow
      nextText:'',
      prevText:'',
      minSlides: bxMinMaxSlides,
      maxSlides: bxMinMaxSlides,
      moveSlides: 1,
      slideWidth: 270
    });

    
  }

  function videos(posicion){
    console.log('function videos')
    if($('.actividades').length === 1){
      var atras = posicion + 1;
      var conteBefore = $('.bxslider-videos li:nth-child('+atras+')');
      var ifra = conteBefore.find('.videosIframe').html();
      conteBefore.find('iframe').remove();
      conteBefore.find('.videosIframe').html(ifra);
    }
    
  }
  

  //obtengo slider
  function getSlider() {
    vm.slider = Consultas.get_slider();
    setTimeout(function(){
      slider();
    },10)
  }

  //obtengo slider
  function getRecetas() {
    vm.recetas = Consultas.get_recetas();
  }

  vm.modal = function(){
    Modal.open('video')
  }

}




angular.module('miHome', [])

  .component('miHome',{
    templateUrl: './js/components/home/mi-home.html',
    controller: miHomeCtrl
  });
