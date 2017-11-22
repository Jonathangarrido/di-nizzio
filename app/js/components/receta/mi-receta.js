'use strict';

miRecetaCtrl.$inject = ['Consultas','$location','Analytics'];
function miRecetaCtrl(Consultas,$location,Analytics) {
  var vm = this;
  vm.receta = [];


  activate();


  //////////////////////////////////////


  function activate(){
    setTimeout(top, 400);
    getReceta();
    // setTimeout(top, 400);
    
  }
  
   // TOP
   function top(){
    window.scrollTo(0,0); 
  }

  function getReceta(){
    var url2 = $location.path().split('/');
    var url = url2[2];
    console.log(url)

    vm.receta = Consultas.get_id(url);
    console.log('recetas',vm.receta)
  }

  // Analytics
  function analytics(){
    // Analytics.trackEvent('Producto: '+receta.producto,'Receta','Receta: '+receta.titulo);
  }

}




angular.module('miReceta', [])

  .component('miReceta',{
    templateUrl: './js/components/receta/mi-receta.html',
    controller: miRecetaCtrl
  });
