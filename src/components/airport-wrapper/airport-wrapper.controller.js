import moment from 'moment';

export default function DateWrapperController() {
  'ngInject';
  
  this.$onInit = () => {
    this.routesback = [];
    this.flyout.parent = this;
    this.flyout.valid = "";
    this.flyout.type = 0;
    this.flyback.parent = this;
    this.flyback.valid = "";
    this.flyback.type = 1;
    var airpoptions = [];
    if(angular.isDefined(this.infoairp.airports)){
        this.infoairp.airports.forEach(function(airport){
          airpoptions.push({ code:airport.iataCode , name:airport.name  })
        });
        this.routesout  =  airpoptions;
    }
  }

  this.validation = function(type){
    if(type === 0){
      if( this.flyout.code != ""){
        if(this.flyback.code == this.flyout.code){
          alert("The airport of departure must be different from the return airport!");
          this.flyout.valid = "is-danger";
        }else{
          //get the route from the fight back
          var auxroutes = this.infoairp.routes[this.flyout.code];
          var auxroutesfin = [];
          var vm = this; 
          if(angular.isDefined(auxroutes)){

            auxroutes.forEach(function(item){
            for(var i=0; i < vm.infoairp.airports.length ; i++ ){

              if( vm.infoairp.airports[i].iataCode == item )
                auxroutesfin.push({code:item, name:vm.infoairp.airports[i].name});  
            }});
            this.routesback = auxroutesfin;
          }
          this.flyout.valid = "is-success";  
          this.flyback.code = "";
          this.flyback.valid = "is-danger"; 
        }
      }else{
        this.flyout.valid = "is-danger";
      }
    }
    if(type === 1){
      if( this.flyback.code != ""){
        if(this.flyback.code == this.flyout.code){
          alert("The airport of departure must be different from the return airport!");
          this.flyback.valid = "is-danger";
        }else{
          this.flyback.valid = "is-success";   
        }
      }else{
        this.flyback.valid = "is-danger";
      }
    }
  }
}