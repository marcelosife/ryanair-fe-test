export const CheapFlightService = ($http) => {
function getCheapFlights(startDate, endDate, airportFrom, airportTo) {
    return $http.get('https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/'+airportFrom+'/to/'+airportTo+'/'+startDate+'/'+endDate+'/250/unique/?limit=15&offset-0').then(
			function successCallback(response) {		
				var flightsearch = {};
				var flights = response.data.flights;
				flightsearch.airportTo = airportTo;
				flightsearch.airportFrom = airportFrom;
				var _dateTo;
				var _dateFrom;
				var auxDate;
				var i;
				var dateFormat = require('dateformat');
				for(i = 0; i<flights.length;i++){
					_dateTo = {};
					_dateFrom = {};
					auxDate = new Date(flights[i].dateTo);
					_dateTo['dayTo'] = dateFormat(auxDate, "dd/mm/yyyy");
					_dateTo['timeTo'] = dateFormat(auxDate, "HH:MM");
					auxDate = new Date(flights[i].dateFrom);
					_dateFrom['dayFrom'] = dateFormat(auxDate, "dd/mm/yyyy");
					_dateFrom['timeFrom'] = dateFormat(auxDate, "HH:MM");
					flights[i]._dateFrom = _dateFrom;
					flights[i]._dateTo = _dateTo;
				}		
				flightsearch.flights = response.data.flights;
				return flightsearch;
			}, 
			function errorCallback(response) {
				console.log("erro! getFlights");
     		}
     	);
  }
  return {
    getCheapFlights: getCheapFlights
  }
}
