(function () {
  'use strict';

  Consultas.$inject = ['$location','$http'];
  function Consultas($location,$http){

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
          url: 'spaghetti',
          imagen: 'spaghetti.png',
          titulo: 'Spaghetti',
          tipo: 'Spaghetti 5',
          descripcion: 'clÃ¡sico e infaltable en nuestras despensas'
        },
        {
          url: 'fusilli',
          imagen: 'fusilli.png',
          titulo: 'Fusilli',
          tipo: 'Espirales',
          descripcion: 'VersÃ¡tiles y aptos para toda preparaciÃ³n'
        },
        {
          url: 'vermicelli',
          imagen: 'vermicelli.png',
          titulo: 'Vermicelli',
          tipo: 'Cabellos de Ãngel',
          descripcion: 'El invitado especial de sopas y consomÃ©s'
        },
        {
          url: 'chifferini',
          imagen: 'chifferini.png',
          titulo: 'Chifferini',
          tipo: 'Quifaros o Coditos',
          descripcion: 'Atractiva forma que atrapa los sabores'
        },
        {
          url: 'farfalle',
          imagen: 'farfalle.png',
          titulo: 'Farfalle',
          tipo: 'Tipo Corbatita',
          descripcion: 'Viste de etiquetas tus platos mÃ¡s cotidianos'
        },
        {
          url: 'salsa-de-tomates',
          imagen: 'salsa.png',
          titulo: 'Salsa de Tomates',
          tipo: '',
          descripcion: 'La verdadera receta italiana con trozos de tomate'
        },
        
      ]
      return todos;
    }


    // TODAS LAS RECETAS
    function get_recetas(){
      var productos = [
        {
          id: 'spaghetti-con-Atun-y-Alcaparras',
          imagen: 'spaghetti-atun-alcaparras',
          titulo: 'Spaghetti con Atún y Alcaparras',
          ingredientes: ' 400 grs. de Spaghetti Di Nizzio.-- 1 cucharada de aceite oliva.-- 1 cebolla pequeña picada.-- 2 dientes de ajo machacados.-- 1 cucharada de jugo de limón.-- 1/2 taza de perejil fresco y picado.-- 1/4 de cucharada de marinÃ© (opcional).-- 2 latas de atún.',
          preparacion: 'Cocine la pasta por 11 minutos (hasta que está al dente), escurra y reserve. SofrÃ­a la cebolla y el ajo en aceite y luego, agregue las alcaparras, tomate, jugo de limón, merkén y perejil.--Deje espesar la mezcla por 3 minutos aproximadamente y añade atún hasta que alcance la misma temperatura. Por Último, integre la salsa junto al Spaghetti Di Nizzio.'
        },
        {
          id: 'sopa-de-verduras',
          imagen: 'sopa-verduras',
          titulo: 'Sopa de Verduras',
          ingredientes: ' 1 paquete de Vermicelli Di Nizzio.-- 1 litro de agua.-- 1/2 taza de cebolla picada.-- 1/2 taza de zanahoria picada en rodajas.-- 3 cucharadas de apio picado.-- 2 unidades cubito de caldo de verduras.-- 1/2 taza puerro o cebollÃ­n.-- 2 cucharadas de aceite.-- Sal y pimienta a gusto.',
          preparacion: 'En un olla salteÃ© la cebolla, la zanahoria, el puerro o cebollÃ­n (reserve un poco para decorar) y el apio picado junto al aceite. Cocine durante 3 minutos y agregue al agua el caldo de cubo de verduras y los Vermicelli Di Nizzio. Cocine hasta que la pasta está al dente y condimentar. Sirva en un plato hondo y decore con puerro o cebollÃ­n picado.-- Â¡Listo! Ya tienes una rica sopa de verduras.'
        },
        {
          id: 'chifferini-a-la-crema',
          imagen: 'chifferini-crema',
          titulo: 'Chifferini a la Crema',
          ingredientes: ' 1 paquete de Chifferini Di Nizzio.-- 1 1/2 taza de tomates cherry cortados a la mitad.-- 1 1/2 taza de queso gruyere o parmesano en hebras.-- 2 Ã³ 3 láminas de salmón ahumado (opcional).-- 200 cc de crema espesa.-- 2 dientes de ajo picados finamente.-- 2 1/2 cucharadas de aceite de oliva.-- Albahaca fresca (opcional).-- Sal y pimienta a gusto.',
          preparacion: 'Prepare el Chifferini Di Nizzio, calentando primero el sartén y sofrÃ­a el ajo picado con aceite de oliva, revolviendo constantemente. Una vez dorado, agregue los tomates cherry y saltear, hasta que están ligeramente asados. Salpimiente a gusto. En un sartén aparte, precaliente la crema, aliñe y agregue las láminas de salmón. La idea es que alcance algo de temperatura, pero que no alcance a hervir. Por Último incorpore la salsa a la pasta, mezcle y decore la pasta poniendo algunos tomates asados y albahaca. Como toque final, espolvoreÃ© el queso.'
        },
        {
          id: 'spaghetti-con-camaromes-y-brocoli',
          imagen: 'fusilli-salsa-hinojo',
          titulo: 'Fusilli con Salsa de hinojo',
          ingredientes: ' 1 paquete de Fusilli.-- 1 bulbo de hinojo.-- 1 puerro grande.-- 150 cc. caldo de gallina.-- 200 gr. crema de leche.-- 30 grs. mantequilla.-- 1 ramita de tomillo.-- 1 tallo de cebollÃ­n.-- Sal y pimienta a gusto.',
          preparacion: 'Limpie bien el hinojo y pique en pequeÃ±os cubos, derrita la mantequilla y salteÃ© el hinojo junto al puerro hasta dorar. Agregue el caldo, salpimiente y cocine durante 15 minutos a fuego lento. Retire del fuego, licue y deje reposar. Prepare los Fusilli Di Nizzio, vierta la salsa y sirva de inmediato. Decore con una ramita de tomillo y unas rebanadas del tallo de cebollÃ­n.--A disfrutar una rica pasta Â¡Fusilli!'
        },
        {
          id: 'sopa-de-cabellos-de-angel',
          imagen: 'farfalle-verduras',
          titulo: 'Farfalle con Verduras',
          ingredientes: ' 1 paquete de Farfalle.-- 1 1/2 taza de pimentón rojo cortado en cubitos.-- 1 1/2 taza de pimentón verde cortado en cubitos.-- 1 1/2 taza de zanahoria cortada en cubitos.-- 1 1/2 de porotos verdes corte francés.-- 1 1/2 de arvejitas finas.-- 1 zapallo italiano cortado en rodajas.-- 2 dientes de ajo picados finamente.-- 2 1/2 cucharadas de aceite de oliva.-- Orégano fresco (opcional).-- Sal y pimienta a gusto.',
          preparacion: 'Cocine el Farfalle Di Nizzio calentando primero el sartén y sofrÃ­a el ajo con aceite de oliva, revolviendo constantemente. Una vez dorado el ajo, agregue las verduras y saltee dejándolas al dente. Añada la sal y pimienta al gusto y mezcle con la pasta Di Nizzio. Decorar con orégano fresco y sirve inmediatamente.-- ¡Comparte una exquisita Farfalle con verduras!.'
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


})();
