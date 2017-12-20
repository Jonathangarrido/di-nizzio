'use strict';

miProductoCtrl.$inject = ['Consultas','$location','Analytics'];
function miProductoCtrl(Consultas,$location,Analytics) {
  var vm = this;
  vm.receta = [];


  activate();


  //////////////////////////////////////


  function activate(){
    setTimeout(top, 400);
    console.log('producto')
    // getReceta();
    // setTimeout(top, 400);
    
  }
  
   // TOP
   function top(){
    window.scrollTo(0,0); 
  }

  function getProducto(){
    var url2 = $location.path().split('/');
    var url = url2[2];

    vm.receta = Consultas.get_id(url);

    
    var str = vm.receta.preparacion;
    var filtroPreparacion = str.split('--');
    vm.receta.preparacion = filtroPreparacion;

    var str2 = vm.receta.ingredientes;
    var filtroIngredientes = str2.split('--');
    vm.receta.ingredientes = filtroIngredientes;

    Analytics.trackEvent('Producto','Producto: '+vm.receta.titulo);
  }

}




angular.module('miProducto', [])

  .component('miProducto',{
    templateUrl: './js/components/producto/producto.html',
    controller: miProductoCtrl
  });
