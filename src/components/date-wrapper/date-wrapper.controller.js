import moment from 'moment';

export default function DateWrapperController($scope) {
  'ngInject';

  this.$onInit = () => {
    this.startdate.parent = this;
    this.startdate.valid = "";
    this.startdate.type = 0;
    this.enddate.parent = this;
    this.enddate.valid = "";
    this.enddate.type = 1;
  }
  this.validDate = function(type){
    if(type ===0){
      if(this.startdate.date != ""){
        if (moment(this.startdate.date) > moment(this.enddate.date)) {
          console.log("teste");
          this.enddate.date = moment(this.startdate.date).add(2, 'd').toDate();
        }
        this.startdate.valid = "is-success";
      }
      else{
        this.startdate.valid = "is-danger";
      }
    }
    if(type ===1 ){
      if(this.enddate.date != ""){
        if (moment(this.enddate.date) < moment(this.startdate.date)) {
          this.startdate.date = moment(this.enddate.date).subtract(2, 'd').toDate();
        }
        this.enddate.valid = "is-success";
      }
      else{
        this.enddate.valid = "is-danger";
      }  
    }    
  };
}
