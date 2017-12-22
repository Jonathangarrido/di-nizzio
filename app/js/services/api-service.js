(function () {
  'use strict';

  Consultas.$inject = ['$location','$http'];
  function Consultas($location,$http){

    var service = {
      get_slider: get_slider,
      get_recetas: get_recetas,
      get_id: get_id,
      get_producto_id: get_producto_id
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
          descripcion: 'clásico e infaltable en nuestras despensas',
          datos: {
            porcion: '1/5',
            porcionGramos: 80,
            porcionEnvase: 5,
            gramos: 400,
            ficha: '043664_dinizzio_spaghetti',
            energia: [358,286],
            proteinas: [12,9.6],
            grasas: [1.0,0.8],
            hidratos: [73,59],
            azucares: [2.7,2.1],
            sodio: [8.0,6.4]
          }
        },
        {
          url: 'fusilli',
          imagen: 'fusilli.png',
          titulo: 'Fusilli',
          tipo: 'Espirales',
          descripcion: 'VersÃ¡tiles y aptos para toda preparación',
          datos: {
            porcion: '1/5',
            porcionGramos: 80,
            porcionEnvase: 5,
            gramos: 400,
            ficha: '044091_dinizzio_fusilli',
            energia: [358,286],
            proteinas: [12,9.6],
            grasas: [1.0,0.8],
            hidratos: [73,59],
            azucares: [2.7,2.1],
            sodio: [8.0,6.4]
          }
        },
        {
          url: 'vermicelli',
          imagen: 'vermicelli.png',
          titulo: 'Vermicelli',
          tipo: 'Cabellos de Ãngel',
          descripcion: 'El invitado especial de sopas y consomés',
          datos: {
            porcion: '1/5',
            porcionGramos: 80,
            porcionEnvase: 5,
            gramos: 400,
            ficha: '044067_dinizzio_vermicelli',
            energia: [358,286],
            proteinas: [12,9.6],
            grasas: [1.0,0.8],
            hidratos: [73,59],
            azucares: [2.7,2.1],
            sodio: [8.0,6.4]
          }
        },
        {
          url: 'chifferini',
          imagen: 'chifferini.png',
          titulo: 'Chifferini',
          tipo: 'Quifaros o Coditos',
          descripcion: 'Atractiva forma que atrapa los sabores',
          datos: {
            porcion: '1/5',
            porcionGramos: 80,
            porcionEnvase: 5,
            gramos: 400,
            ficha: '044059_dinizzio_chifferini',
            energia: [358,286],
            proteinas: [12,9.6],
            grasas: [1.0,0.8],
            hidratos: [73,59],
            azucares: [2.7,2.1],
            sodio: [8.0,6.4]
          }
        },
        {
          url: 'farfalle',
          imagen: 'farfalle.png',
          titulo: 'Farfalle',
          tipo: 'Tipo Corbatita',
          descripcion: 'Viste de etiquetas tus platos más cotidianos',
          datos: {
            porcion: '1/5',
            porcionGramos: 80,
            porcionEnvase: 5,
            gramos: 400,
            ficha: '013013_dinizzio_farfalle',
            energia: [358,286],
            proteinas: [12,9.6],
            grasas: [1.0,0.8],
            hidratos: [73,59],
            azucares: [2.7,2.1],
            sodio: [8.0,6.4]
          }
        },
        {
          url: 'salsa-de-tomates',
          imagen: 'salsa.png',
          titulo: 'Salsa de Tomates',
          tipo: 'Salsa',
          descripcion: 'La verdadera receta italiana con trozos de tomate',
          datos: {
            porcion: 2,
            porcionGramos: 20,
            porcionEnvase: 10,
            gramos: 200,
            ficha: '015253_dinizzio_salsaitaliana',
            energia: [33,6.6],
            proteinas: [1.4,0.3],
            grasas: [0.2,0.0],
            hidratos: [7.7,1.5],
            azucares: [6.9,1.4],
            sodio: [141,28]
          }
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
          ingredientes: ' 400 grs. de Spaghetti Di Nizzio.-- 1 cucharada de aceite oliva.-- 1 cebolla pequeña picada.-- 2 dientes de ajo machacados.-- 1 cucharada de jugo de limón.-- 1/2 taza de perejil fresco y picado.-- 1/4 de cucharada de mariné (opcional).-- 2 latas de atún.',
          preparacion: 'Cocine la pasta por 11 minutos (hasta que esté al dente), escurra y reserve. Sofría la cebolla y el ajo en aceite y luego, agregue las alcaparras, tomate, jugo de limón, merkén y perejil.-- Deje espesar la mezcla por 3 minutos aproximadamente y añade atún hasta que alcance la misma temperatura. Por último, integre la salsa junto al Spaghetti Di Nizzio.'
        },
        {
          id: 'sopa-de-verduras',
          imagen: 'sopa-verduras',
          titulo: 'Sopa de Verduras',
          ingredientes: ' 1 paquete de Vermicelli Di Nizzio.-- 1 litro de agua.-- 1/2 taza de cebolla picada.-- 1/2 taza de zanahoria picada en rodajas.-- 3 cucharadas de apio picado.-- 2 unidades cubito de caldo de verduras.-- 1/2 taza puerro o cebollín.-- 2 cucharadas de aceite.-- Sal y pimienta a gusto.',
          preparacion: 'En un olla salteé la cebolla, la zanahoria, el puerro o cebollín (reserve un poco para decorar) y el apio picado junto al aceite. Cocine durante 3 minutos y agregue al agua el caldo de cubo de verduras y los Vermicelli Di Nizzio. Cocine hasta que la pasta esté al dente y condimentar. Sirva en un plato hondo y decore con puerro o cebollín picado.-- ¡Listo! Ya tienes una rica sopa de verduras.'
        },
        {
          id: 'chifferini-a-la-crema',
          imagen: 'chifferini-crema',
          titulo: 'Chifferini a la Crema',
          ingredientes: ' 1 paquete de Chifferini Di Nizzio.-- 1 1/2 taza de tomates cherry cortados a la mitad.-- 1 1/2 taza de queso gruyere o parmesano en hebras.-- 2 ó 3 láminas de salmón ahumado (opcional).-- 200 cc de crema espesa.-- 2 dientes de ajo picados finamente.-- 2 1/2 cucharadas de aceite de oliva.-- Albahaca fresca (opcional).-- Sal y pimienta a gusto.',
          preparacion: 'Prepare el Chifferini Di Nizzio, calentando primero el sartén y sofría el ajo picado con aceite de oliva, revolviendo constantemente. Una vez dorado, agregue los tomates cherry y saltear, hasta que estén ligeramente asados. Salpimiente a gusto. En un sartén aparte, precaliente la crema, aliñe y agregue las láminas de salmón. La idea es que alcance algo de temperatura, pero que no alcance a hervir. Por último incorpore la salsa a la pasta, mezcle y decore la pasta poniendo algunos tomates asados y albahaca. Como toque final, espolvoreé el queso.'
        },
        {
          id: 'fusilli-con-salsa-de-hinojo',
          imagen: 'fusilli-salsa-hinojo',
          titulo: 'Fusilli con Salsa de hinojo',
          ingredientes: ' 1 paquete de Fusilli.-- 1 bulbo de hinojo.-- 1 puerro grande.-- 150 cc. caldo de gallina.-- 200 gr. crema de leche.-- 30 grs. mantequilla.-- 1 ramita de tomillo.-- 1 tallo de cebollín.-- Sal y pimienta a gusto.',
          preparacion: 'Limpie bien el hinojo y pique en pequeños cubos, derrita la mantequilla y salteé el hinojo junto al puerro hasta dorar. Agregue el caldo, salpimiente y cocine durante 15 minutos a fuego lento. Retire del fuego, licue y deje reposar. Prepare los Fusilli Di Nizzio, vierta la salsa y sirva de inmediato. Decore con una ramita de tomillo y unas rebanadas del tallo de cebollín.-- A disfrutar una rica pasta ¡Fusilli!'
        },
        {
          id: 'farfalle-con-verduras',
          imagen: 'farfalle-verduras',
          titulo: 'Farfalle con Verduras',
          ingredientes: ' 1 paquete de Farfalle.-- 1 1/2 taza de pimentón rojo cortado en cubitos.-- 1 1/2 taza de pimentón verde cortado en cubitos.-- 1 1/2 taza de zanahoria cortada en cubitos.-- 1 1/2 de porotos verdes corte francés.-- 1 1/2 de arvejitas finas.-- 1 zapallo italiano cortado en rodajas.-- 2 dientes de ajo picados finamente.-- 2 1/2 cucharadas de aceite de oliva.-- Orégano fresco (opcional).-- Sal y pimienta a gusto.',
          preparacion: 'Cocine el Farfalle Di Nizzio calentando primero el sartén y sofría el ajo con aceite de oliva, revolviendo constantemente. Una vez dorado el ajo, agregue las verduras y saltee dejándolas al dente. Añada la sal y pimienta al gusto y mezcle con la pasta Di Nizzio. Decorar con orégano fresco y sirve inmediatamente.-- ¡Comparte una exquisita Farfalle con verduras!.'
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

    // RECETA ESPECIFICA
    function get_producto_id(id){
      var filtro = service.get_slider().filter(function(producto){
        return producto.url === id
      })
      return filtro[0];
    }


  }



  angular
    .module('apiService', [])
    .factory('Consultas', Consultas)


})();
