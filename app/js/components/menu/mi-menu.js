'use strict';

miMenuCtrl.$inject = ['Modal','$scope', '$location'];
function miMenuCtrl(Modal, $scope, $location) {
  var vm = this;

  angular.element(document).ready(function () {
    $('.preload').fadeOut()
  });

  vm.menu = function(){
    $('.nav-button, nav').toggleClass('open');
    $('nav a').unbind().click(function(){
      $('.nav-button, nav').toggleClass('open');
    })
  }
  vm.nav = function(id){
    if($('#'+id).length > 0){
      $("html, body").animate({ scrollTop: $('#'+id).offset().top }, 1000);
    }else{
      $location.path( "#!/#"+id );
    }
    
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
