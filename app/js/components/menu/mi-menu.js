'use strict';

miMenuCtrl.$inject = ['Modal','$scope', '$location','Analytics'];
function miMenuCtrl(Modal, $scope, $location, Analytics) {
  var vm = this;

  angular.element(document).ready(function () {
    $('.preload').fadeOut()
  });

  $(window).scroll(function () {
    var currentScrollPos = $(document).scrollTop();
		$('nav a').each(function () {
      var curLink = $(this);
      var refElem = $('#'+curLink.data('menu'));
      if(refElem.position() !== undefined){
        if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
          $('nav a').removeClass("active");
          curLink.addClass("active");
        }else {
        curLink.removeClass("active");
        }
      }
    })
  })

  vm.menu = function(){
    $('.nav-button, nav').toggleClass('open');
    $('nav a').unbind().click(function(){
      $('.nav-button, nav').toggleClass('open');
    })
  }
  vm.nav = function(id){
    if($('#'+id).length > 0){
      $("html, body").animate({ scrollTop: $('#'+id).offset().top - 95 }, 1000);
      Analytics.trackEvent('/menu',id);
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
