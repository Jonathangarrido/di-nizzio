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
          imagen: 'spaghetti.png',
          titulo: 'Spaghetti',
          tipo: 'Spaghetti 5',
          descripcion: 'lásico e infaltable en nuestras despensas'
        },
        {
          imagen: 'fusilli.png',
          titulo: 'Fusilli',
          tipo: 'Espirales',
          descripcion: 'Versátiles y aptos para toda preparación'
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
        },
        {
          imagen: 'farfalle.png',
          titulo: 'Farfalle',
          tipo: 'Tipo Corbatita',
          descripcion: 'Viste de etiquetas tus platos más cotidianos'
        },
        {
          imagen: 'chifferini.png',
          titulo: 'Spaghetti',
          tipo: 'Spaghetti 5',
          descripcion: 'Clásico e infaltable en nuestras despensas'
        },
        
      ]
      return todos;
    }


    // TODAS LAS RECETAS
    function get_recetas(){
      var productos = [
        {
          id: 'spaghetti-putanesca',
          imagen: 'spaguetti-putanesca.jpg',
          fondo: 'unnamed.jpg',
          titulo: 'Spaghetti Putanesca',
          ingredientes: ' 680 grs. de tomates frescos y maduros o 650 grs. de tomates enlatados-- Sal gruesa para cocinar la pasta y sazonar la salsa-- 2 dientes de ajos medianos pelados-- 1/2 taza de aceite de oliva-- 220 grs. de aceitunas negras amargas de Azapa en salmuera-- 3 anchoas en sal o 6 filetes de anchoas en aceite-- 4 cucharadas de alcaparras en vinagre-- 2 cucharadas de pasta de tomates-- Pimienta fresca-- 1/2 cucharadita de té de hojuelas de pimiento rojo-- 450 grs. de spaghetti, preferentemente importado de Italia',
          preparacion: 'Si se van a usar tomates frescos, blanquearlos en agua hirviendo con sal. Sacarles la cáscara y cortarlos en pedazos. Luego, pasarlos por un prensa puré y ponerlos en un bowl de vidrio. Reservar.--Cortar el ajo en pedazos grandes. Calentar el aceite en un sartén a temperatura media, echar los ajos y saltearlos entre 2 a 3 minutos o hasta que tomen un color dorado claro.--Cortar los filetes de anchoas en pedazos de 2,5 cms. cada uno. Posteriormente, agregar los tomates a la sartén, luego las aceitunas, anchoas, alcaparras y la pasta de tomates. Mezclar bien y sazonar con sal, pimienta y hojuelas de pimiento rojo. Cocinar por 15 minutos a temperatura media revolviendo de vez en cuando con una cuchara de palo.--Cocinar la pasta en agua hirviendo al dente, por 9 a 12 minutos. Colarla, ponerla en una fuente grande, echar la salsa encima y mezclar bien. Por último, cambiar la pasta a otra fuente previamente entibiada y servir de inmediato.'
        },
        {
          id: 'farfalle-bolognesa',
          imagen: 'farfalle-bolognesa.jpg',
          fondo: 'unnamed.jpg',
          titulo: 'Farfalle Bolognesa',
          ingredientes: '',
          preparacion: 'Viste de etiquetas tus platos más cotidianos'
        },
        {
          id: 'tortilla-de-cabellos-de-angel',
          imagen: 'tortilla-cabellos-angel.jpg',
          fondo: 'unnamed.jpg',
          titulo: 'Tortilla de cabellos de ángel',
          ingredientes: '',
          preparacion: 'Versátiles y aptos para toda preparación'
        },
        {
          id: 'spaghetti-con-camaromes-y-brocoli',
          imagen: 'spaghetti-camarones-brocoli.jpg',
          fondo: 'unnamed.jpg',
          titulo: 'Spaghetti con camaromes y brócoli',
          ingredientes: '',
          preparacion: 'lásico e infaltable en nuestras despensas'
        },
        {
          id: 'sopa-de-cabellos-de-angel',
          imagen: 'sopa-cabellos-angel.jpg',
          fondo: 'unnamed.jpg',
          titulo: 'Sopa de cabellos de ángel',
          ingredientes: '',
          preparacion: 'El invitado especial de sopas y consomés'
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
