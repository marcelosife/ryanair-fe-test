import template from './airport-wrapper.component.html';
import controller from './airport-wrapper.controller';

export const AirportWrapperComponent = {
	bindings: {
    flyout: '<',
    flyback: '<',
    infoairp: '<',
    routesout: '<',
    routesback: '<',
  },
  template,
  controller : controller
};
