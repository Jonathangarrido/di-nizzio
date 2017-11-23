'use strict';

miMenuCtrl.$inject = ['Modal'];
function miMenuCtrl(Modal) {
  var vm = this;

  angular.element(document).ready(function () {
    $('.preload').fadeOut()
    console.log('sdfsdfsdfsdfsdf')
  });

  // init();

  // function init(){
  //   console.log('sdfsdfsdfsdfsdf')
  //   $('.preload').fadeOut()
  // };
  
  vm.menu = function(){
    $('.nav-button, nav').toggleClass('open');
    $('nav a').unbind().click(function(){
      $('.nav-button, nav').toggleClass('open');
    })
  }
  vm.modal = function(){
    Modal.open('contacto')
  }
}


angular.module('miMenu', [])

  .component('miMenu',{
    templateUrl: './js/components/menu/mi-menu.html',
    controller: miMenuCtrl
  });
