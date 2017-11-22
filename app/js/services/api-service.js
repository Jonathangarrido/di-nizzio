(function () {
  'use strict';

  Consultas.$inject = ['$location', '$resource','$http'];
  function Consultas($location,$resource,$http){

    var service = {
      get_slider: get_slider,
      get_recetas: get_recetas,
      get_id: get_id
    };

    return service;

    /////////////////////////////////////////

    // SLIDER
    function get_slider(){
      var todos = [
        {
          imagen: 'chifferini.png',
          titulo: 'Spaghetti',
          tipo: 'Spaghetti 5',
          descripcion: 'Clásico e infaltable en nuestras despensas'
        },
        {
          imagen: 'farfalle.png',
          titulo: 'Farfalle',
          tipo: 'Tipo Corbatita',
          descripcion: 'Viste de etiquetas tus platos más cotidianos'
        },
        {
          imagen: 'fusilli.png',
          titulo: 'Fusilli',
          tipo: 'Espirales',
          descripcion: 'Versátiles y aptos para toda preparación'
        },
        {
          imagen: 'spaghetti.png',
          titulo: 'Spaghetti',
          tipo: 'Spaghetti 5',
          descripcion: 'lásico e infaltable en nuestras despensas'
        },
        {
          imagen: 'vermicelli.png',
          titulo: 'Vermicelli',
          tipo: 'Cabellos de Ángel',
          descripcion: 'El invitado especial de sopas y consomés'
        },
        {
          imagen: 'chifferini.png',
          titulo: 'Spaghetti',
          tipo: 'Spaghetti 5',
          descripcion: 'Clásico e infaltable en nuestras despensas'
        }
        
      ]
      return todos;
    }


    // TODAS LAS RECETAS
    function get_recetas(){
      var productos = [
        {
          id: 'spaghetti-putanesca',
          imagen: 'spaguetti-putanesca.jpg',
          titulo: 'Spaghetti Putanesca',
          descripcion: 'Clásico e infaltable en nuestras despensas'
        },
        {
          id: 'farfalle-bolognesa',
          imagen: 'farfalle-bolognesa.jpg',
          titulo: 'Farfalle Bolognesa',
          descripcion: 'Viste de etiquetas tus platos más cotidianos'
        },
        {
          id: 'tortilla-de-cabellos-de-angel',
          imagen: 'tortilla-cabellos-angel.jpg',
          titulo: 'Tortilla de cabellos de ángel',
          descripcion: 'Versátiles y aptos para toda preparación'
        },
        {
          id: 'spaghetti-con-camaromes-y-brocoli',
          imagen: 'spaghetti-camarones-brocoli.jpg',
          titulo: 'Spaghetti con camaromes y brócoli',
          descripcion: 'lásico e infaltable en nuestras despensas'
        },
        {
          id: 'sopa-de-cabellos-de-angel',
          imagen: 'sopa-cabellos-angel.jpg',
          titulo: 'Sopa de cabellos de ángel',
          descripcion: 'El invitado especial de sopas y consomés'
        },
      ]
      return productos;
    }

    // RECETA ESPECIFICA
    function get_id(id){
      var filtro = service.get_recetas().filter(function(receta){
        return receta.id === id
      })
      return filtro[0];
    }


  }



  angular
    .module('apiService', [])
    .factory('Consultas', Consultas)
    // .constant('BaseUrl', 'http://www.dailyfoods.cl/parachuparselosdedos/api');
    // .constant('BaseUrl', 'http://localhost:8888/daily/app/api');


})();