'use strict';

miHomeCtrl.$inject = ['Consultas','Analytics','Modal'];
function miHomeCtrl(Consultas,Analytics,Modal) {
  var vm = this;
  vm.slider = [];
  vm.recetas = [];

  activate();


  //////////////////////////////////////


  function activate(){
    getSlider();
    getRecetas();
  }
  //

  function slider(){
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
  
    $('.bxslider').bxSlider({
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
      moveSlides: 3,
      slideWidth: 270
    });
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