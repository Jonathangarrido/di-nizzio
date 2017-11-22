'use strict';


Modal.$inject = [];
function Modal(){

  var service = {
    open: open,
    cerrar: cerrar,
    type: ''
  };

  return service;

  /////////////////////////////////////////

  function open(type){
    $('mi-modal').fadeIn('fast')
    $('body,html').css('overflow','hidden')

    service.type = type;

  }

  function cerrar(){
    $('mi-modal').fadeOut('fast')
    $('body,html').css('overflow','scroll')
  }

}

angular
  .module('Modal', [])
  .factory('Modal', Modal)




miModalCtrl.$inject = ['Modal'];
function miModalCtrl(Modal) {
  var vm = this;

  vm.modal = Modal;

  activate();


  //////////////////////////////////////


  function activate(){
    
  }

  vm.cerrar = function(){
    vm.modal.cerrar()
  }

}

angular.module('miModal', [])

  .component('miModal',{
    bindings: {},
    templateUrl: './js/components/modal/modal.html',
    controller: miModalCtrl
  });
