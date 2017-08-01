import template from './airport-selector.component.html';
import './airport-selector.component.scss';

export const AirportSelectorComponent = {
	bindings: {
    varairp: '<',
    infoairp: '<'
  },
  template,
  controller : 

	function(){
		'ngInject';
		
		this.showOptions = function () {
			this.soptions = true;
		} 
		this.clickOptions = function (itemselected) {
			this.varairp.code = itemselected;
			this.soptions = false;
			this.varairp.parent.validation(this.varairp.type);			
		}
		this.changeOptions = function () {
			this.varairp.parent.validation(this.varairp.type);
		}   
	}
};
