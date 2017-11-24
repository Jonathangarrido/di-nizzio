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
    $('mi-modal').fadeOut('fast',function(){
      service.type = '';
    })
    $('body,html').css('overflow','scroll')
    
  }

}

angular
  .module('Modal', [])
  .factory('Modal', Modal)




miModalCtrl.$inject = ['Modal','$http','$scope','Analytics'];
function miModalCtrl(Modal,$http,$scope,Analytics) {
  var vm = this;

  vm.modal = Modal;
  vm.user = {};

  activate();


  //////////////////////////////////////


  function activate(){
    
  }

  vm.cerrar = function(){
    vm.modal.cerrar()
  }

  vm.submitForm = function() {
    
    $http({
      method  : 'POST',
      url     : './php/formulario.php',
      data    : vm.user, //forms user object
      headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
    })
      .then(function (success){
        console.log(success.data)
        if(success.data==='bien'){
          vm.mensaje = 'Mensaje enviado correctamente.';
          vm.estado = 'icon-check';
          // Analytics.trackEvent('correo','enviado');
          setTimeout(function(){
            vm.user = {}
            vm.mensaje = '';
            vm.estado = '';
            vm.modal.cerrar()
          },3000)
        }else{
          vm.mensaje = 'Error al enviar. Intentelo nuevamente.';
          
        }
      },function (error){
        vm.mensaje = 'Error en la conexión.'
      });

  };

}

angular.module('miModal', [])

  .component('miModal',{
    bindings: {},
    templateUrl: './js/components/modal/modal.html',
    controller: miModalCtrl
  });
