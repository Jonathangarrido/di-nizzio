'use strict';

miProductoCtrl.$inject = ['Consultas','$location','Analytics'];
function miProductoCtrl(Consultas,$location,Analytics) {
  var vm = this;
  vm.producto = [];


  activate();


  //////////////////////////////////////


  function activate(){
    setTimeout(top, 400);
    getProducto();
    navSelect();
    
  }
  
  // TOP
  function top(){
    window.scrollTo(0,0); 
  }

  function navSelect(){
    $('nav a').each(function(){
      $(this).removeClass('active');
    })
    $('nav a[data-menu="productos"]').addClass('active');
  }

  function getProducto(){
    var url2 = $location.path().split('/');
    var url = url2[2];

    vm.producto = Consultas.get_producto_id(url);
    
    // var str = vm.producto.preparacion;
    // var filtroPreparacion = str.split('--');
    // vm.producto.preparacion = filtroPreparacion;

    // var str2 = vm.producto.ingredientes;
    // var filtroIngredientes = str2.split('--');
    // vm.producto.ingredientes = filtroIngredientes;

    Analytics.trackEvent('Producto','Producto: '+vm.producto.titulo);
  }

  vm.descarga = function(){
    Analytics.trackEvent('Producto','Descarga: '+vm.producto.titulo);
  }

}




angular.module('miProducto', [])

  .component('miProducto',{
    templateUrl: './js/components/producto/producto.html',
    controller: miProductoCtrl
  });
