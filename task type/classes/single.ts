export class single {
   
    private static s :single = new single ()

    private constructor(){}

   static createone (){
       return single.s ;
   }

  

   display():void{

    console.log("one")
   }
       
}