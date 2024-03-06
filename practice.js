  var num=document.getElementById("one")
        var num1= Math.ceil(Math.random()*10)
        
        function change(){
            
            console.log(num1);
    
        }
var x=10;class food{
    constructor(rice){
        this.rice=rice;
    }
    
}
class friedRice extends food{
    constructor(meat, oil, rice){
        super(rice);
        this.meat = meat;
        this.oil=oil;   
        
    }

}
class briyani extends food{
    constructor(meat, oil, rice){
        super(rice);
        this.meat = meat;
        this.oil=oil;
      console.log();
       
       
        
    }
 

}
const friedRice1=new friedRice("chicken","friedOil","basmathi");
const briyani1=new briyani("mutton","bambOil","basmathi");

console.log(friedRice1);
cosole.log();
