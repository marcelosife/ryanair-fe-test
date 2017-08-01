import angular from 'angular';
import { DateWrapperComponent } from './date-wrapper/date-wrapper.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { AirportWrapperComponent } from './airport-wrapper/airport-wrapper.component';
import { AirportSelectorComponent } from './airport-selector/airport-selector.component';
import { FlightListComponent } from './flight-list/flight-list.component';
export default angular.module('app.components', [])
.component('dateWrapper', DateWrapperComponent)
.component('dateSelector', DateSelectorComponent)
.component('airportWrapper', AirportWrapperComponent)
.component('airportSelector', AirportSelectorComponent)
.component('flightList', FlightListComponent)
.name;