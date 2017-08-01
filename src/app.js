import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import { HomeComponent } from './home/home.component';
import {
  CheapFlightService,
  AirportsService
} from './services';


AirportsService.$inject = ['$http'];
CheapFlightService.$inject = ['$http'];

angular.module('myApp', [

  uiRouter,
  Components
])
.service('AiportsService', AirportsService)
.service('CheapFlightService', CheapFlightService)
.component('homePage', HomeComponent)
.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '',
	template: '<home-page airpsinfo="$resolve.airports"></home-page>',
	resolve: {
        airports: ['AiportsService', function (AiportsService) {
          return AiportsService.getAirports().then(
              function successCallback(response) {
                return response.data;
              }, 
              function errorCallback(response) {
                  console.log(response, "erro aero");
            });  
          }]
        }
    })
    .state('home.list', {
        url: '/{startDate}/{endDate}/{airportFrom}/{airportTo}',
        template: '<flight-list flights="$resolve.cheapfly"></flight-list>',
        resolve: {
            cheapfly:['CheapFlightService', '$stateParams',  function(CheapFlightService, $stateParams) {
                return CheapFlightService.getCheapFlights( $stateParams.startDate, $stateParams.endDate, $stateParams.airportFrom, $stateParams.airportTo).then(
              function successCallback(response) {
                return response;
              }, 
              function errorCallback(response) {
                  console.log(response, "erro vooos");
            });  
          }]
        }
    })
})
.controller('MainCtrl', ['$scope','$http', function($scope, $http){  	
}])
.filter('firstOnlyFilter', function() {
  return function(input, searchString) {
    return input.filter(function(item){
      if (item.label.toLowerCase().search(searchString.toLowerCase()) === 0){
        return true;
      }
      return false;
    })
  }
});

