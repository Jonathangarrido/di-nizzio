'use strict';

miFooterCtrl.$inject = ['Modal'];
function miFooterCtrl(Modal) {
  var vm = this;

  vm.modal = function(){
    Modal.open('contacto')
  }
}


angular.module('miFooter', [])

  .component('miFooter',{
    templateUrl: './js/components/footer/footer.html',
    controller: miFooterCtrl
  });
