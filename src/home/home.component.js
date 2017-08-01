import template from './home.component.html';
import './home.component.scss';
import {
  CheapFlightService
} from '../services';

homeController.$inject = ['CheapFlightService'];

function homeController(CheapFlightService){
	
	this.showFilters = function(){
		this.filtersON = true;
		this.description = "Fill the filter to find the cheapest flights!";
	};
	this.hideFilters = function(){
		this.filtersON = false;  
		this.description = "Go to Flights to specify or change your search";   
	}
	this.$onInit = () => {
		this.filtersON = false;
		this.description = "Go to Flights to specify or change your search";
		this.flyout = {code : ""}
		this.flyback  = {code :""};
		this.dayout  = {date:new Date()};
	 	this.dayback = {date: ''};
	}	
};

export const HomeComponent = {
	bindings: {
    filtersON: '<',
    dayout: '<',
    dayback: '<',
    flyout: '<',
    flyback: '<',
    description: '<',
    airpsinfo:'<',
    cheaperfly : '<'

  },
  template,
  controller : homeController
};

