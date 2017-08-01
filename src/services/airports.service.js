export const AirportsService = ($http) => {
  function getAirports() {
  	return $http.get( 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/');
  };
  return {
    getAirports: getAirports
  }; 
};
