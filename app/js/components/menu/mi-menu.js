'use strict';

// miMenuCtrl.$inject = [];
function miMenuCtrl() {
  var vm = this;
  
  vm.menu = function(){
    $('.nav-button, nav').toggleClass('open');
    $('nav a').unbind().click(function(){
      $('.nav-button, nav').toggleClass('open');
    })
  }
}


angular.module('miMenu', [])

  .component('miMenu',{
    templateUrl: './js/components/menu/mi-menu.html',
    controller: miMenuCtrl
  });
