import template from './flight-list.component.html';
import './flight-list.component.scss';



export const FlightListComponent = {
	bindings: {
    flights: '<'
  },
  template,
  controller: function(){
  	this.$onInit = () => {
  		
  		this.noresults = false;
  		if( this.flights.flights.length ===0)
  			this.noresults = true;
  		else 
  			this.noresults = false;
  	}
  }
};
