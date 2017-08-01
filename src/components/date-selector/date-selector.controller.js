export default function DateSelectorController() {
  'ngInject';
  
	this.blurDate  = function () {
		this.date.parent.validDate(this.date.type);		   
	}
}
